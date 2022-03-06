import React from "react";
import "./homeFormEdit.css";
import "../../../css/colorOng.css";
import TitleEditForm from "./HomeTitleFormEdit";
import ImgEditForm from "./HomeImgFormEdit";


export default function HomeFormEdit() {
  return (
    <div className="mx-auto container_view mt-3">
      <h3 className="mt-2 text-center border color_red mb-3">Edicion de Home </h3>
      <div className="background_red text-center mb-3 pt-3 pb-3">
        <TitleEditForm />
      </div>
      <div className="background_yellow text-center border">
        <ImgEditForm />
      </div>
    </div>
  );
}
