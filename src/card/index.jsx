import React from "react";
import { Button, Card } from "@uitk/react";
import styled from "styled-components";
import { math } from "polished";

/**
 * Style h2 as h3 for screen reader
 */
const H3Styles = styled.span`
 ${({ theme: { color, font } }) => `
   h2 {
     font-family: ${font.family.heading.h3.value};
     font-size: ${font.size.heading.h3.value};
     font-weight: ${font.weight.heading.h3.value};
     color: ${color.text.heading.h3.value};
     line-height: ${math(font.size.heading.h3.value + "* 1.5")};
   }
 `}
`;

const ReportsCard= () => (
  <Card
    header={
      <H3Styles>
        <h2>Reports Content</h2>
      </H3Styles>
    }
  >
    <p>My Reports Content V0</p>
    <Button block className={"mt-l"}>
      Default
    </Button>
  </Card>
);

export default ReportsCard;