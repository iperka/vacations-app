import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

const DashboardPage = () => {
  return <div>Dashboard</div>;
};

export default withAuthenticationRequired(DashboardPage, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
