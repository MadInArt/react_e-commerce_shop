import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user-action";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartItem from "../cart-icon/cart-icon";
import CartDropdown from "../cart_dropdown/cart_dropdown";

import "./navbar.scss";

const Navbar = ({ currentUser, hidden, signOutStart }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="links">
      <Link to="/shop">SHOP</Link>
      <Link to="/contact">CONTACT</Link>
      {currentUser ? (
        <div className="links" onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className="links" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartItem />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);