import React from "react";
import 'handsontable/dist/handsontable.full.css';
import getData from './data.js';
import InnerReactDataGrid from "./InnerReactDataGrid";
import Stopwatch from "./Stopwatch.js";
// import runTimer from "./runTimer.js";

function runTimer() {
    const startTime = new Date();

    document.getElementById('stopwatchPre').innerText = JSON.stringify('⏳').toString().padEnd(5, ' ') + 'ms'
    const getFirstCellValue = () => document.getElementsByClassName('rdg-cell')[4].innerText;
    const firstCellInitValue = getFirstCellValue();
    const el = document.getElementById('stopwatchPre');
    const interval = setInterval(() => {
        console.log('here');
        el.innerText = JSON.stringify(new Date() - startTime).toString().padEnd(5, ' ') + 'ms'
        if (firstCellInitValue !== getFirstCellValue()) {
            clearInterval(interval);
        }
    });
}


class ParentReactDataGrid extends React.Component {

    state = {
        numRows: 10000,
        data: getData(5000)
    }

    updateData = () => {
        document.getElementById('stopwatchPre').innerText = '⏳'

        setTimeout(() => {
            runTimer();
            const rows = this.state.data.rows;
            const row0 = { ...rows[0] };
            row0.id = row0.id + 1;
            this.setState({ data: { ...this.state.data, rows: [row0, ...rows.splice(1)] } });
        }, 5);
    }

    render() {
        console.log('ReactDataGrid data:');
        console.log(this.state.data);
        return (
            <div>
                <p>
                    <span style={{ fontSize: '24px' }}>Adazzle's react-data-grid </span><span style={{ color: 'gray' }}> rows as objects array in React state</span>
                </p>
                {/* <div>num rows: {this.state.data.numRows} </div>
                <button style={{ height: '50px', width: '100px', margin: '10px', cursor: 'pointer' }} onClick={this.updateData}>
                    <span>change first cell</span>
                </button>
                <span>num rows: {this.state.data.numRows} </span> */}
                <span >
                    👉<button style={{ height: '50px', width: '100px', margin: '10px', cursor: 'pointer' }} onClick={this.updateData}>
                        change first cell
                </button>👈
                </span>
                <span style={{ fontSize: '16px' }}>
                    num rows: &nbsp;
                    <input type="text" value={this.state.numRows} style={{ fontSize: '16px', width: '100px' }}
                        onChange={(e) => {
                            console.log(e);
                            console.log(e.target);
                            console.log(e.target.value);
                            this.setState({ numRows: e.target.value, data: getData(e.target.value) });
                        }}>
                    </input>
                    <span style={{ cursor: 'pointer' }}>
                        <button style={{ fontSize: '16px', cursor: 'pointer' }} onClick={() => this.setState({ numRows: 10, data: getData(10) })}>10</button>
                        <button style={{ fontSize: '16px', cursor: 'pointer' }} onClick={() => this.setState({ numRows: 100, data: getData(100) })}>100</button>
                        <button style={{ fontSize: '16px', cursor: 'pointer' }} onClick={() => this.setState({ numRows: 1000, data: getData(1000) })}>1K</button>
                        <button style={{ fontSize: '16px', cursor: 'pointer' }} onClick={() => this.setState({ numRows: 10000, data: getData(10000) })}>10K</button>
                        <button style={{ fontSize: '16px', cursor: 'pointer' }} onClick={() => this.setState({ numRows: 100000, data: getData(100000) })}>100K</button>
                        <button style={{ fontSize: '16px', cursor: 'pointer' }} onClick={() => this.setState({ numRows: 1000000, data: getData(1000000) })}>1M</button>
                        <button style={{ fontSize: '16px', cursor: 'pointer' }} onClick={() => this.setState({ numRows: 10000000, data: getData(10000000) })}>10M</button>
                    </span>
                    <span> &nbsp; 10M only seems to load 960,000 rows?</span>
                </span>
                {/* <div><Stopwatch ref={node => { this.stopwatch = node; }}></Stopwatch></div> */}

                <div><pre id="stopwatchPre" style={{ margin: 0, display: 'inline-block', backgroundColor: 'blue', color: 'white', fontWeight: 'bold', height: '20px', padding: '5px' }}>
                    {JSON.stringify(0).toString().padEnd(5, ' ')} ms
                </pre></div>


                <InnerReactDataGrid dataprop={this.state.data}></InnerReactDataGrid>
            </div>
        );
    }
}
export default ParentReactDataGrid;
