import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Education() {
  const [main1, setmain] = React.useState({
    college: "",
    YOJ: "",
    YOP: "",
    Qualification: "",
    Description: "",
    school: "",
    sYOJ: "",
    sYOP: "",
    sQualification: "",
    sDescription: "",
  });
  let change = (p) => {
    const { name, value } = p.target;
    setmain({ ...main1, [name]: value });
  };
  let submitHandler = (e) => {
    localStorage.setItem("college", main1.college);
    localStorage.setItem("YOJ", main1.YOJ);
    localStorage.setItem("YOP", main1.YOP);
    localStorage.setItem("Qualification", main1.Qualification);
    localStorage.setItem("Description", main1.Description);
    localStorage.setItem("school", main1.school);
    localStorage.setItem("sYOJ", main1.sYOJ);
    localStorage.setItem("sYOP", main1.sYOP);
    localStorage.setItem("sQualification", main1.sQualification);
    localStorage.setItem("sDescription", main1.sDescription);
    e.preventDefault();
    setmain(main1);
    console.log(main1);
  };

  return (
    <div>
      <form className="row g-3 needs-validation" onSubmit={submitHandler}>
        <div className="col-md-5"></div>
        <div className="col-md-2">
          <span className="input-group-text" id="inputGroupPrepend">
            Education Info
          </span>
        </div>
        <div className="col-md-5"></div>
        <br></br>
        <br></br>
        <br></br>

        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            College/Unviersity: *
          </label>

          <input
            name="college"
            value={main1.college}
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Enter College name..."
            onChange={change}
            required
          />
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" class="form-label">
            Year Of Joining: *
          </label>
          <input
            name="YOJ"
            value={main1.YOJ}
            type="date"
            className="form-control"
            id="validationCustom02"
            //   onChange={(p) => change(p)}
            onChange={change}
            required
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="col-md-4">
          <label for="validationCustomUsername" class="form-label">
            Year Of Passing: *
          </label>
          <div className="input-group has-validation">
            <input
              type="date"
              value={main1.YOP}
              name="YOP"
              className="form-control"
              id="validationCustomUsername"
              // onChange={(p) => change(p)}
              onChange={change}
              aria-describedby="inputGroupPrepend"
              required
            />
          </div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom03" class="form-label">
            Qualification: *
          </label>
          <input
            type="text"
            value={main1.Qualification}
            name="Qualification"
            className="form-control"
            placeholder="Enter Qualification Here..."
            //   onChange={(p) => change(p)}
            onChange={change}
            id="validationCustom03"
            required
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="col-md-8">
          <label for="validationCustom04" class="form-label">
            Description: *
          </label>
          <br></br>
          <input
            type="text"
            value={main1.Description}
            name="Description"
            className="form-control"
            placeholder="Enter Description Here..."
            //   onChange={(p) => change(p)}
            onChange={change}
            id="validationCustom03"
            required
          />
        </div>

        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            School: *
          </label>

          <input
            name="school"
            value={main1.school}
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Enter School name..."
            onChange={change}
            required
          />
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" class="form-label">
            Year Of Joining: *
          </label>
          <input
            name="sYOJ"
            value={main1.sYOJ}
            type="date"
            className="form-control"
            id="validationCustom02"
            //   onChange={(p) => change(p)}
            onChange={change}
            required
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="col-md-4">
          <label for="validationCustomUsername" class="form-label">
            Year Of Passing: *
          </label>
          <div className="input-group has-validation">
            <input
              type="date"
              value={main1.sYOP}
              name="sYOP"
              className="form-control"
              id="validationCustomUsername"
              // onChange={(p) => change(p)}
              onChange={change}
              aria-describedby="inputGroupPrepend"
              required
            />
          </div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom03" class="form-label">
            Qualification: *
          </label>
          <input
            type="text"
            value={main1.sQualification}
            name="sQualification"
            className="form-control"
            placeholder="Enter Qualification Here..."
            //   onChange={(p) => change(p)}
            onChange={change}
            id="validationCustom03"
            required
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="col-md-8">
          <label for="validationCustom04" class="form-label">
            Description: *
          </label>
          <br></br>
          <input
            type="text"
            value={main1.sDescription}
            name="sDescription"
            className="form-control"
            placeholder="Enter Description Here..."
            //   onChange={(p) => change(p)}
            onChange={change}
            id="validationCustom03"
            required
          />
        </div>

        <br></br>
        <br></br>

        <div className="col-1">
          <button className="btn btn-success" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Education;
