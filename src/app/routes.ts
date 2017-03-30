import {Routes} from 'ng1-decor';

@Routes()
export class AppRoutes {
    constructor(private $stateProvider: ng.ui.IStateProvider) {
        this.$stateProvider
            .state('main.home', <ng.ui.IState> {
                url: '/',
                template: '<h1>Webpack 2 Tyepscript 2 AngularJS 1.6 JQuery 3 Bootstrap 3</h1>'
            })
            .state('main.about', <ng.ui.IState> {
                url: '/about',
                template: '<h1>It\'s a StarterKit by Cervantes</h1>'
            })
        ;
    }
}
