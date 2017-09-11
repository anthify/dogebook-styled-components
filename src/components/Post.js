import React from "react";
import styled from "styled-components";

import Avatar from "./Avatar";
import Actions from "./Actions";
import Comment from "./Comment";

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.post.marginBottom};
`;

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.post.padding};
  background: ${props => props.theme.post.background};
  border: ${props => props.theme.post.border};
  border-bottom: ${props => {
    if (props.theme.twitter) {
      return props.theme.post.borderBottom;
    }
    return props.showComments ? "none" : props.theme.post.border;
  }};
  border-radius: ${props =>
    props.showComments
      ? `${props.theme.post.radius} ${props.theme.post.radius} 0px 0px`
      : props.theme.post.radius};
`;

const Image = styled.img`
  width: ${props => props.theme.image.width};
  border: ${props => props.theme.image.border};
  box-shadow: ${props => props.theme.image.shadow};
  margin-top: ${props => props.theme.image.marginTop};
  border-radius: ${props => props.theme.image.radius};
  margin-left: ${props => props.theme.image.marginLeft};
`;

const PostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const UserName = styled.h1`
  font-size: ${props => props.theme.user.size};
  font-weight: ${props => props.theme.user.weight};
  color: ${props => props.theme.user.color};
  margin: ${props => props.theme.user.margin};
`;

const Message = styled.p`
  font-size: ${props => props.theme.copy.size};
  margin: ${props => props.theme.copy.margin};
  color: ${props => props.theme.copy.color};
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostMeta = styled.div`
  display: flex;
  flex-direction: ${props => (props.theme.twitter ? "row" : "column")};
`;

const TimeStamp = styled.span`
  color: ${props => props.theme.timestamp.color};
  font-size: ${props => props.theme.timestamp.size};
  margin: ${props => props.theme.timestamp.margin};
`;

const Comments = styled.div`
  background: ${props => props.theme.comments.background};
  border-radius: ${props => props.theme.comments.radius};
  border: ${props => (props.twitter ? "none" : props.theme.post.border)};
`;

const Post = props => (
  <Wrapper>
    <PostContainer showComments={props.showComments}>
      <PostContent>
        <Avatar {...props} />
        <PostDetails>
          <PostMeta>
            <UserName>{props.name}</UserName>
            <TimeStamp>{props.timestamp}</TimeStamp>
          </PostMeta>
          <Message>{props.message}</Message>
        </PostDetails>
      </PostContent>
      <Image src={props.img} />
      <Actions {...props} />
    </PostContainer>
    {props.showComments ? (
      <Comments>
        {props.comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </Comments>
    ) : null}
  </Wrapper>
);

export default Post;
