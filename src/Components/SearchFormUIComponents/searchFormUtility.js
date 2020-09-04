import React from "react";
import "./searchFormUI.css";
export function FormInput({
  type,
  placeholder,
  accessFor,
  onChange,
  value,
  labelValue,
}) {
  return (
    <div className="form-content">
      <label for={accessFor}>{labelValue}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export function FormAutocompleteInput({
  type,
  placeholder,
  accessFor,
  onChange,
  value,
  labelValue,
  children,
}) {
  return (
    <div className="form-content">
      <label for={accessFor}>{labelValue}</label>
      <div className="list-wrapper">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {children}
      </div>
    </div>
  );
}

export function SubmitFormQuery({ disabled, onClick, buttonName }) {
  return (
    <div className="form-content">
      <button type="button" disabled={disabled} onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
}
