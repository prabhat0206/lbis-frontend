import type { NextPage } from "next";
import { HomeCom } from "../components/Home";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lord Buddha International School | GAYA</title>
      </Head>
      <HomeCom />
    </>
  );
};

export default Home;
