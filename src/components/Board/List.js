
import IBE from './InteractiveBoardElement';

const listOptions = {
    childs: {},
    title: '',
    $lastItem: null,
    className: 'list'
};

export default class List extends IBE {
    constructor($parent) {
        super( Object.assign( listOptions, {$parent} ) )
    }
    initialTemplate() {
        return `
            <div class="board__list creating list">
                <div class="board__name title" contenteditable data-action="change-list-title">
                    
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
        `
    }
    template() {
        return `
            <div class="board__list list">
                <div class="board__name list-title" contenteditable data-action="change-list-title">
                    ${this.cfg.title}
                </div>
                <div class="board__panel panel" data-action="append-card"></div>
                <a href="" class="board__btn btn green" data-action="add-card">Добавить карточку</a>
            </div>
        `
    }
}