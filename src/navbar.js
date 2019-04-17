import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="Align">Align</Link>
      <Link to="ChangeColor">ChangeColor</Link>
      <Link to="Clock">Clock</Link>
      <Link to="Counter">Counter</Link>
      <Link to="FontSizer">FontSizer</Link>
      <Link to="Toggle">Toggle</Link>
    </div>
  );
}
