import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: ${props => props.theme.user.avatar.radius};
  overflow: hidden;
  height: ${props =>
    props.comment
      ? props.theme.comments.avatar.size
      : props.theme.user.avatar.size};
  width: ${props =>
    props.comment
      ? props.theme.comments.avatar.size
      : props.theme.user.avatar.size};
  margin-right: ${props => props.theme.user.avatar.marginRight};
  img {
    width: ${props =>
      props.comment
        ? props.theme.comments.avatar.size
        : props.theme.user.avatar.size};
  }
`;

const Avatar = props => (
  <Wrapper comment={props.comment}>
    <img alt={props.name} src={props.avatar} />
  </Wrapper>
);

export default Avatar;
