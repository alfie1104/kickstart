import React from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

const RequestRow = ({ request, address, id, approversCount }) => {
  const { Row, Cell } = Table;
  const { description, value, recipient, approvalCount } = request;

  const onApprove = async (event) => {
    event.preventDefault();

    const campaign = Campaign(address);
    const accounts = await web3.eth.getAccounts();

    await campaign.methods.approveRequest(id).send({
      from: accounts[0],
    });
  };

  const onFinalize = (event) => {
    event.preventDefault();

    console.log("Finalize");
  };

  return (
    <Row>
      <Cell>{id}</Cell>
      <Cell>{description}</Cell>
      <Cell>{web3.utils.fromWei(value, "ether")}</Cell>
      <Cell>{recipient}</Cell>
      <Cell>
        {approvalCount}/{approversCount}
      </Cell>
      <Cell>
        <Button color="green" basic onClick={onApprove}>
          Approve
        </Button>
      </Cell>
      <Cell>
        <Button color="red" basic onClick={onFinalize}>
          Finalize
        </Button>
      </Cell>
    </Row>
  );
};

export default RequestRow;
