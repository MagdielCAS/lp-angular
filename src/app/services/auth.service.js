angular
    .module('app')
    .service('AuthService', AuthService);

/** @ngInject */
function AuthService(AUTH_SERVER, $http, $state) {
    var resource = AUTH_SERVER + 'auth/signin';

    this.auth = auth;

    ////////////////
    
    function auth(credentials) {
        return $http.post(resource, credentials)
            .then(function (res) {
                console.log(res.data.user);
                $state.go('hello');
            });
    }
}