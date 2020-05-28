import React from "react";
import { HotTable } from '@handsontable/react';

class InnerHandsontable extends React.Component {
    render() {
        console.log('render InnerHandsontable');
        // const this_props_dataprops_rows = this.props.dataprop.rows;
        
        return (
            <HotTable
                data={this.props.dataprop.rows}
                settings={this.props.settings}
            // height={400}
            // rowHeights={23}
            // rowHeaders={true}
            // colHeaders={true}
            // licenseKey={"non-commercial-and-evaluation"}
            // id={"hot"}
            // colWidths= {[30, 45, 60, 75]}
            // autoColumnSize={false}
            // autoRowSize={false}
            // viewportRowRenderingOffset={0}
            // manualColumnResize={true}
            // manualRowResize={true}
            // //one of these...
            // // manualColumnMove={true}  //serious performance hit
            // manualRowMove={true}

            // // columnSorting={true} //serious performance hit
            // contextMenu={true}
            // dropdownMenu={true}
            // width={'300px'}
            />
        );
    }
}

export default InnerHandsontable;
