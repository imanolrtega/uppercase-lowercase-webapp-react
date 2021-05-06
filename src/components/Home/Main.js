import React, { lazy, Suspense } from "react";
const AdGoogle = lazy(() => import("./../ads/AdGoogle"));

const Main = () => {
  return (
    <div className="pt-5 pt-md-11">
      <div className="container">
        <div className="row align-items-center m-4 pt-3">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <Suspense
              fallback={
                <div className="d-flex justify-content-center pt-4">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                </div>
              }>
              <AdGoogle />
            </Suspense>
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
