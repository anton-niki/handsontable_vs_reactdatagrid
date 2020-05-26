import React from "react";
import { HotTable } from '@handsontable/react';

class InnerHandsontable extends React.Component {
    render() {
        return (
            <HotTable
                data={this.props.dataprop.rows}
                height={320}
                rowHeights={23}
                rowHeaders={true}
                colHeaders={true}
                licenseKey={"non-commercial-and-evaluation"}
                id={"hot"}
                colWidths= {[30, 45, 60, 75]}
                autoColumnSize={false}
                autoRowSize={false}
                viewportRowRenderingOffset={0}
            />
        );
    }
}

export default InnerHandsontable;
