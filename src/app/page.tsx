import styles from "@/app/page.module.scss";
import logoImg from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  const handleLogin = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "" || password === "") {
      console.log("Preencha todos os campos");
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      if(!response.data.token){
        return;
      }

      const expressTime = 60 * 60 * 24 * 30 * 1000;
      const cookiesStore = await cookies();
      cookiesStore.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
      })

      console.log(response.data);
    } catch (err) {
      console.log(err);
      return;
    }

    redirect("/dashboard");
  };
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da Pizzaria" />

        <section className={styles.login}>
          <form action={handleLogin}>
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu email"
              className={styles.input}
            />
            <input
              type="password"
              required
              name="password"
              placeholder="******"
              className={styles.input}
            />

            <button type="submit">Acessar</button>
          </form>

          <Link href={"/signup"} className={styles.text}>
            Não possui conta? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  );
}
