import React, { useEffect } from "react";
import factory from "../ethereum/factory";

export default () => {
  useEffect(async () => {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    console.log(campaigns);
  }, []);

  return <h1>This is the campaign list page!!</h1>;
};

// class CampaignIndex extends React.Component {
//   async componentDidMount(){
//     const campaigns = await factory.methods.getDeployedCampaigns().call();

//     console.log(campaigns);
//   }

//   render(){
//     return <div>Campaign Index!</div>
//   }
// }

// export default CampaignIndex;
