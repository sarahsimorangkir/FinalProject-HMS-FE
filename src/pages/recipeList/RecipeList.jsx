import React, { useState } from "react";
import "./recipeList.css";
import { Link } from "react-router-dom";
import { recipeRows } from "../../dummyData";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { DataGrid } from "@mui/x-data-grid";

export default function RecipeList() {
  const [data, setData] = useState(recipeRows);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "patientName", headerName: "Nama Pasien", width: 130 },
    { field: "doctorName", headerName: "Nama Dokter", width: 130 },
    {
      field: "date",
      headerName: "Tanggal",
      type: "date",
      width: 120,
    },
    {
      field: "title",
      headerName: "Title",
      width: 90,
    },
    {
      field: "detail",
      headerName: "Detail",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/recipe/" + params.row.id}>
              <VisibilityIcon className="recipeView" />
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <div className="recipeList">
      <div className="recipeListTitleContainer">
        <h3 className="ListTitle">Recipe</h3>
      </div>

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
