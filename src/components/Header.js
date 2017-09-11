import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  left: 0;
  height: ${props => props.theme.header.height};
  border-bottom: ${props => props.theme.header.border};
  background-color: ${props => props.theme.header.color};
  display: flex;
  position: fixed;
  top: 0;
`;

const Logo = styled.span`
  width: 100%;
  font-size: ${props => props.theme.header.size};
  text-align: ${props => props.theme.header.align};
  margin: ${props => props.theme.header.margin};
`;

const Header = props => (
  <Bar>
    <Logo>
      <span aria-label="dog" role="img">
        🐶
      </span>
    </Logo>
  </Bar>
);

export default Header;
