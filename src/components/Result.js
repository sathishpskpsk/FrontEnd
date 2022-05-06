import React from "react";

function Result() {
  return (
    <div>
      <div>
        <h1>Personal Details:</h1>
        <hr />
        <ul>
          <li>{localStorage.getItem("fname")}</li>
          <li>{localStorage.getItem("lname")}</li>
          <li>{localStorage.getItem("email")}</li>
          <li>{localStorage.getItem("city")}</li>
          <li>{localStorage.getItem("zip")}</li>
          <li>{localStorage.getItem("state")}</li>
        </ul>
      </div>
      <div>
        <h1>Education Details:</h1>
        <hr />
        <ul>
          <li>{localStorage.getItem("college")}</li>
          <li>{localStorage.getItem("YOJ")}</li>
          <li>{localStorage.getItem("YOP")}</li>
          <li>{localStorage.getItem("Qualification")}</li>
          <li>{localStorage.getItem("Description")}</li>
          <li>{localStorage.getItem("sschool")}</li>
          <li>{localStorage.getItem("sYOJ")}</li>
          <li>{localStorage.getItem("sYOP")}</li>
          <li>{localStorage.getItem("sQualification")}</li>
          <li>{localStorage.getItem("sDescription")}</li>
        </ul>
      </div>
      <div>
        <h1>Project Details:</h1>
        <hr />
        <ul>
          <li>{localStorage.getItem("title")}</li>
          <li>{localStorage.getItem("link")}</li>
          <li>{localStorage.getItem("description")}</li>
        </ul>
      </div>
      <div>
        <h1>Experience Details:</h1>
        <hr />
        <ul>
          <li>{localStorage.getItem("institue")}</li>
          <li>{localStorage.getItem("position")}</li>
          <li>{localStorage.getItem("dureation")}</li>
          <li>{localStorage.getItem("description")}</li>
        </ul>
      </div>
    </div>
  );
}

export default Result;
