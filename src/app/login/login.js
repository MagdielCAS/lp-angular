angular
    .module('app')
    .controller('LoginController', LoginController);

/** @ngInject */
function LoginController(AuthService) {
    var vm = this;

    vm.formData;
    vm.submit;

    activate();

    ////////////////

    function activate() {
        vm.formData={}
        vm.submit = submit;
     }

     function submit(){
        AuthService.auth(vm.formData)
                .finally(function () {
                    console.log("deu certo");
                })
                .catch(function (err) {
                    console.error(err);
                });
     }
}
