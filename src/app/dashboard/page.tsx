import { Order } from "./components/orders";
import { api } from "@/services/api";
import { getCookiesServer } from "@/lib/cookieServer";
import { OrderProps } from "@/lib/Order.type";

async function getOrders(): Promise<OrderProps[] | []> {
  try {
    const token = await getCookiesServer();
    const response = await api.get("/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data || [];
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function Dashboard() {
  const orders = await getOrders();
  console.log(orders);
  return (
    <div>
      <Order orders={orders} />
    </div>
  );
}

export default Dashboard;
