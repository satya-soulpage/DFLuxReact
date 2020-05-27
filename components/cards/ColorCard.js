import React from "react";
// styles
import { StyledCard } from "styles/cards";
import {DtasrcTittle,DatasrcDate, DatasrcData}  from "styles/datasource/home";

function DatasrcCreateCard(props) {
return <StyledCard height="76px"><img src={props.img}></img>{props.data}</StyledCard>;
}

function DatasrcCard(props) {
  return <StyledCard>
    <DtasrcTittle>{props.tittle}</DtasrcTittle>
    <DatasrcData>{props.data}</DatasrcData>
    <DatasrcDate>{props.date}</DatasrcDate>
    </StyledCard>;
}

export  {DatasrcCard,DatasrcCreateCard};
