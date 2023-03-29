import React from "react";
import {
  Box,
  SubscribeText,
  Subscribe,
  SubscribeBtn,
  Container,
  CurrencyList,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
  
const Footer = () => {
  return (
    <Box>
      <SubscribeText> Get 10% off your first order when you subscribe to our Newsletter.
      </SubscribeText>
      <Subscribe type="email" placeholder="Enter your email here"></Subscribe>
      <SubscribeBtn>Subscribe</SubscribeBtn>
      <Container>
        <Row>
          <Column>
            <Heading className="logo" style={{
              color: "black",
              fontWeight: "500",
            }}>P-1 <br></br> Designs</Heading>
            <CurrencyList name="currency" id="currency">
                <option value="gbp">GBP</option>
                <option value="gbp">USD</option>
                <option value="gbp">EUR</option>
             </CurrencyList>
          </Column>
          <Column>
            <Heading>Resources</Heading>
            <FooterLink href="#">Return Policy</FooterLink>
            <FooterLink href="#">Orders</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Our Story</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
          </Column>
          <Column>
            <Heading>Connect</Heading>
            <FooterLink href="https://www.facebook.com/" target={"_blank"}>
              <i className="fab fa-facebook-f"></i>
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/" target={"_blank"}>
              <i className="fab fa-instagram"></i>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
            </FooterLink>
            <FooterLink href="https://twitter.com/home" target={"_blank"}>
              <i className="fab fa-twitter"></i>
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
            </FooterLink>
            <FooterLink href="https://github.com/" target={"_blank"}>
              <i className="fab fa-github"></i>
                <span style={{ marginLeft: "10px" }}>
                  GitHub
                </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;