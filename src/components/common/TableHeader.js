import React from "react";

const TableHeader = (props) => {
  return(
    <thead>
      <tr>
        { props.headers.map((header, index) => {
            return <th key={index}>{header}</th>
          })
        }
      </tr>
    </thead>
  )
}

TableHeader.defaultProps = {
  headers: []
}

export default TableHeader;