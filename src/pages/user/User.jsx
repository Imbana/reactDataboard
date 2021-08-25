import "./user.css"
// import React,{useEffect,useState} from "react"
// import {useParams} from 'react-router-dom'
// import {userRows} from "./../../dummyData"
const User = () => {




    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
          <div className="userLeft">
            <div className="userTitleLeft">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0V3U_v_HSDcLeiBP9aHyo5iRA6ctu2pWTeg&usqp=CAU"
                alt=""
              />
              <div className="userNameLeft">
                <span>Anna Becker</span>
                <span>Software Engineer</span>
              </div>
            </div>
            <div className="userAccountLeft">
              <span className="accountTitle">Account Details</span>
              <div className="accountInfo">
                <span>Annabeck99</span>
                <span>10.12.1999</span>
              </div>
            </div>
            <div className="userAccountLeft">
              <span className="accountTitle">Contact Details</span>
              <div className="accountInfo">
                <span>+ 1 314 40 12 455</span>
                <span>jeison@gmail.com</span>
                <span>New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userEdit">
            <div className="userEditText">
              <h2 className="EditTitle">Edit</h2>
              <div className="userEditDatos">
                <span className="userDatosName">Username</span>
                <input
                  type="text"
                  name="hola"
                  placeholder="fsdfad"
                  size="32"
                  className="NombreEdit"
                />
              </div>
              <div className="userEditDatos">
                <span className="userDatosName">Username</span>
                <input
                  type="text"
                  placeholder="Go Hello"
                  defaultValue="Goofy"
                  id=""
                  className="NombreEdit"
                />
              </div>{" "}
              <div className="userEditDatos">
                <span className="userDatosName">Username</span>
                <input
                  type="text"
                  placeholder="GGo go"
                  defaultValue="Goofy"
                  id=""
                  className="NombreEdit"
                />
              </div>{" "}
              <div className="userEditDatos">
                <span className="userDatosName">Username</span>
                <input
                  type="text"
                  placeholder="fdsfa"
                  defaultValue="Goofy"
                  id=""
                  className="NombreEdit"
                />
              </div>{" "}
              <div className="userEditDatos">
                <span className="userDatosName">Username</span>
                <input
                  type="text"
                  placeholder="fhhsdf"
                  defaultValue="Goofy"
                  id=""
                  className="NombreEdit"
                />
              </div>
            </div>
            <div className="userEditUpdate">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0V3U_v_HSDcLeiBP9aHyo5iRA6ctu2pWTeg&usqp=CAU"
                alt=""
              />
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default User
