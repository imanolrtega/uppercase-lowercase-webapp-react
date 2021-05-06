import React, { useEffect } from "react";

const AdGoogle = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1205337443841472"
      data-ad-slot="2985673020"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
};

export default AdGoogle;
