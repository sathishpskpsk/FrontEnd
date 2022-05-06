import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Project() {
  const [main, setmain] = React.useState({
    title: "",
    link: "",
    description: "",
    P2t: "",
    P2l: "",
    P2d: "",
  });

  let change = (p) => {
    const { name, value } = p.target;
    setmain({ ...main, [name]: value });
  };
  let submitHandler = (e) => {
    localStorage.setItem("title", main.title);
    localStorage.setItem("link", main.link);
    localStorage.setItem("description", main.description);

    e.preventDefault();
    setmain(main);
    console.log(main);
  };

  return (
    <div>
      <form className="row g-3 needs-validation" onSubmit={submitHandler}>
        <div className="col-md-5"></div>
        <div className="col-md-7f">
          <span className="input-group-text" id="inputGroupPrepend">
            Project 1 Info
          </span>
        </div>
        <br></br>
        <br></br>

        <div className="col-md-12">
          <label className="form-label">Title: *</label>

          <input
            name="title"
            value={main.title}
            type="text"
            className="form-control"
            placeholder="Enter Title name..."
            onChange={change}
            required
          />
        </div>
        <div className="col-md-12">
          <label class="form-label">Link: *</label>
          <input
            name="link"
            value={main.link}
            type="text"
            className="form-control"
            placeholder="Enter Link..."
            onChange={change}
            required
          />
        </div>

        <div className="col-md-12">
          <label class="form-label">Description: *</label>
          <input
            name="description"
            value={main.description}
            type="text"
            className="form-control"
            placeholder="Enter Description..."
            onChange={change}
            required
          />
        </div>
        <br></br>
        <br></br>
        <div className="col-md-5"></div>
        <div className="col-md-7f">
          <span className="input-group-text" id="inputGroupPrepend">
            Project 2 Info
          </span>
        </div>

        <div className="col-md-12">
          <label class="form-label">Title:</label>
          <input
            name="p2t"
            value={main.P2t}
            type="text"
            className="form-control"
            placeholder="Enter Title..."
            onChange={change}
          />
        </div>

        <div className="col-md-12">
          <label class="form-label">Link:</label>
          <input
            name="p2l"
            value={main.P2l}
            type="text"
            className="form-control"
            placeholder="Enter Link..."
            onChange={change}
          />
        </div>

        <div className="col-md-12">
          <label class="form-label">Description:</label>
          <input
            name="P2d"
            value={main.P2d}
            type="text"
            className="form-control"
            placeholder="Enter Description..."
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
    </div>
  );
}

export default Project;
