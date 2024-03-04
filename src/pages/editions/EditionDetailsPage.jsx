import { useParams } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import { Container, Text } from "@mantine/core";

const EditionDetailsPage = () => {
  const { year } = useParams();

  if (year === "2017" || year === "2018" || year === "2019") {
    return (
      <>
        <Heading title={year} subtitle="EDIZIONI" />
        <Container fluid mt="xl">
          <Text size="xl">Pagina in costruzione. Stay Tuned!</Text>
        </Container>
      </>
    );
  } else {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
};

export default EditionDetailsPage;
