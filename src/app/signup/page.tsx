import styles from "@/app/page.module.scss";
import logoImg from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Signup() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da Pizzaria" />

        <section className={styles.login}>
          <h1>Crie seu cadastro</h1>
          <form>
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
