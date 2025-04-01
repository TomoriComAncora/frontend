import styles from "./styles.module.scss";
import { RefreshCcw } from "lucide-react";
import { OrderProps } from "@/lib/Order.type";

interface Props{
  orders: OrderProps[];
}

export function Order({orders}: Props) {
  return (
    <main className={styles.container}>
      <section className={styles.containerHeader}>
        <h1>Pedidos recentes</h1>
        <button>
          <RefreshCcw color="#3fffa3" />
        </button>
      </section>

      <section className={styles.listOrders}>
        {orders.map((order)=>(
          <button key={order.id} className={styles.orderItem}>
            <div className={styles.tag}></div>
            <span>Mesa {order.table}</span>
          </button>
        ))}
      </section>
    </main>
  );
}
