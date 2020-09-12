import Page from '@core/Page';

export default class DashboardPage extends Page {
    constructor(options) {
        super(options);
    }
    template() {
        return `
        <header class="header">
        <div class="wrap flex center">
            <a href="/" class="header__logo">Trello <span class="bold">JS</span></a>
        </div>
    </header>
    <main class="dashboard">
        <div class="wrap flex">
            <a href="#" class="dashboard__item dashboard__item--blue flex center" data-action="create-board">
                <div class="dashboard__icon flex center">
                    <svg class="icon">
                        <use xlink:href="img/sprite.svg#plus"></use>
                    </svg>
                </div>
            </a>
            <a href="" class="dashboard__item flex" data-action="open-doard">
                <div class="dashboard__mask"></div>
                <div class="dashboard__content flex">
                    <h3>План проекта</h3>
                    <p>30.08.2020</p>
                </div>
            </a>
        </div>
    </main>
        `
    }
}