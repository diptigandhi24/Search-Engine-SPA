import React from "react";

export default function OptionsList(props) {
  return (
    <li key={props.id} id={props.id} onClick={props.onClick}>
      {props.children}
    </li>
  );
}
