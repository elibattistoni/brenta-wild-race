import { useParams } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import { Text } from "@mantine/core";
import PageContainer from "../../components/shared/PageContainer";
import ErrorPage from "../ErrorPage";

const EditionDetailsPage = () => {
  const { year } = useParams();

  if (year === "2017" || year === "2018" || year === "2019") {
    return (
      <>
        <Heading title={year} subtitle="EDIZIONI" />
        <PageContainer>
          <Text size="xl">Pagina in costruzione. Stay Tuned!</Text>
        </PageContainer>
      </>
    );
  } else {
    return <ErrorPage />;
  }
};

export default EditionDetailsPage;
