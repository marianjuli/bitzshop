import React, { useState, useImperativeHandle } from "react";

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button className="btn btn-primary " onClick={toggleVisibility}>
          {props.buttonLabelShow}
        </button>
      </div>
      <div style={showWhenVisible}>
        <button className="btn btn-danger" onClick={toggleVisibility}>
          {props.buttonLabelHide ? props.buttonLabelHide : "Cancelar"}
        </button>
        {props.children}
      </div>
    </div>
  );
});

export default Togglable;
