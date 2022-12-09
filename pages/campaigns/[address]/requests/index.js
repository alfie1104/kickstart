import React from "react";
import Link from "next/link";
import { Button, Table } from "semantic-ui-react";
import Layout from "../../../../components/Layout";
import Campaign from "../../../../ethereum/campaign";
import RequestRow from "../../../../components/RequestRow";

const Requests = (props) => {
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRows = () => {
    return props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          request={request}
          address={props.address}
          approversCount={props.approversCount}
          id={index}
        />
      );
    });
  };

  return (
    <Layout>
      <h3>Requests</h3>
      <Link href={`/campaigns/${props.address}/requests/new`}>
        <Button primary floated="right" style={{ marginBottom: 10 }}>
          Add Request
        </Button>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>
      <div>Found {props.requestCount} requests.</div>
    </Layout>
  );
};

Requests.getInitialProps = async (ctx) => {
  const { address } = ctx.query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  return { address, requests, requestCount, approversCount };
};

export default Requests;
