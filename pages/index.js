import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navigation, Accueil } from "../component";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Sirine Portefeuille</title>
      </Head>

      <Navigation/>

      <Accueil/>

    </Box>
  );
}
