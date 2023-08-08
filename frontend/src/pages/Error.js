import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <PageContent title="An error occurred.">Something went wrong!</PageContent>
  );
};
export default ErrorPage;
