import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact Us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link hreff="#">FAQ</Footer.Link>
          <Footer.Link hreff="#">Investor Relations</Footer.Link>
          <Footer.Link hreff="#">Ways to Watch</Footer.Link>
          <Footer.Link hreff="#">Corporate Information</Footer.Link>
          <Footer.Link hreff="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link hreff="#">Help Center</Footer.Link>
          <Footer.Link hreff="#">Jobs</Footer.Link>
          <Footer.Link hreff="#">Terms of Use</Footer.Link>
          <Footer.Link hreff="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link hreff="#">Account</Footer.Link>
          <Footer.Link hreff="#">Redeem Gift Cards</Footer.Link>
          <Footer.Link hreff="#">Privacy</Footer.Link>
          <Footer.Link hreff="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link hreff="#">Media Center</Footer.Link>
          <Footer.Link hreff="#">Buy Gift Cards</Footer.Link>
          <Footer.Link hreff="#">Cookie Preferencess</Footer.Link>
          <Footer.Link hreff="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break></Footer.Break>
      <Footer.Text>Netflix USA</Footer.Text>
    </Footer>
  );
}
