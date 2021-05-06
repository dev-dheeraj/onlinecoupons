import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import UploadCouponsForm from "./couponsDetails/UploadCouponsForm";
import SelectedCouponList from "./couponsList/SelectedCouponList";
import Homepage from "./landingPage/Homepage";
import Navbar from "./_components/Navbar";
import history from "./_helpers/history";
// import { createBrowserHistory } from "history";

function App() {
  // const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route exact path="/onlinecoupons" component={Homepage} />
            <Route path="/uploadcoupon" component={UploadCouponsForm} />
            <Route path="/coupon/:category" component={SelectedCouponList} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
