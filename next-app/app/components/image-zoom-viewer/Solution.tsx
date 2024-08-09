"use client";

import { MouseEvent, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Solution.module.css";

const Solution = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialPosition = useMemo(() => ({ x: "50%", y: "50%" }), []);
  const [position, setPosition] = useState(initialPosition);

  const handleCursor = (event: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      console.log(containerRef.current);

      // find offset of container in window
      const { left, top } = containerRef.current.getBoundingClientRect();
      // remove offset and border width on one side
      const x = event.clientX - left - 2;
      const y = event.clientY - top - 2;
      setPosition({ x: `${x}`, y: `${y}` });
    }
  };

  const handleReset = () => {
    setPosition(initialPosition);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleCursor}
      onMouseLeave={handleReset}
      className={styles.container}
    >
      <Image
        style={{ transformOrigin: `${position.x}px ${position.y}px` }}
        className={`${styles.image}`}
        fill={true}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="laptop on desk"
      />
    </div>
  );
};

export default Solution;
