import { useRef } from "react";
import useSize from "./useSize";

export default function SizeComponent() {
  const ref = useRef();
  const size = useSize(ref);

  return (
    <section>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </section>
  );
}
