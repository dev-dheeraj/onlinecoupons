import React, { Component } from "react";
import { post, get } from "../api/serverRequest";
import history from "../_helpers/history";

export default class UploadCouponsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponTitle: "",
      couponCategory: "",
      couponImage: "",
      couponCode: "",
      couponValidity: "",
    };
  }

  handleFormChange = (event) => {
    if (event) {
      const { name, value } = event.target;
      console.log(value);
      this.setState({
        [name]: value,
      });
    }
  };
  handleCouponUpoadButton = async () => {
    const {
      couponCategory,
      couponCode,
      couponImage,
      couponTitle,
      couponValidity,
    } = this.state;
    if (
      couponCategory !== "" &&
      couponCode !== "" &&
      couponTitle !== "" &&
      couponValidity !== ""
    ) {
      let data = {
        category: couponCategory,
        code: couponCode,
        image: couponImage,
        title: couponTitle,
        validity: couponValidity,
      };
      let res = await post("/coupon/addCoupon", data);
      // let res = get("/coupon/getAllCategory");
      if (res && res.data && res.data.is_success) {
        console.log(res);
        history.push("/");
      }
    } else {
      alert("Please fill all details");
    }
  };
  render() {
    const {
      couponCategory,
      couponCode,
      couponImage,
      couponTitle,
      couponValidity,
    } = this.state;
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="c_title">
                Coupon Title
                <small className="fnt-sm">
                  {" "}
                  (e.g. 10% off, only for addidas)
                </small>
              </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="coupon_title"
                name="couponTitle"
                value={couponTitle}
                onChange={(e) => this.handleFormChange(e)}
                placeholder="Title..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="couponCode">Coupon code</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="coupon_code"
                name="couponCode"
                value={couponCode}
                onChange={(e) => this.handleFormChange(e)}
                placeholder="Coupon Code .."
              />
            </div>
          </div>
          {/* date */}

          <div className="row">
            <div className="col-25">
              <label htmlFor="couponCode">Valid till</label>
            </div>
            <div className="col-75">
              <input
                type="date"
                id="coupon_validity"
                name="couponValidity"
                value={couponValidity}
                onChange={(e) => this.handleFormChange(e)}
                placeholder="valid till"
              />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-25">
              <label htmlFor="couponImg">
                Coupon Image{" "}
                <small className="fnt-sm">(only jpg,png,jpeg types)</small>
              </label>
            </div>
            <div className="col-75">
              <input
                type="file"
                id="coupon_img"
                name="couponImage"
                value={couponImage}
                onChange={(e) => this.handleFormChange(e)}
                placeholder="Coupon Image .."
              />
            </div>
          </div> */}
          <div className="row">
            <div className="col-25">
              <label htmlFor="couponcategory">
                Coupon category{" "}
                <small className="fnt-sm">
                  {" "}
                  (e.g. amazon, udemy, flipkart..)
                </small>
              </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="coupon_cat"
                name="couponCategory"
                value={couponCategory}
                onChange={(e) => this.handleFormChange(e)}
                placeholder="Coupon category .."
              />
            </div>
          </div>
          <div className="row">
            <input
              type="button"
              value="upload coupon"
              onClick={this.handleCouponUpoadButton}
            />
          </div>
        </form>
      </div>
    );
  }
}
