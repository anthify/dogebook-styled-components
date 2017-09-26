import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: ${props => props.theme.comments.border};
  padding: ${props => props.theme.comments.padding};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  color: ${props => props.theme.comments.user.color};
  font-size: ${props => props.theme.comments.user.size};
  font-weight: ${props => props.theme.comments.user.weight};
  margin: ${props => props.theme.comments.user.margin};
`;

const Message = styled.p`
  font-size: ${props => props.theme.comments.size};
  color: ${props => props.theme.comments.color};
`;

const Comment = ({ comment }) => (
  <Row>
    <Avatar
      comment={true}
      avatar={comment.avatar}
      name={comment.name}
    />
    <Col>
      <Name>{comment.name}</Name>
      <Message>{comment.text}</Message>
    </Col>
  </Row>
);

export default Comment;
