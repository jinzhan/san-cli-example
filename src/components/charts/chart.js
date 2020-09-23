import {Component} from 'san';
import createVisualization from './lib/createVisualization';

export default class App extends Component {
    static template = /* html */`
        <svg ref="svg" />
    `;

    attached() {
        this.watch('data', data => {
            this.createChart(data);
        });
    }

    createChart(root) {
        if (!root) {
            return;
        }

        const visInfo = createVisualization({
            svgElement: this.el,
            root,
            onHover: this.onHover.bind(this),
            onUnhover: this.onUnhover.bind(this)
        });

        this.fire('render', visInfo);
    }

    onHover(data) {
        this.fire('hover', data);
    }

    onUnhover() {
        this.fire('unhover');
    }
};
