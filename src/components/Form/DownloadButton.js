import React from "react";

const DownloadButton = () => {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("mainTextarea").value], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "minus-mayus-convert.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <button className="btn btn-av-soft" onClick={downloadTxtFile}>
        Descargar
      </button>
    </div>
  );
};

export default DownloadButton;
