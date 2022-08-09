import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../features/userSlice";
import { auth } from "../../firebase";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://genk.mediacdn.vn/139269124445442048/2020/10/7/photo-1-16020377606131031763600.jpg"
          alt=""
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}
