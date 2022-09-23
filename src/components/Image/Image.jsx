import React from "react";
import styles from "./Image.module.css";

export const Image = ({ url, alt = "", isRounded = false }) => {
  return (
    <div
      className={styles["image"] + (isRounded ? " " + styles["--rounded"] : "")}
    >
      <img src={url} alt={alt} />
    </div>
  );
};
