import React from "react";
import { Helmet } from "react-helmet";
import CowContent from './cowContent';
function InnerCowContent() {
  return (
    // use for router
    <div>
        <Helmet>
            <title>cowcontent</title>
        </Helmet>
        <CowContent />
    </div>
  );
}
export default InnerCowContent;