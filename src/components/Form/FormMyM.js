import React, { Fragment, useState } from "react";
import DownloadButton from "./DownloadButton";

const FormMyM = () => {
  const [words, setWords] = useState("");
  const [alertCopy, setAlertCopy] = useState(false);

  const handleInputChange = (e) => {
    setWords(e.target.value);
  };

  const capitalize = () => {
    setWords(words.charAt(0).toUpperCase() + words.slice(1).toLowerCase());
  };

  const upper = () => {
    setWords(words.toUpperCase());
  };

  const lower = () => {
    setWords(words.toLowerCase());
  };

  const capitalizeWords = () => {
    let txt = words.split(" ");
    txt = txt.map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
    txt = txt.join(" ");
    setWords(txt);
  };

  const copyButton = () => {
    navigator.clipboard.writeText(words);
    setAlertCopy(true);
    setTimeout(() => {
      setAlertCopy(false);
    }, 2500);
  };

  const submitPrevent = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card-body justify-content-center">
          <div className="card-text text-center justify-content-center pb-3">
            <ul className="list-group">
              <li>
                <strong>Mayúsculas al comienzo:</strong> Convierte a mayúsculas
                al comienzo del parrafo y después de un punto.
              </li>
              <li>
                <strong>Todo a minúscula:</strong> Convierte todo el texto a
                minúsculas.
              </li>
              <li>
                <strong>Todo a mayúscula:</strong> Convierte todos el texto a
                mayúsculas.
              </li>
              <li>
                <strong>Capitalizar cada palabra:</strong> Convierte la primera
                letra de cada palabra a mayúscula
              </li>
            </ul>
          </div>
          <form className="row justify-content-center" onSubmit={submitPrevent}>
            <div className="form-group">
              <textarea
                className="form-control p-2"
                id="mainTextarea"
                rows="5"
                name="textArea"
                placeholder="Ingrese aquí el texto"
                onChange={handleInputChange}
                value={words}></textarea>

              <div className="container mt-2 d-flex justify-content-between">
                {words ? <DownloadButton /> : ""}
                {words ? (
                  <button className="btn btn-av-soft" onClick={copyButton}>
                    Copiar Texto
                  </button>
                ) : (
                  ""
                )}
              </div>

              <div className="container-fluid d-flex justify-content-center">
                {alertCopy ? (
                  <div className="div-float-alert">
                    <div className="alert alert-success" role="alert">
                      ¡Texto Copiado!
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="row p-3 d-flex justify-content-between">
                <div className="col-md d-flex justify-content-center">
                  <button
                    className="btn-av m-1"
                    type="submit"
                    onClick={capitalize}>
                    Mayúscula al comienzo
                  </button>
                </div>
                <div className="col-md d-flex justify-content-center">
                  <button className="btn-av m-1" type="submit" onClick={lower}>
                    Todo a minúscula
                  </button>
                </div>
                <div className="col-md d-flex justify-content-center">
                  <button className="btn-av m-1" type="submit" onClick={upper}>
                    Todo a mayúscula
                  </button>
                </div>
                <div className="col-md d-flex justify-content-center">
                  <button
                    className="btn-av m-1"
                    type="submit"
                    onClick={capitalizeWords}>
                    Capitalizar cada palabra
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default FormMyM;
