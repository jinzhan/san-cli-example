import {Component} from 'san';
import createVisualization from './lib/createVisualization';

export default class App extends Component {
    static template = /* html */`
        <svg ref="svg" />
    `;

    updated() {
        this.createChart(this.data.get('data'));
    }

    createChart(root) {
        if (!root) {
            return;
        }
        this.details = createVisualization({
            svgElement: this.el,
            root,
            onHover: this.onHover.bind(this),
            onUnhover: this.onUnhover.bind(this)
        });

        this.fire('render', this.details);
    }

    onHover() {
        this.fire('hover', this.details);
    }

    onUnhover() {
        this.fire('unhover');
    }
};
