angular
    .module('app')
    .service('SessionService', SessionService);

function SessionService() {
    this.user;

    this.init = init;
    this.onCreate = onCreate;
    this.onDestroy = onDestroy;

    ////////////////

    function init() {
        var storedCredentials = fetch();
        this.user = storedCredentials.user;
    }

    function onCreate(user, token) {
        var userJson = JSON.stringify(user);
        store(userJson);
    }

    function onDestroy() {
        clean();
    }

    function store(user) {
        localStorage.setItem('auth-user', user);
    }

    function fetch() {
        var storedData = {};
        storedData.user = JSON.parse(localStorage.getItem('auth-user')) || null;
        return storedData;
    }

    function clean() {
        localStorage.clear();
    }
}
