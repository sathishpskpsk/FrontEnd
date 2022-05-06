import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Experience() {
  const [main, setmain] = React.useState({
    institue: "",
    position: "",
    dureation: "",
    description: "",
    Einstitue: "",
    Eposition: "",
    Edureation: "",
    Edescription: "",
  });
  let change = (p) => {
    const { name, value } = p.target;
    setmain({ ...main, [name]: value });
  };
  let submitHandler = (e) => {
    localStorage.setItem("institue", main.institue);
    localStorage.setItem("position", main.position);
    localStorage.setItem("dureation", main.dureation);
    localStorage.setItem("description", main.description);

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
          <div className="col-md-2">
            <span className="input-group-text" id="inputGroupPrepend">
              Experience 1 Info
            </span>
          </div>
          <div className="col-md-5"></div>
          <br></br>
          <br></br>
          <br></br>

          <div className="col-md-4">
            <label className="form-label">Institue/Organisation: *</label>

            <input
              name="institue"
              value={main.institue}
              type="text"
              className="form-control"
              placeholder="Enter Institue/Organisation name..."
              onChange={change}
              required
            />
          </div>
          <div className="col-md-4">
            <label class="form-label">Position: *</label>
            <input
              name="position"
              value={main.position}
              type="text"
              className="form-control"
              placeholder="Enter Position..."
              onChange={change}
              required
            />
          </div>

          <div className="col-md-4">
            <label class="form-label">Dureation: *</label>
            <div className="input-group has-validation">
              <input
                type="text"
                value={main.dureation}
                name="dureation"
                className="form-control"
                placeholder="Enter Dureation Here..."
                onChange={change}
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <label class="form-label">Description: *</label>
            <input
              type="text"
              value={main.description}
              name="description"
              className="form-control"
              placeholder="Enter Description Here..."
              onChange={change}
              required
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <span className="input-group-text" id="inputGroupPrepend">
              Experience 2 Info
            </span>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="col-md-5"></div>

          <div className="col-md-4">
            <label className="form-label">Institue/Organisation:</label>

            <input
              name="Einstitue"
              value={main.Einstitue}
              type="text"
              className="form-control"
              placeholder="Enter Institue/Organisation name..."
              onChange={change}
            />
          </div>
          <div className="col-md-4">
            <label class="form-label">Position:</label>
            <input
              name="Eposition"
              value={main.Eposition}
              type="text"
              className="form-control"
              placeholder="Enter Position..."
              onChange={change}
            />
          </div>

          <div className="col-md-4">
            <label class="form-label">Dureation:</label>
            <div className="input-group has-validation">
              <input
                type="text"
                value={main.Edureation}
                name="Edureation"
                className="form-control"
                placeholder="Enter Dureation Here..."
                onChange={change}
              />
            </div>
          </div>
          <div className="col-md-12">
            <label class="form-label">Description:</label>
            <input
              type="text"
              value={main.Edescription}
              name="Edescription"
              className="form-control"
              placeholder="Enter Description Here..."
              onChange={change}
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

export default Experience;
