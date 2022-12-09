import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8d9571EfB8095ca53bDD2e32261259dc57027f20"
);
export default instance;
