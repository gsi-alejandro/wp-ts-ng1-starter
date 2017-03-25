/**
 * Created by cervantes on 9/12/16.
 */
import {Routes} from 'ng1-decor';

@Routes()
export class MainRoutes {
    constructor(private $stateProvider: ng.ui.IStateProvider) {
        this.$stateProvider
            .state('main', <ng.ui.IState> {
                abstract: true,
                template: '<main-layout></main-layout>'
            })
        ;
    }
}
