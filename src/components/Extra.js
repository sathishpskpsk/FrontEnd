import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Extra() {
  const [main, setmain] = React.useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  });
  let change = (p) => {
    const { name, value } = p.target;
    setmain({ ...main, [name]: value });
  };
  let submitHandler = (e) => {
    e.preventDefault();
    setmain(main);
    console.log(main);
  };

  return (
    <div>
      <fieldset className="card">
        <form className="row g-3 needs-validation" onSubmit={submitHandler}>
          <br></br>

          <div className="col-md-5"></div>
          <div className="col-md-3">
            <span className="input-group-text" id="inputGroupPrepend">
              Extra Details
            </span>
          </div>
          <div className="col-md-4"></div>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-5"></div>
          <div className="col-md-3">
            <span className="input-group-text" id="inputGroupPrepend">
              Skills/Languages
            </span>
          </div>

          <div className="col-md-4"></div>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-4">
            <input
              name="skill1"
              value={main.skill1}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              name="skill2"
              value={main.skill2}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>

          <div className="col-md-4">
            <input
              name="skill3"
              value={main.skill3}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="col-md-4">
            <input
              name="skill4"
              value={main.skill4}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              name="skill5"
              value={main.skill5}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              name="skill6"
              value={main.skill6}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-5"></div>
          <div className="col-md-2">
            <span className="input-group-text" id="inputGroupPrepend">
              Interest
            </span>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-4">
            <input
              name="interest1"
              value={main.interest1}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>

          <div className="col-md-4">
            <input
              name="interest2"
              value={main.interest2}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>

          <div className="col-md-4">
            <input
              name="interest3"
              value={main.interest3}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-4">
            <input
              name="interest4"
              value={main.interest4}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              name="interest5"
              value={main.interest5}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              name="interest6"
              value={main.interest6}
              type="text"
              className="form-control"
              placeholder="Enter Here..."
              onChange={change}
              required
            />
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-1">
            <button className="btn btn-success" type="submit">
              Save
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default Extra;
