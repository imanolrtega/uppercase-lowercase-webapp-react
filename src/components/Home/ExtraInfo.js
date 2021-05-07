import React, { lazy, Suspense } from "react";
const AdGoogle = lazy(() => import("./../Ads/AdGoogle"));

const ExtraInfo = () => {
  return (
    <div className="pt-5 pt-md-11">
      <div className="container">
        <div className="row align-items-center m-4 pt-3">
          <div className="col-lg-6 order-md-1">
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
          <div className="col-lg-6 order-md-2">
            <h3 className="h-3">Minúscula</h3>
            <p className="lead">
              Respecto a la escritura, y en diversos alfabetos, la letra
              minúscula es aquella menos alta (en oposición a la mayúscula) y de
              formato más sencillo, pueden ser escritas en letras de imprenta o
              cursiva, manuscrita o mecanografiada.
            </p>
          </div>
        </div>
        <div className="row align-items-center m-4 pt-3">
          <div className="col-lg-6 order-md-2">
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
          <div className="col-lg-6 order-md-1">
            <h3 className="h-3">Mayúscula</h3>
            <p className="lead">
              La mayúscula es la letra que se caracteriza por ser más grande y a
              veces con ciertas características que la diferencian del resto.
              Como norma general se emplean para la primera letra de los nombres
              propios. También indica el comienzo de una oración y se utiliza
              para las siglas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
