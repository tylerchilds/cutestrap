Rake::Task['build'].prerequisites.unshift('compile')

namespace :build do
    desc "Generate Windows binary gems"
    task :win do
      unless File.directory?(File.expand_path('~/.rake-compiler'))
        STDERR.puts <<-EOM

  You must install Windows rubies to ~/.rake-compiler with:

    rake-compiler cross-ruby VERSION=1.8.6-p398
    # (Later 1.9.1 patch levels don't compile on mingw) 
    rake-compiler cross-ruby VERSION=1.9.1-p243
  EOM
        exit(1)
      end
      # rvm and mingw ruby versions have to match to avoid errors
      sh "rvm ruby-1.8.6-p398@redcloth rake cross compile RUBY_CC_VERSION=1.8.6"
      sh "rvm ruby-1.9.1-p243@redcloth rake cross compile RUBY_CC_VERSION=1.9.1"
      # This will copy the .so files to the proper place
      sh "rake cross native gem RUBY_CC_VERSION=1.8.6:1.9.1"
    end

    desc 'Generate JRuby binary gem'
    task :jruby do
      sh "rvm jruby@redcloth rake java gem"
    end

    desc "Build ruby, windows, and jruby gems into the pkg directory"
    task :all => [
      :clobber,
      "rvm:spec",
      :jruby,
      :win,
      :build
    ]
end