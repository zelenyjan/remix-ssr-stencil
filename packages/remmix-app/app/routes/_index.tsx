import { useState } from 'react'
import type { MetaFunction } from "@remix-run/node";
import { GreenButton, GreenInput } from '@zelenyjan/stencil-green-react';

// defineCustomElements();

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  const [count, setCount] = useState(0)
  const [label, setLabel] = useState("Label")

  const changeLabel = (e: any) => {
    setLabel(e.target.value)
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <GreenButton label={'Button ' + count.toString()} onGreenClick={() => setCount((prev) => prev + 1)}></GreenButton>
      <hr />
      <h1>{label}</h1>
      <GreenInput value={label} onValueChange={changeLabel}></GreenInput>
    </div>
  );
}
