import React from "react";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import Layout from "../../../../components/Layout";

const Requests = (props) => {
  return (
    <Layout>
      <h3>Requests</h3>
      <Link href={`/campaigns/${props.address}/requests/new`}>
        <Button primary>Add Request</Button>
      </Link>
    </Layout>
  );
};

Requests.getInitialProps = (ctx) => {
  const { address } = ctx.query;

  return { address };
};

export default Requests;
