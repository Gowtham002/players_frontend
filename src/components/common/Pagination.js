import React from "react";
import { Pager } from "react-bootstrap";

const Pagination = (props) => {
  let { currentPage, totalPages, onClick } = props;
  if(totalPages > 1) {
    return(
      <Pager bsClass="pager pull-right">
        <Pager.Item onClick={() => onClick(currentPage-1)} disabled={currentPage < 2}>Previous</Pager.Item>
        <Pager.Item onClick={() => onClick(currentPage+1)} disabled={currentPage === totalPages}>Next</Pager.Item>
      </Pager>
    )
  } else return null;
}


export default Pagination;