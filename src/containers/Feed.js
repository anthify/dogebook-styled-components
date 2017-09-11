import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import styled from "styled-components";
import Post from "../components/Post";
import Header from "../components/Header";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: ${props => props.theme.container.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.background};
`;

class Feed extends Component {
  renderPosts() {
    const { posts } = this.props;
    const { toggleComments, toggleLike } = this.props;
    return Object.keys(posts).map((post, i) => (
      <Post
        key={i}
        {...posts[post]}
        toggleComments={toggleComments}
        toggleLike={toggleLike}
      />
    ));
  }

  render() {
    return (
      <Container>
        <Header />
        {this.renderPosts()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  posts: state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}, actions), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
