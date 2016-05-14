// Include Our Plugins
var bump          = require('gulp-bump'),
    clean         = require('gulp-clean'),
    concat        = require('gulp-concat'),
    cssmin        = require('gulp-cssmin'),
    exec          = require('gulp-exec'),
    fs            = require('fs'),
    git           = require('gulp-git'),
    gulp          = require('gulp'),
    include       = require('gulp-include'),
    minimist      = require('minimist'),
    rename        = require('gulp-rename'),
    replace       = require('gulp-replace'),
    runSequence   = require('run-sequence'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    swig          = require('gulp-swig'),
    tag_version   = require('gulp-tag-version');

var config = {
   bowerDir: './bower_components' ,
  import_path: './src/sass/'
};

var args = {
  string: 'defcon',
  default: { defcon: process.env.NODE_ENV || 'patch' }
};

var options = minimist(process.argv.slice(2), args);

gulp.task('bump', function() {
  // bump the package version
  // get all the files to bump version in
  return gulp.src(['./package.json', './bower.json'])
    // bump the version number in those files
    .pipe(bump({type: options.semver}))
    // save it back to filesystem
    .pipe(gulp.dest('./'));
});

gulp.task('compile', ['clean'], function(){
  runSequence('sass', 'minify', 'kss-html', 'kss');
});

// Clean build
gulp.task('clean', function() {
  return gulp.src([
      './dist',
      './temp',
      './docs',
      './kss-html/dist/',
    ])
    .pipe(clean({force: true}));
});

gulp.task('default', ['compile'], function(){
  runSequence('watch');
});

// KSS for CSS documentation
gulp.task('kss', ['kss-html'], function(cb) {
  var options = {
    continueOnError: false,
    pipeStdout: true
  };
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: true
  };

  fs.readFile("./kss-html/html/includes/kss-markup.html", "UTF8", function(err, kss_markup) {
    if (err) { throw err };

    gulp.src('./kss-html/html/layouts/kss-template.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(rename("index.html"))
    .pipe(replace(/INJECT_KSS_MARKUP/g, kss_markup))
    .pipe(gulp.dest('./temp/kss'));

  });

  return gulp.src('./src/sass/**/*.*')
    .pipe(concat('kss'))
    .pipe(exec('kss-node --config=.kss-node.json', options))
    .pipe(exec.reporter(reportOptions));
});

// Compile Templates
gulp.task('kss-html', ['temp'], function(){

  gulp.src('./kss-html/sass/kss.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({
          includePaths: ['./src/sass']
        }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./kss-html/dist/css'));

  gulp.src([
      config.bowerDir + '/jquery/jquery.js',
      './kss-html/js/kss.js'
    ])
    .pipe(concat('kss.js'))
    .pipe(gulp.dest('./kss-html/dist/js'));

  gulp.src('./kss-html/fontcustom-preview.html')
    .pipe(replace(/\.\.\/src/g, 'dist'))
    .pipe(rename("fontcustom.htm"))
    .pipe(gulp.dest('./docs'));

  return gulp.src('./kss-html/homepage.md')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(rename("homepage.md"))
    .pipe(gulp.dest('./temp/kss'));
});

gulp.task('sass', ['temp'], function() {
  gulp.src('./temp/sass/**/*.*')
    .pipe(gulp.dest('./dist/scss'));

  return gulp.src('./temp/sass/styleguide.scss')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify', ['sass'], function() {
  return gulp.src('./dist/css/styleguide.css')
    .pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('tag', function() {
  gulp.src('./package.json')
    .pipe(tag_version());
});

// Move source over for compiling
gulp.task('temp', function(){
  // Sass
  return gulp.src('./src/sass/**/*.scss')
    .pipe(gulp.dest('./temp/sass/'));

});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', ['sass', 'kss']);
  gulp.watch('./kss-html/**/*.*', ['kss']);
});
