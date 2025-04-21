import React, { useState } from "react";

export const AddCategory = ({ changeInput }) => {
  const [inputValue, setInputValue] = useState("");

  const changeValueInput = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitEvent = (event) => {
    event.preventDefault();
    if(inputValue.length <=1)return;
    changeInput(inputValue);
    setInputValue("")
  };

  return (
    <>
    <form  onSubmit={onSubmitEvent} aria-label="form">

      <input type="text" value={inputValue} onChange={changeValueInput} placeholder="escribe algo..."/>

    </form>

    </>
  );
};
