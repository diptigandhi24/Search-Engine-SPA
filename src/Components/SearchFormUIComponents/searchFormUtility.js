import React from "react";
import "./searchFormUI.css";
import PropTypes from "prop-types";

let InputProps = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  accessFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
};
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
      <label htmlFor={accessFor}>{labelValue}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
FormInput.protoTypes = InputProps;

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
      <label htmlFor={accessFor}>
        {labelValue}
        <div className="list-wrapper">
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
          {children}
        </div>
      </label>
    </div>
  );
}

FormAutocompleteInput.protoTypes = InputProps;

export function SubmitFormQuery({ disabled, onClick, buttonName }) {
  return (
    <div className="form-content">
      <button type="button" disabled={disabled} onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
}

SubmitFormQuery.protoTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
