# 1 Nation Prototype

[![Bayly|Consulting](http://www.baylyconsulting.com/wp-content/uploads/2016/07/logo-e1468100765654.png)](http://baylyconsulting.com)

1 Nation Angular 2 Prototype

##Getting Started
- Clone the repository into a folder
- Run $npm install
- Begin Development. 
- Its that simple


##Internationalization i18n
The system comes complete with i18n configured and setup. 
- You have a local file complete with a sample english file
- Once you complete building the application you build your xlf file for english
- This file is sent to someone to translate it, you can set the locale variable in the index.html to build to different languages
- When you put static text on the page use the i18n variable as seen in the page examples to mark text for translation. 
- Run $npm run translate:build to compile the static text into a translation file. 

##Find out more about 118n and its use 
'https://angular.io/docs/ts/latest/cookbook/i18n.html#!/%23angular-i18n'


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.