import {$ROOT} from '@/constants';

export default class Page {
    constructor(components) {
        this.components = components;
    }
    render() {
        if(this.components === null) {
            $ROOT.html( this.template(), 'innerHTML' );
            return;
        }
        this.components.forEach( component => {
            component.init();
        } );

    }
    destroy() {
        this.components.forEach( component => {
            component.destroy();
        } )
    }
}