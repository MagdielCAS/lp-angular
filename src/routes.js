angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, APP_KEY) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/login');
  $httpProvider.defaults.headers.common['X-Api-Key'] = APP_KEY;

  $stateProvider
    .state('hello', {
      url: '/hello',
      templateUrl: 'app/hello/hello.html',
      controller: 'HelloController',
      controllerAs: 'vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });
}
