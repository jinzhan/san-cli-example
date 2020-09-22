import {Component} from 'san';

export default class App extends Component {
    static template = /* html */`
        <div class="breadcrumbs">
            <fragment s-for="node, index in nodes">
                <fragment s-if="index"> &gt; {{node.name}}</fragment>
            </fragment>
        </div>
    `;
};

