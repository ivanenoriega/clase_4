import Image from "next/image";
import Link from "next/link";

export default function Test(props: any) {
  return (
    <>
      <main>
        <h1>
          Clase 4 - /{props.pokemon.name}
        </h1>
        <Image src={props.pokemon.sprites.front_default} width={100} height={100} alt="pokemon sprite" />
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

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  const results = await res.json()

  return {
    paths: results.results.map((result: any) => ({
      params: { name: result.name },
    })),
    fallback: 'blocking'
  }
}

export async function getStaticProps(props: { params: { name: string } }) {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.name}`)
  const pokemon = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pokemon,
      revalidate: 100,
    },
  }
}