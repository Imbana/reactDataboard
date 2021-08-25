import "./userList.css"

import  React,{ useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@material-ui/icons/Delete";
import {userRows} from "./../../dummyData";
import {Link} from "react-router-dom";





const UserList = () => {


const handleDelete = (id)=>{
  const newData = data.filter((item)=>(
    item.id !== id
  ))
  setData(newData)
}

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "User",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div className="tableUser">
          <img src={params.row.avatar} alt="foto" />
          {params.row.userName}
        </div>
      ),
    },
    {
      field: "age",
      headerName: "Edad",
      width: 120,
    },
    {
      field: "status",
      headerName: "Estatus",
      width: 140,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 180,
      editable: true,
    },
    {
      field: "active",
      headerName: "Active",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="tableUser">
            <Link to={"/user/"+params.row.id}>
              <button>editar</button>
            </Link>
            <DeleteIcon onClick={(()=>handleDelete(params.row.id))}></DeleteIcon>
          </div>
        );
      },
    },
  ];

  const [data, setData] = useState(userRows);


    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
}

export default UserList
