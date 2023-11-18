import './Table.css';
import React from 'react';

function Table() {
    const rows = 3;
    const columns = 4;

    const tableRows = [];

    for (let i = 0; i < rows; i++) {
        const cells = [];

        for (let j = 0; j < columns; j++) {
            cells.push(<td key={`cell-${i}-${j}`}>Row {i + 1}, Column {j + 1}</td>);
        }

        tableRows.push(<tr key={`row-${i}`}>{cells}</tr>);
    }

    return (
        <table>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}

export default Table;