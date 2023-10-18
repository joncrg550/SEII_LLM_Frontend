# SEII_LLM_Frontend
A frontend chatbot client for an LLM SEII UCO Fall 2023

#frontend

 -Requirements 
  Node.js and NPM (Node Package Manager) installed in your dev environment. https://nodejs.org/en/download

Project Using Angular framework https://angular.io/docs

from SEII_LLM_FRONTEND/frontend call

```npm update```

 from command line/terminal to download needed node packages from NPM.

To run the test server (w/ hot reloading) call

```ng serve```

to add the boilerplate code for a new component call 

```ng generate component <component name>```

to add the boilerplate code for a new service call 

```ng generate component <service name>```

to run tests call

```ng test```

and enter ctrl + c to exit test runner

to get help with angular CLI call 

```ng help```

I have added a stub component and stub service to demonstrate what boilerplate will be generated. 
In angular applications are built with a component structure, loosely meaning UI elements will be a composition of components
i.e an app component could house a routing component, which navigates to page components, that house form components, picture components, text components etc.
Components are made up of a TS file that defines component behaviour, HTML file which defines component structure template, CSS file defining component style, and TS file defining tests upon the component.
Services are similar to components, except that they only define behaviour, have no 'view'(HTML/CSS) and are used for data sharing between components on the front end for  state management, or interacting with backend services.
Tests are ran via the Jasmine test suite, integrated into the angular framework.

See #COMMENT in app.component.html to see how I am composing the exampleComponent and exampleService (as well as their respective HTML and TS files), or review the angular docs.