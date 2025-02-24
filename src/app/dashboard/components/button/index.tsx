"use client"
import styles from "./styles.module.scss";
import { useFormStatus } from "react-dom"

interface PropsButton {
  name: string;
}

export function Button({ name }: PropsButton) {
    const {pending} = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.button}>
      {pending ? "Carregando..." : name}
    </button>
  );
}
