import React, { Component } from "react";
import Moment from "moment";
import { post } from "../api/serverRequest";

export default class SelectedCouponList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponsList: [],
    };
  }

  componentDidMount = async () => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let curentCategory = url.pathname
      ? url.pathname.substring(url.pathname.lastIndexOf("/") + 1)
      : "";

    let res = await post("/coupon/getCouponsList", {
      category: curentCategory,
    });
    console.log(res);
    if (res.data && res.data.content && res.data.content.length) {
      this.setState({
        couponsList: res.data.content,
      });
    }
  };
  renderCouponsList = () => {
    const { couponsList } = this.state;
    return couponsList.map((itm, ind) => {
      let validityDate = itm.validity
        ? Moment(itm.validity).format("DD-MM-YYYY")
        : null;
      return (
        // <div className="col-md-6 col-sm-4 col-xs-12">
        <div className="col-lg-4 mb-6 sm-2">
          <div className="card">
            <img
              className="card-img-top"
              src="../assets/images/promoCode.png" // coupon image
              alt=""
            />

            <div className="card-body">
              <h5 className="card-text">{itm.title} </h5>
              <p className="card-title">{itm.category}</p>
              <h5 className="card-text">
                {" "}
                {validityDate ? `valid till: ${validityDate}` : ""}
              </h5>
              <p>code: {itm.code}</p>
              {/* <a href="#" className="btn btn-outline-primary btn-sm">
                Get Offer
              </a> */}
              <a href="#" className="btn btn-outline-secondary btn-sm">
                <i className="far fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <section className="col-lg-10 col-md-10 col-sm-9">
            {this.renderCouponsList()}
          </section>

          <aside className="col-lg-2 col-md-2 col-sm-3">
            <div className="row">
              {[1, 2, 3].map((itm) => {
                return (
                  <div className="col-lg-12 ">
                    <h3>---</h3>
                    <img
                      className="couponCat"
                      src="../assets/images/Discount-Coupons.png"
                      alt="react "
                    />
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
