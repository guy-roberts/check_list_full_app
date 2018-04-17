# An app using JSONAPI::Resources (ruby) with angular2-jsonapi (Typescript) 

This Rails app is a demonstration of using JSON API adaptors in separate server and client
components.  It is described in this [blog post](http://blog.guyroberts.co.uk/app-designing-mobile-audits-check-lists/).


It uses a [Rails Engine](https://github.com/guy-roberts/check_list_engine)that provides
a JSON API to help assemble templates for check lists. 

For the front end it uses an [Angular 2 UI](https://github.com/guy-roberts/check_list_angular_ui)
to provide a drag and drop user interface.


## To install

* git clone git@github.com:guy-roberts/check_list_full_app.git
 
* cd check_list_full_app
 
* bundle install
 
* rake db:setup
 
* Create some seed data
 
* rake check_list_engine:create_audit_data
 
* rails s



## Screenshot

Here is a picture of a component being dragged into a check list template

<img align="left"  src="https://github.com/guy-roberts/check_list_full_app/blob/master/images/Screenshot.png">

