require File.dirname(__FILE__) + '/../spec_helper'

describe "HTML" do
  examples_from_yaml do |doc|
    RedCloth.new(doc['in']).to_html
  end
  
  it "should not raise an error when orphaned parentheses in a link are followed by punctuation and words in HTML" do
    lambda {
      RedCloth.new(%Q{Test "(read this":http://test.host), ok}).to_html
    }.should_not raise_error
  end
end