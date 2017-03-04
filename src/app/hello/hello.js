angular
  .module('app')
  .controller('HelloController', HelloController);

/** @ngInject */
function HelloController(AUTH_SERVER, SessionService, $state, $http) {
  var vm = this;

  vm.hello;

  vm.logout;

  activate();

  ////////////////

  function activate() {
    vm.hello = 'Hello World!';
    vm.logout = logout;
  }

  function logout(){
    $http.get(AUTH_SERVER + 'auth/logout');
    SessionService.onDestroy();
    $state.transitionTo('login');
  }
}
