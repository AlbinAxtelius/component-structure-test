import { RouteComponentProps } from "@reach/router";
import React from "react";
import List from "../components/List";

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div className="flex">
      <List />
    </div>
  );
};

export default Home;
