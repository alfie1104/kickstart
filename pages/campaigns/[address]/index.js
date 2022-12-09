import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";

const CampaignShow = (props) => {
  const router = useRouter();

  const { address } = router.query;

  console.log(props.summary);
  return (
    <Layout>
      <h3>Campaign Show</h3>
    </Layout>
  );
};

CampaignShow.getInitialProps = async (ctx) => {
  const campaign = Campaign(ctx.query.address);
  const summary = await campaign.methods.getSummary().call();

  return { summary };
};

export default CampaignShow;
