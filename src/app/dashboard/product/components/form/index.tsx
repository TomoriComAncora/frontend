"use client";
import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import { Upload } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/dashboard/components/button";
import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookieClient";
import { toast } from "sonner";

interface categoryProps {
  id: string;
  name: string;
}

interface props {
  categories: categoryProps[];
}

export function Form({ categories }: props) {
  const [image, setImage] = useState<File>();
  const [prevImage, setPreveImage] = useState("");

  async function handleRegisterProduct(formData: FormData) {
    const categoryId = formData.get("category");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");

    if (!categoryId || !name || !price || !description || !image) {
      toast.warning("Preencha todos os campos");
      return;
    }

    const data = new FormData();

    data.append("name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("category_id", categories[Number(categoryId)].id);
    data.append("file", image);

    const token = getCookieClient();

    await api.post("/product", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((err)=>{
      console.log(err);
      toast.error("Erro ao cadastrar produto!");
      return;
    });

    toast.success("Produto cadastrado com sucesso!");
  }

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      if (image.type !== "image/jpeg" && image.type !== "image/png") {
        toast.warning("Formato inválido!");
        return;
      }
      setImage(image);
      setPreveImage(URL.createObjectURL(image));
    }
  }

  return (
    <main className={styles.container}>
      <h1>Novo produto</h1>

      <form className={styles.form} action={handleRegisterProduct}>
        <label className={styles.labelImage}>
          <span>
            <Upload size={30} color="#fff" />
          </span>
          <input
            type="file"
            accept="image/png, image/jpeg"
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
          {categories.map((category, index) => (
            <option key={category.id} value={index}>
              {category.name}
            </option>
          ))}
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
