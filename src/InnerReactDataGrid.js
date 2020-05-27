import React from "react";
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

class InnerReactDataGrid extends React.Component {
    render() {
        return (
            <DataGrid
                columns={this.props.dataprop.columns}
                rows={this.props.dataprop.rows}
                height={454}
            />
        );
    }
}

export default InnerReactDataGrid;


