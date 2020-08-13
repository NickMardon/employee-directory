import React from 'react'

const style ={
    fontSize: "24px",
    fontWeight: "bolder"
}

function SortRow({ handleSort }) {
    return (
        <tr style={style}>
            <td>Picture</td>
            <td><a href="#" onClick={()=>  handleSort("fullName") }>Name</a></td>
            <td>Country</td>
            <td>Hire Date</td>
            <td>Home Phone</td>
            <td><a href="#" onClick={()=>  handleSort("email") }>Email</a></td>
            {/* <td>email</td> */}
        </tr>
        
    )
}

export default SortRow;