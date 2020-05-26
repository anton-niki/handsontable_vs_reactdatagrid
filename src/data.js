const NUM_ROWS = 50000;

const getRows = (numRows) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push({
            id: i,
            c1: i + 1,
            c2: i * 10,
            c3: i * 100
        })
    }
    return rows;
}

const data = {
    columns_react_data_grid: [{}],
    columns_handsontable: [{}],
    columns: [
        { key: 'id', name: 'ID' },
        { key: 'c1', name: 'c1' },
        { key: 'c2', name: 'c2' },
        { key: 'c3', name: 'c3' }
    ],

    rows: getRows(NUM_ROWS)
    // rows: [
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    //     { id: 0, c1: 1, c2: 'val1', c3: 'val1' },
    // ]
};

const getData = () => {
    let numRows = 50000;
    let el = document.getElementById('numrowsinputid');
    if (el) {
        let inputValue = el.value;
        if (inputValue && inputValue.length > 0) {
            numRows = Number.parseInt(inputValue)


            if (Number.isNaN(numRows)) {
                numRows = 50000;
                alert(`input value ${inputValue} is not a number. using numRows = ${numRows}`);
            }
        }
    }
    return {
        columns: [
            { key: 'id', name: 'ID' },
            { key: 'c1', name: 'c1' },
            { key: 'c2', name: 'c2' },
            { key: 'c3', name: 'c3' }
        ],
        rows: getRows(numRows),
        numRows: numRows
    }
}

// export default getData;
export default getData;