import Component from '@core/Component';
import {$ROOT} from '@/constants';
import $ from '@core/DOM';

const headerOptions = {
    name: 'Header',
    target: 'header',
    listeners: ['click', 'change']
}

export default class Header extends Component {
    constructor() {
       super(headerOptions);
    }
    render() {
        $ROOT.insert( 'afterbegin', `
            <header class="header board-header opacity">
                <div class="big-wrap flex">
                    <div class="header__title title" contenteditable data-action="change-title">План проекта</div>
                    <a href="/" class="header__logo">Trello <span class="bold">JS</span></a>
                    <div class="header__block">
                        <a href="" class="header__link" data-action="open-dashboard">
                            <svg class="icon">
                                <use xlink:href="img/sprite.svg#dashboard"></use>
                            </svg>
                        </a>
                        <a href="" class="header__link" data-action="open-menu">
                            <svg class="icon">
                                <use xlink:href="img/sprite.svg#slider"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </header>
        `);
    }
    onClick(event) {
        const $target = $(event.target).closest('[data-action]');

        if(!$target.$el) return;

        if($target.data.action === 'open-menu') {
            event.preventDefault();
            $('.menu').addClass('open');
        }

        if($target.data.action === 'open-dashboard') {
            event.preventDefault();
        }
    }

    onChange(event) {
        console.log('change');
    }
}