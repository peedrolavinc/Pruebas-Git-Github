import { useState } from "react";

export default function Nein() {
  const [count, setCount] = useState(0);

  function addClick() {
    setCount(count + 1);
  }
  return (
  <>
  <div>
    <button onClick={addClick}>Contador está en {count}</button>
  </div>
  </>
);
}
