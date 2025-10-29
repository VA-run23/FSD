import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  // 🟢 Mounting phase (componentDidMount)
  useEffect(() => {
    console.log("✅ Component Mounted (componentDidMount)");

    // 🧹 Unmounting phase (componentWillUnmount)
    return () => {
      console.log("❌ Component Unmounted (componentWillUnmount)");
    };
  }, []);

  // 🔧 useLayoutEffect (runs before paint, like componentWillMount / componentDidMount)
  useLayoutEffect(() => {
    console.log("🔧 useLayoutEffect: Before browser paints UI");
  }, []);

  // 🔄 Updating phase (componentDidUpdate)
  useEffect(() => {
    if (renderCount.current > 0) {
      console.log("🔄 Component Updated (componentDidUpdate)");
    }
    renderCount.current += 1;
  });

  // 🎯 Watching specific state change (like shouldComponentUpdate for `count`)
  useEffect(() => {
    console.log(`🎯 Count changed to: ${count}`);

    // 🧹 Cleanup before next re-render (like componentWillUnmount for this effect)
    return () => {
      console.log("🧹 Cleanup before next count update");
    };
  }, [count]);

  return (
    <div style={{ border: "2px solid #333", padding: "20px", margin: "10px" }}>
      <h2>Counter Lifecycle Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>➕ Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>➖ Decrement</button>
    </div>
  );
};

export default Counter;