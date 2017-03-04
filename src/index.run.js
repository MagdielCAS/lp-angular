angular
  .module('app')
  .run(run);

/** @ngInject */
function run($transitions){
    $transitions.onStart({}, function (trans){
        var SessionService = trans.injector().get('SessionService');
        var AuthService = trans.injector().get('AuthService');
        var stateTo = trans.$to();

        SessionService.init();

        if(!AuthService.isAuthenticated()){        
            if(publicRoute(stateTo.name)) return;
            return trans.router.stateService.transitionTo('login');
        } else if(publicRoute(stateTo.name)){
            return trans.router.stateService.transitionTo('itens');
        }

        function publicRoute(route){
            return route === 'login';
        }
    });
}
