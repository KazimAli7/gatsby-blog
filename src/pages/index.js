import React from "react";
import { Router } from '@reach/router'
import Layout from "../components/layout";
import Posts from '../templates/index'
import App from "./App";

class BlogIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <Router>
          <Posts path="/posts" />
          <App path="/"/>
        </Router>
      </Layout>
    )
  }
};

export default BlogIndex;
