import React from 'react';
import TableRow from "./TableRow";
import SortRow from "./SortRow";

const style = {
    borderSpacing: "1px",
    width: "95%",
    margin: "auto"
}

function Table({ employees, handleSort }) {
    return (
        <table style={style}>
        <tbody>
            <SortRow handleSort={handleSort}/>
            {employees.map(employee => <TableRow key={employee.login.uuid} employee={employee} />)}

        </tbody>
        </table>
    )
}

export default Table