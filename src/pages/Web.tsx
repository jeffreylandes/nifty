import Web3Provider from "web3-react";
import { useState } from "react";
import Web3 from "web3";

const dummyAddress = "0x04477f4282dde43e2fd4d22f7130336551aac7aa";
const apiKey = process.env.REACT_APP_ALCHEMY_KEY;
const url = `https://eth-ropsten.alchemyapi.io/v2/${apiKey}`;
const web3 = new Web3(url);

export function Web() {
  const [eth, setEth] = useState<string | null>(null);
  const onClick = () => {
    if (!eth) {
      web3.eth.getBalance(dummyAddress).then((amount) => setEth(amount));
    }
  };
  return (
    <>
      <Web3Provider connectors={{}} libraryName={"web3.js"}>
        <button onClick={onClick}>Show Ether Balance</button>
        {eth && <p>`You have ${eth} in your account.</p>}
      </Web3Provider>
    </>
  );
}
