import React from 'react'


const TdStyle = {
   padding: "5px",
   border: "1px solid black",
   fontSize: "20px"
}
function TableRow(props) {
    return (
        <tr>
            <td style={TdStyle}>
                <img src={props.employee.picture.medium} alt={props.employee.name.first}/>
            </td>
            <td style={TdStyle}>{props.employee.name.first} {props.employee.name.last}</td>
            <td style={TdStyle}>{props.employee.location.country}</td>
            <td style={TdStyle}>{props.employee.registered.date.slice(0, 10)}</td>
            <td style={TdStyle}>{props.employee.phone}</td>
            <td style={TdStyle}>{props.employee.email}</td>
        </tr>
    )
}

export default TableRow;