import angular from 'angular';

import { MainController } from "./controllers/main";

angular
  .module('app', [])
  .controller('MainController', MainController);

// Kind of like we're saying ...
// angular.module = new Module('app', []);
// angular.controller = new MainController()
