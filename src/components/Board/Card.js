import IBE from './InteractiveBoardElement';

const cardOptions = {
    childs: {},
    title: '',
    $lastItem: null,
    className: 'card'
}

export default class Card extends IBE {
    constructor($parent) {
        super( Object.assign( cardOptions, {$parent} ) );
    }
    initialTemplate() {
        return `
            <div class="board__card card creating flex">
                <span contenteditable class="title" data-action="change-list-text"></span>
                <div class="board__icons">
                    <a href="" class="board__icon" data-action="set-active">
                        <svg class="icon">
                            <use xlink:href="img/sprite.svg#success"></use>
                        </svg>
                    </a>
                    <a href="" class="board__icon" data-action="delete-card">
                        <svg class="icon">
                            <use xlink:href="img/sprite.svg#delete"></use>
                        </svg>
                    </a>
                </div>
            </div>
        `
    }
    template() {
        return `
            <div class="board__card flex">
                <span contenteditable data-action="change-list-text">Content</span>
                <div class="board__icons">
                    <a href="" class="board__icon" data-action="set-active">
                        <svg class="icon">
                            <use xlink:href="img/sprite.svg#success"></use>
                        </svg>
                    </a>
                    <a href="" class="board__icon" data-action="delete-card">
                        <svg class="icon">
                            <use xlink:href="img/sprite.svg#delete"></use>
                        </svg>
                    </a>
                </div>
            </div>
        `
    }
}