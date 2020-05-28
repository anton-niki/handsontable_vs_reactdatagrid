import React from "react";
import InnerHandsontable from './InnerHandsontable';
import 'handsontable/dist/handsontable.full.css';
import getData from './data.js';
import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";


import "ace-builds/webpack-resolver"; //necessary to avoid console errors


// //https://github.com/securingsincity/react-ace/issues/725
// import jsonWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-json";

// import cssWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-css";

import "ace-builds";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-twilight";
import Stopwatch from "./Stopwatch";
// import runTimer from "./runTimer";

// import Editor from 'react-simple-code-editor';
// import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';


// require('prismjs/components/prism-clike');
// require('prismjs/components/prism-markup');
// require('prismjs/components/prism-javascript');

function runTimer() {
    const startTime = new Date();

    document.getElementById('stopwatchPre').innerText = JSON.stringify('⏳').toString().padEnd(5, ' ') + 'ms'
    const getFirstCellValue = () => document.getElementsByTagName('td')[0].innerText;
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



class ParentHandsontable extends React.Component {

    state = {
        numRows: 10000,
        data: getData(5000),
        hotSettingsStr: `//<HotTable> settings object:
{
    // data:this.props.dataprops.rows,
    height:'454px',
    rowHeights:23,
    rowHeaders:true,
    colHeaders:true,
    licenseKey:"non-commercial-and-evaluation",
    id:"hot",
    colWidths:[30, 45, 60, 75],
    autoColumnSize:false,
    autoRowSize:false,
    viewportRowRenderingOffset:0,
    manualColumnResize:true,
    manualRowResize:true,
    // manualColumnMove:true,  //performance ruiner
    manualRowMove:true,
    // columnSorting:true, //performance ruiner
    contextMenu:true,
    dropdownMenu:true,
    width:'300px'
}`

    }

    componentDidMount = () => {
        window.stopwatchTime = 0
        document.getElementById('stopwatchPre').innerText = JSON.stringify(window.stopwatchTime).toString().padEnd(5, ' ') + 'ms'
    }

    updateData = () => {
        document.getElementById('stopwatchPre').innerText = '⏳'

        setTimeout(() => {
            runTimer();
            const rows = this.state.data.rows;
            const row0 = { ...rows[0] };
            row0.id = row0.id + 1;
            this.setState({ data: { ...this.state.data, rows: [row0, ...rows.splice(1)] } });
        }, 100);    //this is so the hourglass has time to render before the UI gets locked up
    }

    render() {
        console.log('Handsontable data:');
        console.log(this.state.data);
        return (
            <div>
                <p>
                    <span style={{ fontSize: '24px' }}>Handsontable </span><span style={{ color: 'gray' }}> rows as objects array in React state</span>
                </p>
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
                    <span>&nbsp; 10M will crash</span>
                </span>
                {/* <table style={{ width: '100%' }}><tbody><tr>
                    <td style={{ width: '1%' }}> */}
                {/* <div><Stopwatch ref={node => { this.stopwatch = node; }}></Stopwatch></div> */}

                <div><pre id="stopwatchPre" style={{ margin: 0, display: 'inline-block', backgroundColor: 'blue', color: 'white', fontWeight: 'bold', height: '20px', padding: '5px' }}>
                    {JSON.stringify(0).toString().padEnd(5, ' ')} ms
                </pre></div>


                <div id="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <InnerHandsontable
                            settings={eval('(' + this.state.hotSettingsStr + ')')}
                            dataprop={this.state.data}>
                        </InnerHandsontable>
                    </div>
                    {/* </td>
                    <td style={{ height: '320px' }}>    style={{ marginBottom: '10px' }}*/}
                    <div>
                        <div ><b >&lt;HotTable&gt; settings -- edit me!</b></div>
                        <div style={{ color: 'gray' }}>comment out lines before editing to prevent crashes. <br />shrink num rows per edit for faster updates</div>
                        <AceEditor
                            value={this.state.hotSettingsStr}
                            mode="javascript"
                            // theme="github"
                            theme="ambiance"
                            onChange={code => this.setState({ hotSettingsStr: code })}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{
                                useWorker: false // <<----- USE THIS OPTION TO DISABLE THE SYNTAX CHECKER
                            }}
                            height={'400px'}
                        />
                    </div>
                </div>
                {/* </td>
                </tr></tbody></table> */}
                <p>*
                    <a target="_blank" href="https://handsontable.com/docs/7.4.2/tutorial-performance-tips.html">optimized</a>
                    <span> with fixed <code>colWidths</code> and disabled <code>autoColumnSize</code> and <code>autoRowSize</code>.</span>
                </p>
                <p>
                    also, the docs dont mention this, but <code>manualColumnMove</code> and <code>columnSorting</code> are big performance ruiners so they're off here too
                </p>
            </div >
        );
    }
}
export default ParentHandsontable;
