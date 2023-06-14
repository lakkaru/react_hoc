import React from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function SomeLayout() {
  return (
    <div>
      <Counter
        render={(handleCount, count) => (
          <ClickCounter handleCount={handleCount} count={count} />
        )}
      />
      <br/>
      <br/>
      <Counter render={(handleCount, count)=><HoverCounter handleCount={handleCount} count={count}/>}/>
    </div>
  );
}
