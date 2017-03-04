angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, APP_KEY) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/login');
  $httpProvider.defaults.headers.common['X-Api-Key'] = APP_KEY;

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    }).state('itens', {
      url: '/itens',
      templateUrl: 'app/item-list/item-list.template.html',
      controller: 'ItemListController',
      controllerAs: 'vm'
    });
}
