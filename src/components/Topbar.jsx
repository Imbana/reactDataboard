import React from "react";
import { Settings, Language, NotificationsNone } from "@material-ui/icons";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="container">
        <div className="left">
          <span>LamaAdmin</span>
        </div>
        <div className="right">
          <div className="notification">
            <NotificationsNone />
            <span>3</span>
          </div>
          <div className="language">
            <Language />
            <span>1</span>
          </div>
          <Settings className="config" />
          <div className="img">
            <img
              src="http://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cGVyc29ufHwwfHx8fDE2MjgzNTUyMTg&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
