import Page from '@core/Page';
import Header from '@/components/Header/Header';
import Menu from '@/components/Menu/Menu';
import Board from '@/components/Board/Board';

const boardComponents = [new Board(), new Header(), new Menu()];

export default class BoardPage extends Page {
    constructor() {
        super(boardComponents);
    }
}