import React, { useState } from "react";
import "./Create.css";

function Create() {
  const [form, setForm] = useState({
    name: "",
    score: "",
    healthScore: "",
    summary: "",
    diets: [],
    steps: "",
    img: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    score: "",
    healthScore: "",
    summary: "",
    diets: "",
    steps: "",
  });
  const handleOnChange = function (e) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleOnChangeDiet = function (e) {
    e.preventDefault();
    const index = form.diets.indexOf(e.target.name);
    if (index === -1)
      setForm({ ...form, diets: [...form.diets, e.target.name] });
    else {
      setForm({
        ...form,
        diets: form.diets.filter((d) => d !== e.target.name),
      });
    }
  };

  return (
    <div className="createPage">
      <h1>Create your own Recipe</h1>
      <div className="form">
        <form id="createnewrecipe">
          <div className="forminput">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Amazing Recipe"
              onChange={handleOnChange}
            />
          </div>
          <div className="forminput">
            <label htmlFor="score">Score</label>
            <input
              type="text"
              id="score"
              name="score"
              placeholder="A number between 2 and 100"
              onChange={handleOnChange}
            />
          </div>
          <div className="forminput">
            <label htmlFor="healthScore">Health Score</label>
            <input
              type="text"
              id="healthScore"
              name="healthScore"
              placeholder="A number between 2 and 100"
              onChange={handleOnChange}
            />
          </div>
          <div className="forminput">
            <label htmlFor="summary">Summary</label>
            <textarea
              name="summary"
              rows="6"
              id="summary"
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="forminput">
            <label htmlFor="steps">Instructions</label>
            <textarea
              name="steps"
              id="steps"
              rows="8"
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="formbutton">
            <button type="submit">Send New Recipe</button>
          </div>
        </form>
      </div>

      <div className="diets">
        <h2>Choose type of diet</h2>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="gluten free"
            id="gluten free"
            onChange={handleOnChangeDiet}
          />
          <label>Gluten Free</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="ketogenic"
            id="ketogenic"
            onChange={handleOnChangeDiet}
          />
          <label>Ketogenic</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="dairy free"
            id="dairy free"
            onChange={handleOnChangeDiet}
          />
          <label>Dairy Free</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="vegetarian"
            id="vegetarian"
            onChange={handleOnChangeDiet}
          />
          <label>Vegetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="lacto"
            id="lacto"
            onChange={handleOnChangeDiet}
          />
          <label>Lacto-Vegetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="vegan"
            id="vegan"
            onChange={handleOnChangeDiet}
          />
          <label>Vegan</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="pescatarian"
            id="pescatarian"
            onChange={handleOnChangeDiet}
          />
          <label>Pescetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="paleolithic"
            id="paleolithic"
            onChange={handleOnChangeDiet}
          />
          <label>Paleo</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="primal"
            id="primal"
            onChange={handleOnChangeDiet}
          />
          <label>Primal</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="fodmap friendly"
            id="fodmap friendly"
            onChange={handleOnChangeDiet}
          />
          <label>Low FODMAP</label>
        </div>
        <div className="dietscheck">
          <input type="checkbox" name="whole 30" id="whole 30" />
          <label>Whole30</label>
        </div>
        {errors.diets.length ? (
          <p className="alert">Choose one type of diet at least</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Create;
