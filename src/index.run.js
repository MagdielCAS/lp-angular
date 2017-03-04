angular
  .module('app')
  .run(run);

/** @ngInject */
function run($transitions){
    $transitions.onStart({}, function (trans){
        console.log('entrou aqui')

        var sessionService = trans.injector().get('SessionService');
        var authService = trans.injector().get('AuthService');
        var stateTo = trans.$to();

        sessionService.init();

        if(!authService.isAuthenticated()){        
            if(publicRoute(stateTo.name)) return;
            return trans.router.stateService.transitionTo('login');
        } else if(publicRoute(stateTo.name)){
            return trans.router.stateService.transitionTo('hello');
        }

        function publicRoute(route){
            return route === 'login';
        }
    });
}
