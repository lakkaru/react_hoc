import React, { useState } from "react";

export default function withCount(WrapperComponent) {
  function WithCount() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
      setCount(count + 1);
    };
    return <WrapperComponent handleCount={handleCount} count={count} />;
  }
  return WithCount;
}
