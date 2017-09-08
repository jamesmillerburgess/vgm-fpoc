import React, { Component } from "react";

export const ContainerListItem = props => <div className="container-list-item">
<input type="checkbox" />
{props.containerNumber}
</div>;