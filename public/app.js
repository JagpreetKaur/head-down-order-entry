var app = angular.module('app', [
  'ui.router',
  'ngMaterial',
  'ngAnimate',
]).config(['$stateProvider', '$urlRouterProvider'], function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'components/login/login.html',
      params: {}
    })
});
