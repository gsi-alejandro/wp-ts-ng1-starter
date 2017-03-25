import {Routes} from 'ng1-decor';

@Routes()
export class AppRoutes {
    constructor(private $stateProvider: ng.ui.IStateProvider) {
        this.$stateProvider
            .state('main.home', <ng.ui.IState> {
                url: '/',
                template: '<h1>AngularJS 1.6.1 TS 2 JQuery 3 Bootstrap 3</h1>'
            })
            .state('main.about', <ng.ui.IState> {
                url: '/about',
                template: '<h1>It\'s a StarterKit by Cervantes007</h1>'
            })
        ;
    }
}
