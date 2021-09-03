# Responsive UI Space X

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2 by Vamsi Ambati

## Live Server

[CLICK HERE](https://spacex-vamsiambati.web.app)

## To Test

Clone the repo and install node modules using `npm install` (Node Package Manager is required)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Approach

Used FlexBox CSS and Used queries to delvelop the responsive UI
* Code can be fount in app.component.css
* For Filter Options used radio groups and hid the native radio selector using css
* Used `ngClass` directive to highlight the selected radio option

Used Angular Reactive Forms to develop filter functionality
* Disabled filters on API request using Angular Reactive Forms
* Subscribed to the form changes and then based on the changes created a querysting and called the API
* Used Angular Services to reduce code duplication

Deployed app in Google Firebase
