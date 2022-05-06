import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Personal(p) {
  const [main, setmain] = React.useState([
    {
      fname: "",
      lname: "",
      email: "",
      city: "",
      state: "",
      zip: "",
    },
  ]);
  let change = (p) => {
    const { name, value } = p.target;
    setmain({ ...main, [name]: value });
  };
  let submitHandler = (e) => {
    localStorage.setItem("fname", main.fname);
    localStorage.setItem("lname", main.lname);
    localStorage.setItem("email", main.email);
    localStorage.setItem("city", main.city);
    localStorage.setItem("state", main.state);
    localStorage.setItem("zip", main.zip);
    e.preventDefault();
    setmain(main);
    console.log(main);
  };

  return (
    <div>
      <fieldset className="card">
        <form className="row g-3 needs-validation" onSubmit={submitHandler}>
          <div className="col-md-5"></div>
          <div className="col-md-7f">
            <span className="input-group-text" id="inputGroupPrepend">
              Personal Info
            </span>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-6">
            <label for="validationCustom01" className="form-label">
              First name: *
            </label>

            <input
              name="fname"
              value={main.fname}
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Enter First name..."
              onChange={change}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="validationCustom02" class="form-label">
              Last name: *
            </label>
            <input
              name="lname"
              value={main.lname}
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Enter Last name..."
              //   onChange={(p) => change(p)}
              onChange={change}
              required
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-6">
            <label for="validationCustomUsername" class="form-label">
              Email-ID: *
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="email"
                value={main.email}
                name="email"
                className="form-control"
                id="validationCustomUsername"
                placeholder="Enter Email-ID Here..."
                // onChange={(p) => change(p)}
                onChange={change}
                aria-describedby="inputGroupPrepend"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationCustom03" class="form-label">
              City: *
            </label>
            <input
              type="text"
              value={main.city}
              name="city"
              className="form-control"
              placeholder="Enter City Here..."
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
          <div className="col-md-6">
            <label for="validationCustom05" class="form-label">
              Zip: *
            </label>
            <input
              type="text"
              value={main.zip}
              name="zip"
              className="form-control"
              id="validationCustom05"
              placeholder="Enter Zip..."
              //   onChange={(p) => change(p)}
              onChange={change}
              required
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="col-md-6">
            <label for="validationCustom04" class="form-label">
              State: *
            </label>
            <br></br>
            <select
              className="form-select"
              id="validationCustom04"
              required
              name="state"
              value={main.state}
              //   onChange={(p) => change(p)}
              onChange={change}
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-1">
            <button className="btn btn-success" type="submit" name="ok">
              Save
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default Personal;
