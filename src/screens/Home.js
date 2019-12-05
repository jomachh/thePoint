import React, { Component } from "react";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <Header customer={this.props.customer} />
        <Body />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customer: state.customer
  };
};

export default connect(mapStateToProps)(Home);
