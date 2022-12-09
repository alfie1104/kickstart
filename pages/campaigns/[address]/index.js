import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

const CampaignShow = (props) => {
  const router = useRouter();

  const { address } = router.query;
  return (
    <Layout>
      <h3>Campaign Show</h3>
    </Layout>
  );
};

export default CampaignShow;
