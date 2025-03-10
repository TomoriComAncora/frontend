"use client";
import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import { Upload } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/dashboard/components/button";

export function Form() {
  const [image, setImage] = useState<File>();
  const [prevImage, setPreveImage] = useState("");
  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      console.log(image);
      if (image.type !== "image/jpeg" && image.type !== "image/png") {
        console.log("Formato inválido!");
      }
      setImage(image);
      setPreveImage(URL.createObjectURL(image));
    }
  }

  return (
    <main className={styles.container}>
      <h1>Novo produto</h1>

      <form className={styles.form}>
        <label className={styles.labelImage}>
          <span>
            <Upload size={30} color="#fff" />
          </span>
          <input
            type="file"
            accept="image/png image/jpeg"
            required
            onChange={handleFile}
          />

          {prevImage && (
            <Image
              alt="Imagem de preview"
              src={prevImage}
              className={styles.preview}
              fill={true}
              quality={100}
              priority={true}
            />
          )}
        </label>

        <select name="category">
          <option value={1} key={1}>
            Pizzas
          </option>
          <option value={1} key={1}>
            Massas
          </option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Digite o nome do produto"
          required
          className={styles.input}
        />

        <input
          type="text"
          name="price"
          placeholder="Digite o preço do produto"
          required
          className={styles.input}
        />

        <textarea
          name="description"
          placeholder="Digite a descrição do produto..."
          required
          className={styles.input}
        ></textarea>
        <Button name="Cadastrar nova categoria" />
      </form>
    </main>
  );
}
