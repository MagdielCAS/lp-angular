angular
  .module('app')
  .controller('HelloController', HelloController);

/** @ngInject */
function HelloController() {
  var vm = this;

  vm.hello = "";

  activate();

  function activate() {
    vm.hello = 'Hello World!';
  }
}
