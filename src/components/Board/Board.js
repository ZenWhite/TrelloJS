import Component from '@core/Component';
import {$ROOT} from '@/constants'; 
import $  from '@core/DOM';
import List from './List';
import Card from './Card';

const boardOptions = {
    name: 'Board',
    target: '.board',
    listeners: ['click', 'keydown', 'input']
}

export default class Board extends Component {
    constructor() {
        super(boardOptions);
        this.creatingProcces = null;
        this.$wrap = null;
        this.hiddenItem = null;
        this.lists = [];
    }
    render() {
        $ROOT.insert( 'afterbegin', `
            <main class="board" id="list-${Date.now()}">
                <div class="big-wrap flex">
                    <div class="board__container flex list-container">

                    </div>
                    <a href="" class="board__add-list flex" data-action="add-list">
                        <svg class="icon">
                            <use xlink:href="img/sprite.svg#plus"></use>
                        </svg>
                        <span>Добавить список</span>
                    </a>
                </div>
            </main>
        `);
        this.$wrap = $(`${boardOptions.target} .list-container`);
    }
    onClick(event) {
        const $target = $(event.target);
        const $actionTarget = $target.closest('[data-action]');
        const action = $actionTarget.$el ? $actionTarget.data.action : '';

        if(action === 'add-list' || action === 'add-card') {
            event.preventDefault();
            this.addElement($actionTarget, action);
        }

        if(action === 'create-list') {
            event.preventDefault();
            this.createElement();
        } 

        if( 
            ($target.hasClass('board') && this.creatingProcces) || action === 'cancel-card'
        ) {
            event.preventDefault();
            this.creatingProcces.cancel();
            this.creatingProcces = null;
            this.hiddenItem.show();
        }
    }
    onKeydown(event) {
        if(event.key === 'Enter' && this.creatingProcces) {
            this.hiddenItem.show();
            this.createElement();
        }
    }
    onInput(event) {
        const $target = $(event.target);
        if(this.creatingProcces) {
            this.creatingProcces.updateTitle( $target.text() );
        }
    }
    createElement() {
        this.hiddenItem.show();
        this.lists.push(this.creatingProcces);
        this.creatingProcces.create();
        this.creatingProcces = null;
    }
    addElement($target, action) {
        $target.hide();
        this.hiddenItem = $target;

        if(action === 'add-list') {
            this.creatingProcces = new List(this.$wrap);
        } else if(action === 'add-card') {
            this.creatingProcces = new Card(this.$wrap);
        }
    }
}