import React from "react";
import "./homeFormEdit.css";
import "../../../shared/style/baseStyle.css";
import "../../../shared/style/colorOng.css";
import HomeTitleFormEdit from "./HomeTitleFormEdit";
import HomeSlidesFormEdit from "./HomeSlidesFormEdit";


export default function HomeFormEdit() {
  return (
    <div className="mx-auto container_view mt-3">
      <h3 className="mt-2 text-center border color_red_ong mb-3">Edicion de Home</h3>
      <div className="background_red text-center mb-3 pt-3 pb-3">
        <HomeTitleFormEdit />
      </div>
      <div className="background_yellow text-center border">
        <HomeSlidesFormEdit />
      </div>
    </div>
  );
}
