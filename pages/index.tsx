import { GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Post from "../components/Post";
import { Character, GetCharacterResults } from "../types";

const Home: NextPage<{ characters: GetCharacterResults }> = ({
  characters,
}) => {
  const character = characters.results;
  return (
    <main>
      <Head>
        <title>Blog Site</title>
        <meta name="description" content="Simple RickyMorty API Blog Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex gap-5 justify-center mt-10 mb-10 flex-wrap">
        <div className="flex flex-col gap-5 w-5/12 sm:flex-initial">
          {character.map((chara) => {
            return <Post key={chara.id} {...chara}/>;
          })}
        </div>
        <div className="border border-solid border-slate-300 h-max text-black w-3/12 rounded-lg">
          <div className="border-b border-solid w-full bg-gray-100 px-5 py-2 rounded-t-lg">
            Categories
          </div>
          <div className="px-5 py-3">
            {character.map((chara) => {
              return (
                <div key={chara.id}>
                  <Link href={chara.name.toLowerCase().split(' ').join('-')}><a>{chara.name}</a></Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data: GetCharacterResults = await response.json();

  return {
    props: {
      characters: data,
    },
  };
}

export default Home;
