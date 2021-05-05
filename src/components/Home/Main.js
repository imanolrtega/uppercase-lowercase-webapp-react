import React from "react";

const Main = () => {
  return (
    <div className="pt-5 pt-md-11">
      <div className="container">
        <div className="row align-items-center m-3">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <img
              src="ads-google.jpg"
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
              alt="..."
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
          <div
            className="col-12 col-md-7 col-lg-6 order-md-1"
            data-aos="fade-up">
            <h1 className="h-2 text-center text-md-left">
              <span className="av-text-main">De Minúscula a Mayúscula</span>
              <br />
              Convertidor Online
            </h1>
            <p className="lead text-center text-md-left mb-6 mb-lg-8">
              Cómo convertir o pasar de minúsculas a mayúscula con uno solo
              click. Introduce la frase o texto y conviertela con un click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
