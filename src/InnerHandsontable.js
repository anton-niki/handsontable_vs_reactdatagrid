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
            />
        );
    }
}

export default InnerHandsontable;
