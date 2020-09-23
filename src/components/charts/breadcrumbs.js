import {Component} from 'san';

export default class App extends Component {
    static template = /* html */`
        <div class="breadcrumbs">
            <fragment s-for="node, index in nodes">
                {{node.name}}
                <span s-if="{{node.name && (index + 1 !== nodes.length)}}">&gt;</span>
            </fragment>
        </div>
    `;
};

