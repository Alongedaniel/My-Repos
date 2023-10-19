import React from "react";
import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <div className="wrapper ">
      <Helmet>
        <title>Error Page</title>
        <meta
          name="description"
          content="This is the error page for handling any possible errors during an api call"
        />
        <link rel="canonical" href="/error" />
      </Helmet>

      <h2>Error 404: Page Not Found!</h2>
    </div>
  );
}
