import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "/public/logo.svg";
import { LogOut } from "lucide-react";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image
            alt="Logo Pizzaria"
            src={Logo}
            width={180}
            height={60}
            quality={100}
            priority={true}
          />
        </Link>

        <nav>
          <Link href="/dashboard/category">Categoria</Link>
          <Link href="/dashboard/product">Produto</Link>
          <form>
            <button type="submit">
              <LogOut color="#fff" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
