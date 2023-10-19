import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  let message = ''

  switch (router.locale) {
    case 'en':
      message = 'Hello world'
      break;
    case 'fr':
      message = 'Bonjour le monde'
      break;
    default:
      message = 'Hola Mundo'

      break;
  }

  return (
    <>
      <main>
        <Head>
          <meta name="description" content="Clase 4" />
        </Head>
        <h1>
          Clase 4 - {message}
        </h1>
        <Image src={'https://images.ecestaticos.com/MS_qNTuYT9m9XTgfuKiMW1c5x2M=/0x10:599x325/600x315/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F9d7%2F7c0%2F8f2%2F9d77c08f2bd1f812dce6f064ef8da4b7.jpg'} width={500} height={500} alt="meme image" />
        <Link href="/test">
          Ir a Test
        </Link>
        <Link href="/" locale="es">
          🧉
        </Link>
        <Link href="/" locale="en">
          🍔
        </Link>
        <Link href="/" locale="fr">
          🥐
        </Link>
      </main>
    </>
  )
}
