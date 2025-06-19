import Heading from "../components/shared/Heading";
import HighlightedText from "../components/shared/HighlightedText";
import PageContainer from "../components/shared/PageContainer";
import ParagraphText from "../components/shared/ParagraphText";
import SponsorsList from "../components/sponsors/SponsorsList";

const SponsorsPage = () => {
  return (
    <>
      <Heading title="2024" subtitle="SPONSOR" />
      <PageContainer>
        <ParagraphText mb="sm">
          Il <HighlightedText text="Gruppo Sportivo K40" /> ringrazia di cuore
          tutti gli <HighlightedText text="sponsor" />.
        </ParagraphText>
        <ParagraphText mb="xl">
          Senza il vostro prezioso contributo la nostra manifestazione non
          potrebbe esistere.
        </ParagraphText>
        <SponsorsList />
      </PageContainer>
    </>
  );
};

export default SponsorsPage;
