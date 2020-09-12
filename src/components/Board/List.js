import $ from '@core/DOM';

export default class List {
    constructor() {
        this.cards = {};
    }
    static startCreating($target) {
        $target.html(`
            <div class="board__list creating list">
                <div class="board__name list-title" contenteditable data-action="change-list-title">
                    
                </div>
                <div class="flex board__creating-block">
                    <a href="" class="board__btn btn blue" data-action="create-list">Создать список</a>
                    <a href="" data-action="cancel-card">
                        <svg class="icon">
                            <use xlink:href="img/sprite.svg#close"></use>
                        </svg>
                    </a>
                </div>
            </div>
        `, 'outerHTML');

        const $title = [...$(document).findAll('.list-title')].pop();
        $title.focus();
    }
    static cancelCreating() {
        
    }
}