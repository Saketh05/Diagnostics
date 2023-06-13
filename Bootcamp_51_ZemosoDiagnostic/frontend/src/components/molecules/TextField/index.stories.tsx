import React from "react";
import CustomTextField from ".";




export default {
    title: "Molecules/CustomTextField",
    component: CustomTextField,
  }

  export const Custom_TextField = () =>{
    return (
        <CustomTextField 
        label="Name"
        variant="standard"
        placeholder="eg: Patrick"
        />
    )
  }
