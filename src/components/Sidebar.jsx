import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css"
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";


const Sidebar = () => {
// const menu = [
//   {
//     title: "Dashboard",
//     icon1: "AppsIcon",
//     icon2: `<AppsIcon className=\"icon\" />`,
//     icon3: "<AppsIcon className='icon'>",
//     text1: "Home",
//     text2: "Analytics",
//     text3: "Sales",
//   },
// ];


    return (
      <div className="sidebar">
        <div className="container">
          <ul className="items">
            <span>Dashboard</span>
            <div className="item">
              <Link to="/">
                <li href="" className="itemHome active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <Link to="/users">
                <li href="" className="itemHome">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li>
              </Link>

              <Link to="/user/5">
                <li href="" className="itemHome">
                  <TrendingUp className="sidebarIcon" />
                  Sales
                </li>
              </Link>
            </div>
          </ul>

          <ul className="items">
            <span>Dashboard</span>
            <div className="item">
              <Link to="/users">
                <li href="" className="itemHome">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </li>
              </Link>

              <li href="" className="itemHome">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
              <li href="" className="itemHome">
                <Storefront className="sidebarIcon" />
                Products
              </li>
              <li href="" className="itemHome">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </div>
          </ul>
          <ul className="items">
            <span>Dashboard</span>
            <div className="item">
              <li href="" className="itemHome">
                <MailOutline className="sidebarIcon" />
                Mail
              </li>
              <li href="" className="itemHome">
                <DynamicFeed className="sidebarIcon" />
                feedback
              </li>
              <li href="" className="itemHome">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </div>
          </ul>
          <ul className="items">
            <span>Dashboard</span>
            <div className="item">
              <li href="" className="itemHome">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li href="" className="itemHome">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li href="" className="itemHome">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
}

export default Sidebar
