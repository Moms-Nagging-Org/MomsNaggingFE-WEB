import React from "react";
import * as Styled from "./styled";

const Wrapper = ({ children }: any) => (
  <Styled.Positioner>
    <Styled.Contents>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Contents>
  </Styled.Positioner>
);

export default Wrapper;
