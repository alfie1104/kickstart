import React from "react";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import Layout from "../../../../components/Layout";
import Campaign from "../../../../ethereum/campaign";

const Requests = (props) => {
  console.log(props.requests);

  return (
    <Layout>
      <h3>Requests</h3>
      <Link href={`/campaigns/${props.address}/requests/new`}>
        <Button primary floated="right">
          Add Request
        </Button>
      </Link>
    </Layout>
  );
};

Requests.getInitialProps = async (ctx) => {
  const { address } = ctx.query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  return { address, requests, requestCount };
};

export default Requests;
