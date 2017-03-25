import {Component} from 'ng1-decor';
import './small-loading.component.scss';

@Component({
    selector: 'small-loading',
    template: require('./small-loading.component.html'),
    bindings: {
        text: '@'
    }
})
export class SmallLoading {}
