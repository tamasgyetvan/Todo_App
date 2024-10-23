import { ReactNode } from "react";
import styles from "./wrapper.module.css";
type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
