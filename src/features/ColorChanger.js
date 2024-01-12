import React, { useState, useEffect } from "react";

const ColorChangerS = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    () => localStorage.getItem("backgroundColor") || "#ffffff"
  );
  const [textColor, setTextColor] = useState(
    () => localStorage.getItem("textColor") || "#000000"
  );

  const handleColorChange = (e) => {
    const { name, value } = e.target;

    if (name === "backgroundColor") {
      setBackgroundColor(value);
      localStorage.setItem("backgroundColor", value);
    } else if (name === "textColor") {
      setTextColor(value);
      localStorage.setItem("textColor", value);
    }
  };

  const styles = {
    backgroundColor,
    color: textColor,
    padding: "20px",
    margin: "10px",
  };

  useEffect(() => {
    const savedBackgroundColor = localStorage.getItem("backgroundColor");
    const savedTextColor = localStorage.getItem("textColor");

    if (savedBackgroundColor) {
      setBackgroundColor(savedBackgroundColor);
    }

    if (savedTextColor) {
      setTextColor(savedTextColor);
    }
  }, []);

  return (
    <div>
      <label>
        Background Color:
        <input
          type="color"
          name="backgroundColor"
          value={backgroundColor}
          onChange={handleColorChange}
        />
      </label>

      <label>
        Text Color:
        <input
          type="color"
          name="textColor"
          value={textColor}
          onChange={handleColorChange}
        />
      </label>

      <div style={styles}>{children}</div>
    </div>
  );
};

export default ColorChangerS;
