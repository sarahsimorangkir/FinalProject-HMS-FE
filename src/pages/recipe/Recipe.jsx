import React, { useState } from "react";
import "./recipe.css";
import PersonIcon from "@material-ui/icons/Person";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

export default function Recipe() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="patient">
      <div className="patientTitleContainer">
        <h3 className="patientTitle">Patient Recipe</h3>
      </div>
      <div className="patientContainer">
        <div className="patientShow">
          <div className="patientShowDetail">
            <span className="patientShowTitle">Recipe Details</span>
            <div className="patientShowInfo">
              <PermIdentityIcon className="patientShowIcon" />
              <span className="patientShowInfoTitle">Cristiano</span>
            </div>
            <div className="doctorShowInfo">
              <PersonIcon className="doctorShowIcon" />
              <span className="doctorShowInfoTitle">Dr. Yoga</span>
            </div>
            <div className="dateShowInfo">
              <CalendarTodayIcon className="dateShowIcon" />
              <span className="dateShowInfoTitle">12/12/2021</span>
            </div>
            <div className="titleShowInfo">
              <LocalHospitalIcon className="titleShowIcon" />
              <span className="titleShowInfoTitle">Sakit hati</span>
            </div>
            <div className="detailShowInfo">
              <ReceiptIcon className="detailShowIcon" />
              <span className="detailShowInfoTitle">
                Tenangkan pikiran, kalem, holiday, jangan lupa ngopi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
