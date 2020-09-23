/**
 * @file 容器组件
 * @author jinzhan
 */

import {Component} from 'san';
import Charts from '../components/charts/index';

// import data from './data.json';
import data from '../../test/stats-multiple.json';

export default class App extends Component {

    static template = `
    <div class="main">
        <h1>{{title}}</h1>
        <c-charts data="{{data}}" />
    </div>
    `;

    static components = {
        'c-charts': Charts
    };

    initData() {
        return {
            title: 'San CLI',
            data
        };
    }
}
