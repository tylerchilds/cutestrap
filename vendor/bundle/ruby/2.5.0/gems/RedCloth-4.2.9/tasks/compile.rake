CLEAN.include [
  'tmp',
  '**/*.{o,obj,class,pdb,lib,def,exp,log,rbc}',
  'ext/redcloth_scan/**/redcloth_*.rb',
  'ext/redcloth_scan/Makefile',  'ext/redcloth_scan/extconf.rb',
]
CLOBBER.include [
  'pkg',
  '**/*.{c,java}',
  'lib/**/*.{bundle,so,o,obj,pdb,lib,def,exp,jar}',
  'lib/redcloth_scan.rb',
]

# Load the Gem specification for the current platform (Ruby or JRuby).
def gemspec(platform = RUBY_PLATFORM[/java/] || 'ruby')
  Gem::Specification.load(File.expand_path('../../redcloth.gemspec', __FILE__))
end

require 'rake/extensiontask'
require 'rake/javaextensiontask'
require File.dirname(__FILE__) + '/ragel_extension_task'

if defined?(JRUBY_VERSION)
  Rake::JavaRagelExtensionTask.new('redcloth_scan', gemspec)
else
  extconf = "ext/redcloth_scan/extconf.rb"
  file extconf do
    FileUtils.mkdir(File.dirname(extconf)) unless File.directory?(File.dirname(extconf))
    File.open(extconf, "w") do |io|
      io.write(<<-EOF)
require 'mkmf'
CONFIG['warnflags'].gsub!(/-Wshorten-64-to-32/, '') if CONFIG['warnflags']
$CFLAGS << ' -O0 -Wall ' if CONFIG['CC'] =~ /gcc/
dir_config("redcloth_scan")
have_library("c", "main")
create_makefile("redcloth_scan")
      EOF
    end
  end

  Rake::RagelExtensionTask.new("redcloth_scan", gemspec) do |ext|
    if ENV['RUBY_CC_VERSION']
      ext.cross_compile = true
      ext.cross_platform = ['i386-mingw32', 'i386-mswin32-60']
    end
  end
end
