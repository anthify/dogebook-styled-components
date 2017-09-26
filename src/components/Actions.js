import React from "react";
import styled from "styled-components";

const ActionsPanel = styled.div`
  width: 100%;
  border-top: ${props => props.theme.actions.border};
  margin: ${props => props.theme.actions.margin};
  padding: ${props => props.theme.actions.padding};
`;

const Action = styled.span`
  cursor: pointer;
  margin-right: 10px;
  font-size: ${props => props.theme.actions.size};
  color: ${props => props.active ? props.theme.actions.active : props.theme.actions.color};
  font-weight: ${props => props.theme.actions.weight};
`;

const Actions = ({ toggleComments, toggleLike, id, comments, likes, liked }) => (
  <ActionsPanel>
    <Action active={liked} onClick={() => toggleLike(id)}>
      {likes} Likes
    </Action>
    <Action onClick={() => toggleComments(id)}>
      {comments.length} Comments
    </Action>
  </ActionsPanel>
);

export default Actions;
