import React from "react";
import styled from "styled-components";

const ActionsPanel = styled.div`
  width: 100%;
  border-top: ${props => props.theme.actions.border};
  margin: ${props => props.theme.actions.margin};
  padding: ${props => props.theme.actions.padding};
`;

const Action = styled.span`
  font-size: ${props => props.theme.actions.size};
  color: ${props => props.theme.actions.color};
  font-weight: ${props => props.theme.actions.weight};
`;

const Actions = props => (
  <ActionsPanel>
    <Action
      onClick={() => props.toggleComments(props.id)}
      >{props.comments.length} Comments</Action>
  </ActionsPanel>
);

export default Actions;
