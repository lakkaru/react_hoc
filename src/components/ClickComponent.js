import React from "react";
import withCount from "./withCount";

function ClickComponent({ handleCount, count }) {
  return <button onClick={handleCount}>Click Me {count}</button>;
}
export default withCount(ClickComponent);
