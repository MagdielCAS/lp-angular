angular
    .module('app')
    .service('AuthService', AuthService);

/** @ngInject */
function AuthService(AUTH_SERVER, $http, $state) {
    var resource = AUTH_SERVER + 'auth/signin';

    this.auth = auth;
    this.isAuthenticated = isAuthenticated;

    ////////////////
  
    function auth(credentials) {
        return $http.post(resource, credentials)
            .then(function (res) {
                SessionService.onCreate(res.data.user);
                $state.go('hello');
            });
    }

    function isAuthenticated() {
        return !!SessionService.user;
    }
}
