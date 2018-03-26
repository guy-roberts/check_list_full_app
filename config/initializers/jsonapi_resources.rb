# config/initializers/jsonapi_resources.rb
JSONAPI.configure do |config|
  config.default_paginator = :paged

  config.top_level_links_include_pagination = true

  config.default_page_size = 10
  config.maximum_page_size = 20

  # Javascript prefers underscore, but hyphen is standard.  :underscored_key, :camelized_key, :dasherized_key, or custom
  config.json_key_format = :underscored_key
  #:underscored_route, :camelized_route, :dasherized_route, or custom
  config.route_format = :underscored_route
end
