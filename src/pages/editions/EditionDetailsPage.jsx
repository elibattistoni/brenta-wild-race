import { useParams } from "react-router-dom";

const EditionDetailsPage = () => {
  const { year } = useParams();

  if (year === "2017" || year === "2018" || year === "2019") {
    return <div>EditionDetailsPage -- {year} -- under construction</div>;
  } else {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
};

export default EditionDetailsPage;
