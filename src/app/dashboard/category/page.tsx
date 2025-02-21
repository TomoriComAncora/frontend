import Button from "../components/buttom";
import styles from "./styles.module.scss";

export default function Category() {
  return (
    <main className={styles.container}>
      <h1>Nova categoria</h1>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nome da categoria. Ex: Bebidas"
          required
          className={styles.input}
        />
        <Button/>
      </form>
    </main>
  );
}
