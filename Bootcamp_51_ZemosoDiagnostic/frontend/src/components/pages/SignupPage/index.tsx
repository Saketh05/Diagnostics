import React from "react";
import SignUp from "../../organisms/SignUp";
import { AuthenticationTemplate } from "../../templates/Authentication/index.stories";

export const SignUpPage = () => {
  return <AuthenticationTemplate component={<SignUp />} />;
};