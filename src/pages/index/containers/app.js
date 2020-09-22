/**
 * @file 容器组件
 * @author jinzhan
 */

import {Component} from 'san';
import './app.less';
import Charts from '../components/charts/index';
import buildHierarchy from '../components/charts/lib/buildHierarchy';
import {getBundleDetails} from '../components/charts/util/stat-utils';
import data from './data.json';

export default class App extends Component {

    static template = `
    <div class="main">
        <h1>\{\{title}}</h1>
        <h2>Hello world, I am OK~</h2>
        <c-charts chartData="{{chartData}}" bundleDetails="{{bundleDetails}}" />
    </div>
    `;

    static components = {
        'c-charts': Charts
    };

    initData() {
        return {
            title: 'San CLI'
        };
    }

    attached() {
        const chartData = buildHierarchy(data.modules);
        const bundleDetails = getBundleDetails({
            assets: data.assets,
            selectedAssetIndex: 0
        });
        console.log({chartData, bundleDetails, i: 1});
        this.data.set('chartData', chartData);
        this.data.set('bundleDetails', bundleDetails);
    }
}
