import React, { Component } from "react";

export const ContainerListItem = props => <div className="container-list-item">
<input type="checkbox" />
{props.containerNumber} {props.isSubmitted ? "submitted 08-Sep-2017" :null}
</div>;