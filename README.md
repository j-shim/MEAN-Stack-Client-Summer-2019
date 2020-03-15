# Canorea (Study Abroad Agency)

This repository is the client-side of the *private/business project* for Canorea (Study Abroad Agency for Koreans to study in Canada).

For production-ready web application, click [here](http://canorea.kr/).

## Setup

You will need Git, NPM (Install with Node.js) and Angular CLI installed on your machine.

### macOS with [Homebrew](https://brew.sh/) Package Manager

Open up a Terminal and type:

```bash
brew update
brew install node git
sudo npm install -g npm
sudo npm install -g @angular/cli
# Verify Angular CLI is installed correctly
ng
```

### Cloning this repository onto your local machine

Open up a Terminal, `cd` to your preferred directory and type:

```bash
git clone git@github.com:j-shim/MEAN-Stack-Client-Summer-2019.git
```

*Note:* If `git clone` fails, confirm that your [SSH Key](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2) is set up and registered properly.

## Usage

### Development Server

Open up a Terminal, cd to the repo and type:

```bash
sudo npm install -g npm # updates npm
sudo npm install # installs node modules
npm start
```

Type http://localhost:4200 in your web browser to see it running.

### Production

`ng build --prod` is the default way of generating production-ready static files.

However, feel free to check out the two scripts, `ng-build.sh` and `ng-build-heroku-testing.sh`.
`ng-build.sh` is for deploying to AWS EC2.

## Author

* **June Shim** - jys2@sfu.ca / [GitHub](https://github.com/j-shim)

# Original README below:

# MeanClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
