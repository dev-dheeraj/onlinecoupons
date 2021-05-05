import React, { Component } from "react";
import { get } from "../../api/serverRequest";
import history from "../../_helpers/history";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponCategory: [],
    };
  }

  componentDidMount = async () => {
    let res = await get("/coupon/getAllCategory");
    console.log(res);
    if (res.data && res.data.content && res.data.content.length) {
      this.setState({
        couponCategory: res.data.content,
      });
    }
  };
  handleCategoryClick = (itm) => {
    let couponCat = itm ? itm : "category";
    history.push(`/coupon/${couponCat}`);
    console.log("-itm", itm);
  };
  renderCouponCategory = () => {
    const { couponCategory } = this.state;
    return (
      couponCategory &&
      couponCategory.map((itm) => {
        return (
          <div className="col-md-2 col-sm-4 col-xs-6">
            <h3>{itm.category}</h3>
            <img
              className="couponCat"
              src="../assets/images/discountCouponsCat.png"
              alt="react "
              onClick={() => {
                this.handleCategoryClick(itm.category);
              }}
            />
          </div>
        );
      })
    );
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderCouponCategory()}</div>
      </div>
    );
  }
}
