import React, { useContext } from "react";
import { DynamicThemeContext } from "./DynamicThemeContext";

const ThemeSelector = () => {
  const { changeTheme } = useContext(DynamicThemeContext);

  return (
    <div>
      <h2>Selecione um Tema:</h2>
      <div className="buttons">
        <button onClick={() => changeTheme("light")}>Light</button>
        <button onClick={() => changeTheme("dark")}>Dark</button>
        <button onClick={() => changeTheme("blue")}>Blue</button>
      </div>
    </div>
  );
};

export default ThemeSelector;
