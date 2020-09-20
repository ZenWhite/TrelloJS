import $ from '@core/DOM';

export default class IBE {
    constructor(cfg) {
        this.cfg = cfg;
        this.ready();
    }
    ready() {
        this.cfg.$parent.insert( 'beforeend', this.initialTemplate() );

        const $el = this.cfg.$parent.lastElement(`.${this.cfg.className}`);
        this.setLastElement($el);

        const $title = this.cfg.$lastItem.find('.title');
        $title.focus();
    }
    create() {
        this.cfg.$lastItem.html( this.template(), 'outerHTML' );
    }
    cancel() {
        $(this.cfg.$lastItem).remove();
    }
    setLastElement($el) {
        this.cfg.$lastItem = $($el);
    }
    updateTitle(value) {
        this.cfg.title = value;
    }
}