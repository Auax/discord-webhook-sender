import React from "react"
import styled from "styled-components"
import {colors} from "./Styled.jsx";

const MetricCardStyled = styled.div`
  text-align: ${({textAlign}) => textAlign || "center"};
  background: ${colors.base200};
  padding: 15px;
  border-radius: 5px;
  //border: 1px solid #1a1a1a;
`;

const MetricTextBase = styled.span`
  font-size: 2.4em;
  font-weight: 900;
`

const MetricText = (props) => {

    let colorPalette = {
        info: "text-neutral-50",
        success: "text-emerald-500",
        failed: "text-rose-500"
    }

    return (
        <MetricTextBase className={colorPalette[props.textType] || colorPalette.info}>{props.children}</MetricTextBase>
    )
}

const MetricCard = (props) => {
    return (
        <MetricCardStyled textAlign={props.textAlign} className={props.className}>
            <p className="text-neutral-400">{props.title}</p>
            {/*<p className="text-sm text-neutral-600">{props.description}</p>*/}
            <MetricText textType={props.textType}>{props.number}</MetricText>
        </MetricCardStyled>
    )
}

MetricCard.defaultProps = {
    title: "Title",
    description: "Description",
    textAlign: "center",
}

export default MetricCard