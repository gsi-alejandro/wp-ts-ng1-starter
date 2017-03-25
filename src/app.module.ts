import * as angular from 'angular';

let appName = 'app';
angular.module(appName + '.components', []);
angular.module(appName + '.services', []);
angular.module(appName + '.pipes', []);
angular.module(appName,
    ['ui.router', 'ngSanitize',
        appName + '.components', appName + '.services', appName + '.pipes'])
.config(['$urlRouterProvider', '$locationProvider',
    ($urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) => {
    $urlRouterProvider.otherwise('/');
    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
}]);

angular.element(document).ready(() => {
    angular.bootstrap(document, [appName]);
});
