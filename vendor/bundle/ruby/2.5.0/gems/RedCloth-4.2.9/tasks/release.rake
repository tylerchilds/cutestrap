namespace :release do
  desc 'Upload all packages and tag git'
  task :all => ['build:all', :release, :push_native_gems]

  desc 'Push all gems to rubygems.org (gemcutter)'
  task :push_native_gems do
    Dir.chdir('pkg') do
      Dir['*.gem'].select {|g| g =~ /\w+-[^-]+-\w+.gem/ }.each do |gem_file|
        sh("gem push #{gem_file}")
      end
    end
  end
end

Rake::Task['release'].prerequisites.unshift('build')