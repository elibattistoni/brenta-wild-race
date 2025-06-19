import Heading from "../components/shared/Heading";
import PageContainer from "../components/shared/PageContainer";
import SponsorsList from "../components/sponsors/SponsorsList";

const SponsorsPage = () => {
  return (
    <>
      <Heading title="2024" subtitle="SPONSOR" />
      <PageContainer>
        <SponsorsList />
      </PageContainer>
    </>
  );
};

export default SponsorsPage;
