import styles from "./styles.module.scss";
import { RefreshCcw } from "lucide-react";

export function Order() {
  return (
    <main className={styles.container}>
      <section className={styles.containerHeader}>
        <h1>Pedidos recentes</h1>
        <button>
          <RefreshCcw color="#3fffa3" />
        </button>
      </section>

      <section className={styles.listOrders}>
        <button className={styles.orderItem}>
          <div className={styles.tag}></div>
          <span>Mesa 11</span>
        </button>
        <button className={styles.orderItem}>
          <div className={styles.tag}></div>
          <span>Mesa 12</span>
        </button>
      </section>
    </main>
  );
}
