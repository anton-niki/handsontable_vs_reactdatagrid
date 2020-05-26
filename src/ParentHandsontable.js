import React from "react";
import InnerHandsontable from './InnerHandsontable';
import 'handsontable/dist/handsontable.full.css';
import getData from './data.js';

class ParentHandsontable extends React.Component {

    state = { data: getData() }

    updateData = () => {
        const rows = this.state.data.rows;
        const row0 = { ...rows[0] };
        row0.id = row0.id + 1;
        this.setState({ data: { ...this.state.data, rows: [row0, ...rows.splice(1)] } });
    }

    render() {
        return (
            <div>
                <h2>Handsontable</h2>
                <div>num rows: {this.state.data.numRows} </div>
                <button style={{ height: '50px', width: '100px', margin: '10px', cursor: 'pointer' }} onClick={this.updateData}>
                    change first cell
                </button>
                <InnerHandsontable dataprop={this.state.data}></InnerHandsontable>
                <p>* <a target="_blank" href="https://handsontable.com/docs/7.4.2/tutorial-performance-tips.html">optimized</a> with fixed <code>colWidths</code> and disabled <code>autoColumnSize</code> and <code>autoRowSize</code></p>
            </div>
        );
    }
}
export default ParentHandsontable;
