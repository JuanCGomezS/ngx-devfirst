# Library NgxDevfirst

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Author
Name: Juan Gomez
[url:](https://juancgomezs.github.io/)

## Steps for create library

1. Create an Angular project Use the Angular CLI to create a new Angular project with routing and CSS styling:
       ng new app-library-dev --routing --style=css

2. Generate a library Generate a new Angular library using the Angular CLI:
       ng generate library ngx-devfirst

3. Change the prefix in angular.json (optional) You can change the prefix used for your components in the angular.json file:
       "prefix": "ngx-dev"

4. Create a module and a component (one module per component) Use the Angular CLI to generate a new module and a new component:
       ng g m Devfirst	
       ng g c header

In the generated component, you can add the functionality you want to include in your library. You need to import the module and component in public_api.ts and export the component in the module:
       exports: [HeaderComponent]

In the package.json file of your project, you should have an author section. Create a assets folder for global variables and a CSS file for global styles (:root). Add the assets in ng-package.json. Use these styles in your component.

5. Compile the project Use the Angular CLI to build your library:
       ng build ngx-devfirst

If the build is successful, it will create a dist directory.

6. Package the project Navigate to the dist directory and use npm to package your library:
       cd dist
       npm pack

Your library will be available [on](npmjs.com.)

## To use the library: Install your library using npm:

   npm i ngx-devfirst

Import your module in app.module (for example, DevHeaderModule) and import your styles in the style.css file of your project.
