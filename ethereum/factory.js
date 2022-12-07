import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x510902F92A0952970aeA2B26FA8dfAa4Fc4B46BD"
);
export default instance;
