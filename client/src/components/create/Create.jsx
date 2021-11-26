import React, { useState } from "react";
import "./Create.css";
import axios from "axios";

function Create() {
  //Creando estado form para enviar en post y para comprobar errores
  const [form, setForm] = useState({
    name: "",
    score: "",
    healthScore: "",
    summary: "",
    diets: [],
    steps: "",
  });
  //estado errores para controlar form
  const [errors, setErrors] = useState({});

  //Estado para mostrar que hubo en error
  const [allowSubmit, setAllowSubmit] = useState(true);

  //Función que busca errores y los retorna en forma de objeto
  const buscarErrores = function (form) {
    let errors = {};
    if (!form.name) {
      errors.name = "Title is required";
    } else {
      errors.name = "";
    }
    if (!form.summary) {
      errors.summary = "Summary is required";
    } else {
      errors.summary = "";
    }
    if (!form.steps) {
      errors.steps = "Instructions are required";
    } else {
      errors.steps = "";
    }
    if (!form.score) {
      errors.score = "Score is required";
    } else if (!/^[1-9][0-9]?$|^100$/gm.test(form.score)) {
      errors.score = "Score should be between 1 and 100";
    } else {
      errors.score = "";
    }
    if (!form.healthScore) {
      errors.healthScore = "healthScore is required";
    } else if (!/^[1-9][0-9]?$|^100$/gm.test(form.score)) {
      errors.healthScore = "Health Score should be between 1 and 100";
    } else {
      errors.healthScore = "";
    }
    if (!form.diets.length) {
      errors.diets = "Please select at least one diet";
    } else {
      errors.diets = "";
    }
    return errors;
  };

  //función que setea el estado form y busca errores en caso de cambios
  const handleOnChange = function (e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(buscarErrores({ ...form, [e.target.name]: e.target.value }));
  };

  //Función que se encarga de setear las dietas dentro del estado o de quitarlas
  const handleOnChangeDiet = function (e) {
    if (e.target.checked === true)
      setForm({ ...form, diets: [...form.diets, parseInt(e.target.id)] });
    else {
      setForm({
        ...form,
        diets: form.diets.filter((d) => d !== parseInt(e.target.id)),
      });
    }
    //Buscar errores en dieta (no hay dietas)
    setErrors(
      buscarErrores({ ...form, diets: [...form.diets, e.target.name] })
    );
  };

  //Submitiar en caso de no haber errores
  const handleOnSubmit = function (e) {
    e.preventDefault();
    //Para un submit sin cambiar nada se debe verificar los vacíos y luego errores
    if (
      !errors.name &&
      form.name &&
      !errors.summary &&
      form.summary &&
      !errors.steps &&
      form.steps &&
      !errors.score &&
      form.score &&
      !errors.healthScore &&
      form.healthScore &&
      !errors.diets &&
      form.diets.length
    ) {
      setAllowSubmit(true);
      axios
        .post("http://localhost:3001/recipe", form)
        .then((r) => {
          alert("Recipe sussesfully created");
          setForm({
            name: "",
            score: "",
            healthScore: "",
            summary: "",
            diets: [],
            steps: "",
            img: "",
          });
          document.getElementById("createnewrecipe").reset();
        })
        .catch((e) => alert("Something went wrong"));
    } else {
      setAllowSubmit(false);
    }
  };

  return (
    <div className="createPage">
      <div className="formheader">
        <h1>Create your own Recipe</h1>
        {!allowSubmit && (
          <p className="alertMessage">
            Please, complete all the fields correctly before sending your recipe
          </p>
        )}
      </div>

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
              value={form.name}
            />
            {errors.name && <p className="alert">{errors.name}</p>}
          </div>
          <div className="forminput">
            <label htmlFor="score">Score</label>
            <input
              type="text"
              id="score"
              name="score"
              placeholder="A number between 1 and 100"
              onChange={handleOnChange}
              value={form.score}
            />
            {errors.score && <p className="alert">{errors.score}</p>}
          </div>
          <div className="forminput">
            <label htmlFor="healthScore">Health Score</label>
            <input
              type="text"
              id="healthScore"
              name="healthScore"
              placeholder="A number between 1 and 100"
              onChange={handleOnChange}
              value={form.healthScore}
            />
            {errors.healthScore && (
              <p className="alert">{errors.healthScore}</p>
            )}
          </div>
          <div className="forminput">
            <label htmlFor="summary">Summary</label>
            <textarea
              name="summary"
              rows="6"
              id="summary"
              onChange={handleOnChange}
              value={form.summary}
            ></textarea>
            {errors.summary && <p className="alert">{errors.summary}</p>}
          </div>
          <div className="forminput">
            <label htmlFor="steps">Instructions</label>
            <textarea
              name="steps"
              id="steps"
              rows="8"
              onChange={handleOnChange}
              value={form.steps}
            ></textarea>
            {errors.steps && <p className="alert">{errors.steps}</p>}
          </div>
          <div className="formbutton">
            <button type="submit" onClick={handleOnSubmit}>
              Send New Recipe
            </button>
          </div>
        </form>
      </div>

      <div className="diets">
        <h2>Choose at least one type of diet</h2>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="gluten free"
            id="1"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Gluten Free</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="ketogenic"
            id="2"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Ketogenic</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="dairy free"
            id="3"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Dairy Free</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="vegetarian"
            id="4"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Vegetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="lacto"
            id="5"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Lacto-Vegetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="ovo"
            id="6"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Ovo-Vegetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="vegan"
            id="7"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Vegan</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="pescatarian"
            id="8"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Pescetarian</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="paleolithic"
            id="9"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Paleo</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="primal"
            id="10"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Primal</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="fodmap friendly"
            id="11"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Low FODMAP</label>
        </div>
        <div className="dietscheck">
          <input
            type="checkbox"
            name="whole 30"
            id="12"
            onChange={(e) => handleOnChangeDiet(e)}
          />
          <label>Whole30</label>
        </div>
        {errors.diets ? (
          <p className="alert">Choose one type of diet at least</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Create;
