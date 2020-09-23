/**
 * @file 容器组件
 * @author jinzhan
 */

import {Component} from 'san';
import Charts from '../components/charts/index';
import buildHierarchy from '../components/charts/lib/buildHierarchy';
import {getAssetsData, getBundleDetails, ERROR_CHUNK_MODULES} from '../components/charts/util/stat-utils';
import data from './data.json';

export default class App extends Component {

    static template = `
    <div class="main">
        <h1>{{title}}</h1>
        <c-charts 
            chartData="{{chartData}}" 
            bundleDetails="{{bundleDetails}}"
            assetsData="{{assetsData}}"
        />
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
        this.init(data);
    }

    init({assets, chunks, modules}) {
        const chartData = buildHierarchy(data.modules);

        const assetsData = getAssetsData(assets, chunks);

        const bundleDetails = getBundleDetails({
            assets: assetsData,
            selectedAssetIndex: 0
        });

        this.data.set('chartData', chartData);
        this.data.set('bundleDetails', bundleDetails);
        this.data.set('assetsData', assetsData);
        console.log({chartData, bundleDetails, assetsData, i: 1});
        
    }
}
