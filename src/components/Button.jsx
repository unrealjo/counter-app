import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.trigger}
      className="font-medium text-xl p-4 m-5 rounded border-solid border-2 border-black">
      {props.content}
    </button>
  );
}
