import React from "react";
import "./formEditHome.css";
import TitleEditForm from "./TitleEditForm";
import ImgEditForm from "./ImgEditForm";

export default function FormEditHome() {
  return (
    <div className="mx-auto container_view">
      <h1 className="text-center">Edicion de Home</h1>
      <div className="container_form_title mb-3 pt-3 pb-3">
        <h3>Edicion de Titulo de Bienvenida</h3>
        <TitleEditForm />
      </div>
      <div className="container_form_img border ">
        <h3 className="mt-2">Edicion de Imagenes</h3>
        <ImgEditForm />
      </div>
    </div>
  );
}
