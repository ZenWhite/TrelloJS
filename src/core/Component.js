import DOMListener from "./DOMListeners";
import $ from './DOM';

export default class Component extends DOMListener {
    constructor(options) {
        super(options.target, options.listeners);
        this.options = options;
    }
    getRoot() {
        
    }
    async init() {
        await this.render();
        await this.events();
    }
    events() {
        super.$root = $(this.options.target);
        this.initDOMListeners();
    }
    destroy() {

    }
}