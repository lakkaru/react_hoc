import React from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";

export default function SomeLayout() {
  return (
    <div>
      <Counter
        render={(handleCount, count) => (
          <ClickCounter handleCount={handleCount} count={count} />
        )}
      />
    </div>
  );
}
