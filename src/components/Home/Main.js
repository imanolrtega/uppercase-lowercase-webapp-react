import React from "react";

class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        class="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1205337443841472"
        data-ad-slot="2985673020"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    );
  }
}

const Main = () => {
  return (
    <div className="pt-5 pt-md-11">
      <div className="container">
        <div className="row align-items-center m-4 pt-3">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <AdComponent />
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
