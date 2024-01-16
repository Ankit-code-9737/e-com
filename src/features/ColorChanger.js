// ColorChanger.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRootColor, SetrootBgColor, SetBodyColor } from "./action";

const ColorChanger = () => {
  const dispatch = useDispatch();

  // text color
  const rootColor = useSelector((state) => state.rootColor);
  const handleColorChange = (e) => {
    const color = e.target.value;
    dispatch(setRootColor(color));
    document.documentElement.style.setProperty(
      "--primary-color",
      e.target.value
    );
  };

  // Bg color
  const rootBgColor = useSelector((state) => state.rootBgColor);
  const handleBgColorChange = (e) => {
    const color = e.target.value;
    dispatch(SetrootBgColor(color));
    document.documentElement.style.setProperty(
      "--mainbg-color",
      e.target.value
    );
  };

  // Body color
  const rootBodyColor = useSelector((state) => state.rootBodyColor);
  const bodyColorChange = (e) => {
    const color = e.target.value;
    dispatch(SetBodyColor(color));
    document.documentElement.style.setProperty("--body-color", e.target.value);
  };

  return (
    <div className="colorCBg text-center">
      <label>
        <h6>Text Color:</h6>
        <input type="color" value={rootColor} onChange={handleColorChange} />
      </label>
      <label>
        <h6>Backgroung Color:</h6>
        <input
          type="color"
          value={rootBgColor}
          onChange={handleBgColorChange}
        />
      </label>
      <label>
        <h6>Body Color:</h6>
        <input type="color" value={rootBodyColor} onChange={bodyColorChange} />
      </label>

      {/* <div style={{ color: rootColor }}>
        <h1>This is a heading</h1>
        <p>This is some text.</p>
      </div> */}
    </div>
  );
};

export default ColorChanger;
