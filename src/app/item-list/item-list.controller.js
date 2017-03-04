angular
    .module('app')
    .controller('ItemListController', ItemListController);

/** @ngInject */
function ItemListController($mdDialog, AUTH_SERVER, SessionService, $http, $state) {
    var vm = this;

    vm.newItem;
    vm.itens;

    vm.addItem = addItem;
    vm.resolve = resolve;
    vm.showCustom = showCustom;
    vm.logout = logout;

    activate();

    ///////////////////////////

    function activate(){
        vm.itens= [{
            title: "Titulo da tarefa",
            content: "Descrição da tarefa"
        }];
  }

    function logout(){
        $http.get(AUTH_SERVER + 'auth/logout');
        SessionService.onDestroy();
        $state.transitionTo('login');
    }

    function addItem(newItem){
        vm.itens.push(newItem);
        console.log(newItem);
        vm.newItem = {
            title: '',
            content: '',
        };
    };

    function resolve(item){
        var index = vm.itens.indexOf(item);
        index!=-1?vm.itens.splice(index, 1):console.log("nao existe no array");
    };

    function showCustom(event,item) {    
        $mdDialog.show({
            clickOutsideToClose: true,     
            preserveScope: true,       
            targetEvent: event,    
            controllerAs: 'dlg',
            templateUrl: 'app/item-list/item-list-editdialog.template.html',
            controller: 'ItemListDialogController',
            locals: {
                obj: angular.copy(item)
            },
        }).then(function(answer) {
                var index = vm.itens.indexOf(item);
                index!=-1?vm.itens.splice(index, 1,answer):console.log("nao existe no array");
                console.log(answer);
            }, function() {
                console.log("ação cancelada");
        });
    }
}