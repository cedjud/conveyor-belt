import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import styles from "./Item.module.css";

const duration = 10;

export const Item = ({
  position,
  cols,
  visibleColumns,
  itemWidth,
  itemHeight,
}: {
  position: { x: number; y: number };
  cols: number;
  visibleColumns: number;
  rows: number;
  itemWidth: number;
  itemHeight: number;
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e: PointerEvent) => {
    const { x, y, clientX, clientY } = e;
    console.log("x: ", x, "y: ", y, "clientX", clientX, "clientY", clientY);
  };

  return (
    <motion.div
      style={
        {
          // "--child-top": `${Math.floor(Math.random() * itemHeight)}px`,
          // "--child-left": `${Math.floor(Math.random() * itemWidth)}px`,
          "--color": `hsl(${Math.floor(Math.random() * 360)} 50% 50%)`,
        } as React.CSSProperties
      }
      className={styles.wrapper}
      initial={{
        x: itemWidth * visibleColumns,
        y: position.y * itemHeight,
      }}
      animate={{
        x: -itemWidth,
      }}
      transition={{
        duration,
        type: "tween",
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: position.x * (duration / (visibleColumns + 1)),
        repeatDelay:
          (duration / (visibleColumns + 1)) * (cols - visibleColumns - 1),
      }}
    >
      <motion.pre
        dragSnapToOrigin
        drag
        onDrag={handleDrag}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className={clsx(isDragging && styles.dragging)}
      >
        {position.x} {position.y}
      </motion.pre>
    </motion.div>
  );
};
