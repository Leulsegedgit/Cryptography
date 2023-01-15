# Assignment2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
############################################################################################################################################
## About the web-app

I used crypto-js liberary to implement 3DES and AES encryption but I implenment the ONE-TIME-PAD encryption myself by first converting the input text to ASCI and then convert the numbers to binary and doing XOR with the key and finally converting the result back to text and printing the result.

################################################################################################################################################
## Update made for the extension

This time I add sign in option using google authentication so that users can login to the app using thier google account.

Steps followed:
  -I create a google OAuth project and find a client Id to be used on my web app
  link:  https://console.cloud.google.com/welcome
  -I used this npm package  https://www.npmjs.com/package/@abacri to communicate with google service
  -I created a login componetnt page and add a button to sign with google
  -On successfull login the user let to use the encryption application and detail about user returned form google is printed on the top of the app like userPhoto, username and email..
