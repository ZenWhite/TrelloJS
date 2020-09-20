import DOMListener from "./DOMListeners";
import $ from './DOM';

export default class Component extends DOMListener {
    constructor(options) {
        super(options.target, options.listeners);
        this.options = options;
    }
    init() {
        this.render();
        this.events();
    }
    events() {
        super.$root = $(this.options.target);
        this.initDOMListeners();
    }
    destroy() {

    }
}