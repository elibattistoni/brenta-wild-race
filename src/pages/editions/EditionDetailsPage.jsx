import { useParams } from "react-router-dom";

const EditionDetailsPage = () => {
  const { year } = useParams();
  return <div>EditionDetailsPage -- {year} -- under construction</div>;
};

export default EditionDetailsPage;
