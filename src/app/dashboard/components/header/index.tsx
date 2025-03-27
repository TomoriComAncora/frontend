"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "/public/logo.svg";
import { LogOut } from "lucide-react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Header() {
  const router = useRouter();

  async function handleLogout() {
    deleteCookie("session", { path: "/" });
    router.replace("/");
    toast.success("Logout feito com sucesso!");
  }

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
          <form action={handleLogout}>
            <button type="submit">
              <LogOut color="#fff" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
