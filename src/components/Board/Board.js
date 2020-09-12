import Component from '@core/Component';
import {$ROOT} from '@/constants'; 
import $  from '@core/DOM';
import List from './List';

const boardOptions = {
    name: 'Board',
    target: '.board',
    listeners: ['click', 'keydown']
}

export default class Board extends Component {
    constructor() {
        super(boardOptions);
        this.creatingProcces = '';
        this.lists = {};
    }
    render() {
        $ROOT.insert( 'afterbegin', `
            <main class="board">
                <div class="big-wrap flex">
                    ${this.newListBtn()}
                </div>
            </main>
        `)
    }
    onClick(event) {
        const $target = $(event.target).closest('[data-action]');
        if(!$target.$el) return;

        if($target.data.action === 'add-list') {
            this.creatingProcces = 'LIST';
            event.preventDefault();
            List.startCreating($target);
        }
    }
    onKeydown(event) {
        if(event.key === 'Enter' && this.creatingProcces === 'LIST') {
            event.preventDefault();
            console.log('list is created');
        }
    }
    newListBtn() {
        return `
            <a href="" class="board__add-list flex" data-action="add-list">
                <svg class="icon">
                    <use xlink:href="img/sprite.svg#plus"></use>
                </svg>
                <span>Добавить список</span>
            </a>
        `;
    }
}