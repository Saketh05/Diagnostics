import React from "react";
import { recentList } from "../../../Constants";
import Header from "../../organisms/Header";
import ReportsPageContent from "../../organisms/ReportsPageContent";
import TemplateHomePage from "../../templates/HomePageTemplate";

const ReportsPage = () => {
  return (
    <TemplateHomePage
      header={<Header />}
      content={<ReportsPageContent recentList={recentList}/>}
    />
  );
};

export default ReportsPage;
