import React from "react";
import MobileVerification from "../../organisms/MobileVerificatiion";
import { AuthenticationTemplate } from "../../templates/Authentication/index.stories";

export const MobileVerificationPage = () => {
  return <AuthenticationTemplate component={<MobileVerification />} />;
};
