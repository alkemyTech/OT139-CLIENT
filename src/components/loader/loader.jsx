import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Hearts } from  'react-loader-spinner'
import './loader.css'
export default function Loader(){

return(
<div className="center-loader">
<div className="loader">
<Hearts
    height="200"
    width="200"
    color="#DB5752"
    ariaLabel='loading'
  />
</div>


  </div>
)
}