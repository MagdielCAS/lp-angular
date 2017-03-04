angular
    .module('app')
    .service('AuthService', AuthService);

/** @ngInject */
function AuthService(AUTH_SERVER, $http, $state, SessionService) {
    var resource = AUTH_SERVER + 'auth/signin';

    this.auth = auth;
    this.isAuthenticated = isAuthenticated;

    ////////////////
  
    function auth(credentials) {
        return $http.post(resource, credentials)
            .then(function (res) {
                SessionService.onCreate(res.data.user);
                $state.transitionTo('itens');
            });
    }

    function isAuthenticated() {
        return !!SessionService.user;
    }
}
