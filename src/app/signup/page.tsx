import styles from "@/app/page.module.scss";
import logoImg from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import "@/services/api";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

const handleRegister = async (formData: FormData) => {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (name === "" || email === "" || password === "") {
    console.log("Preencha todos os campos");
    return;
  }

  try {
    await api.post("/users", {
      name,
      email,
      password,
    });
  } catch (err) {
    console.log("Erro");
    console.log(err);
  }

  redirect("/");
};

function Signup() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da Pizzaria" />

        <section className={styles.login}>
          <h1>Crie seu cadastro</h1>
          <form action={handleRegister}>
            <input
              type="text"
              required
              name="name"
              placeholder="Digite seu nome"
              className={styles.input}
            />
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
            Já possui conta? Faça o login!
          </Link>
        </section>
      </div>
    </>
  );
}

export default Signup;
