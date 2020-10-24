import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
//design structure for ticket

export function HeaderContainer({ children }) {
  return (
    <div>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="NETFLIX" src={logo} />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in </Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header> 
    </div>
  );
}
