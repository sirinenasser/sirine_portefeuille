import { ChakraProvider } from "@chakra-ui/react";
import { Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";

const infuraId = process.env.INFURA_ID;
const chains = defaultChains;
const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider autoConnect connectors={connectors}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
