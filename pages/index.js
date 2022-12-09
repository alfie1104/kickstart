import Link from "next/link";
import React from "react";
import { Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";
import factory from "../ethereum/factory";

function CampaignIndex(props) {
  const renderCampaigns = () => {
    const items = props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link href={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link href={"/campaigns/new"}>
          <Button
            floated="right"
            content="Create Campaign"
            icon="add circle"
            primary
          />
        </Link>
        {renderCampaigns()}
      </div>
    </Layout>
  );
}

CampaignIndex.getInitialProps = async (ctx) => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { campaigns };
};

export default CampaignIndex;
