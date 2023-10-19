import { GetStaticPropsContext } from "next";
import Link from "next/link";

export default function Test(props: any) {
  return (
    <>
      <main>
        <h1>
          Clase 4 - /test
        </h1>
        <Link href="/">
          Volver a home
        </Link>
      </main>
    </>
  )
}

Test.getLayout = function getLayout(page: any) {
  return (
    <>
      Test Layout top
      {page}
      Test Layout bottom
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  const results = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      results,
    },
  }
}