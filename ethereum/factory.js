import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x967079A89F3Fe52B51b2EA93C2a4c3E1FDc57a7E"
);
export default instance;
