import React, { useState } from "react";
import "./Create.css";
import axios from "axios";

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
    if (e.target.checked === true)
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
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Gluten Free</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="ketogenic"
            id="ketogenic"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Ketogenic</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="dairy free"
            id="dairy free"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Dairy Free</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="vegetarian"
            id="vegetarian"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Vegetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="lacto"
            id="lacto"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Lacto-Vegetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="vegan"
            id="vegan"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Vegan</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="pescatarian"
            id="pescatarian"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Pescetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="paleolithic"
            id="paleolithic"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Paleo</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="primal"
            id="primal"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Primal</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="fodmap friendly"
            id="fodmap friendly"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Low FODMAP</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="whole 30"
            id="whole 30"
            onChange={(e) => handleOnChangeDiet(e)}
          />
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
