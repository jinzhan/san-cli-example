import {Component} from 'san';
import {formatSize} from './lib/utils';


export default class App extends Component {
    static template = /* html */ `
    <div class="details"
         style="margin-top:-{{topMargin}}"
         s-if="title || bigText || sizeText">
        <span class="details-name">{{title}}</span>
        <div class="details-percentage">{{bigText}}</div>
        <div class="details-size">{{sizeText}}</div>
    </div>
    `;

    attached() {
        this.watch('bundleDetails', () => {
            this.createData();
        });

        this.watch('details', () => {
            this.createData();
        });
    }

    createData() {
        const {
            title,
            bigText,
            sizeText
        } = this.getDetails();
        this.data.set('title', title);
        this.data.set('bigText', bigText);
        this.data.set('sizeText', sizeText);
    }

    getDetails() {
        let title;
        let bigText;
        let sizeText;
        const {bundleDetails, details} = this.data.get();

        if (details) {
            let rawSize = formatSize(details.size);
            if (bundleDetails.actual) {
                let actualSize = formatSize(bundleDetails.actual * details.percentage.replace('%', '') * .01, 0);
                sizeText = `${actualSize} actual | ${rawSize} raw`;
            }
            else {
                sizeText = `${rawSize} raw`;
            }
            title = details.name;
            bigText = details.percentage;
        }
        else if (bundleDetails && bundleDetails.assetName) {
            title = bundleDetails.assetName;
            if (bundleDetails.type === 'collection') {
                bigText = ' ';
                sizeText = '';
            }
            else {
                let rawSize = formatSize(bundleDetails.raw);
                let actualSize = formatSize(bundleDetails.actual);

                bigText = ' ';
                sizeText = `${actualSize} actual | ${rawSize} raw`;
            }
        }
        return {
            title,
            bigText,
            sizeText
        };
    }
};
