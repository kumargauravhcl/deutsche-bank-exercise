## Installation instruction and environment to use

C:\Work\DeutscheBank>npm -v
6.13.7

C:\Work\DeutscheBank>node -v
v12.16.1

## Package Version

Angular:Ivy Workspace:
Angular CLI: 9.0.3
Node: 12.16.1
OS: win32 ia32
@angular-devkit/architect 0.900.3
@angular-devkit/core 9.0.3
@angular-devkit/schematics 9.0.3
@schematics/angular 9.0.3
@schematics/update 0.900.3
rxjs 6.5.3

## Deutsche-Bank-Exercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Installation after taking clone from GIT

Run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server in aot Mode

Run `ng serve --aot` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Modules

Created one `country` modules which contains 3 components

1. Container component
2. Dropdown component used for loading `regions` and corresponding `countries`
3. Country Detail components for showing the tabular structure of country detail

## Components

1. Created one loader component and corresponding HTTP Service, to show loader whenever their is any API hit

## Angular material library is used and following controls are being consumed

1. MatProgressBarModule
2. MatSelectModule
3. MatTableModule

## Lazy loading is used but since it is very small application, so advantage of lazily loaded module is unseen

Please visit app-routing module and see line #7
`{ path: 'home', loadChildren: () => import('./country/country.module').then(m => m.CountryModule) }`

## ngrx is used

Go to App > +store
This folder contains app level reducer and state but since application contains only one module, so only one state and module will be there

`Region and Country level store`
Go To App > Country > +store

1. `country.action.ts` contains actions to fetch country based on region
2. `country.effect.ts` contains effects for fetching country asynchronouly via country.service.ts
3. `country.reducer.ts` contains reducer function for country
4. `country.state.ts` contains state for country module
5. `country.selector.ts` contains selector for country module

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Production Build

Run `ng build --prod` to build the project in production mode

## Linting Issues

Run `ng lint` to see linting issues.
Used `prettier` for formatiing and linting guidelines

## Pending Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
