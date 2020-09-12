import Component from '@core/Component';
import {$ROOT} from '@/constants';
import $ from '@core/DOM';

const menuOptions = {
    name: 'Menu',
    target: '.menu',
    listeners: ['click']
}

export default class Menu extends Component {
    constructor() {
        super(menuOptions);
    }
    render() {
        $ROOT.insert( 'afterbegin', `
            <div class="menu">
                <div class="menu__content">
                    <div class="menu__title" data-action="change-title" contenteditable="">План проекта</div>
                    <textarea class="menu__description" name="" id="" cols="30" rows="10" data-action="change-description"></textarea>
                    <div class="flex menu__block">
                        <div class="menu__url" contenteditable="">my-image.jpg</div>
                        <a href="" class="btn green">Сохранить</a>
                    </div>
                    <a href="" class="btn red menu__delete">Удалить доску</a>
                </div>
            </div>
        `);
    }
    onClick(event) {
        const $target = $(event.target);
        if( $target.hasClass('menu') ) {
            $target.removeClass('open');
        }
    }
}