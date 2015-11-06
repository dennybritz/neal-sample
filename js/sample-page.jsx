import React from "react";
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";

const brandName = "SamplePage";
const brand = <span>{brandName}</span>;

const onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500,
});

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    1337 Market Street, Suite 1337<br/>
    San Francisco, CA 94103<br/>
    +1 (123) 456-7890
  </address>
);

const pricingPlan1 = {
  name: "Personal",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "$99",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false,
  },
  onClick: onSignup,
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extrea Feature 1": true,
  }),
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Extrea Feature 2": true,
  }),
});

const sampleCode = `<Page>
  <Hero><h1>{ /* Content */ }</h1></Hero>
  <Section heading="Hello!">
    <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
  </Section>
  <Section>
    <Team>
      <TeamMember name="Link" title="Co-founder" imageUrl="img/link.jpg"> { /* Description */ } </TeamMember>
      <TeamMember name="Yoshi" title="Co-founder" imageUrl="img/yoshi.jpg"> { /* Description */ } </TeamMember>
    </Team>
  </Section>
  <Section>
    <PricingTable>
      <PricingPlan {... pricingPlan1} />
      <PricingPlan {... pricingPlan2} />
      <PricingPlan {... pricingPlan3} />
    </PricingTable>
    <SignupInline onSubmit={onSignupCallback}/>
  </Section>
</Page>
`;


export default (props) => {
  return (
    <Page>

      <Navbar brand={brand}>
        <NavItem><Link to="Home" className="nav-link">Home</Link></NavItem>
        <NavItem dropdown={true}>
          <DropdownToggle>Github</DropdownToggle>
          <DropdownMenu>
            <a href="https://github.com/dennybritz/neal-react" className="dropdown-item" target="_blank">
              Neal React
            </a>
            <a href="https://github.com/dennybritz/neal-sample" className="dropdown-item" target="_blank">
              Sample Page
            </a>
          </DropdownMenu>
        </NavItem>
      </Navbar>

      <Hero backgroundImage="img/hero-bg-01.jpg"
        className="text-center">
        <h1 className="display-1"> Declarative Landing Pages for React.js </h1>
        <p className="lead">Build a beautiful landing page in less than an hour.
          No more redundant code. Easily extensible.</p>
        <p>
          <a href="https://github.com/dennybritz/neal-react" target="_blank" className="btn btn-white">
            Get it on Github
          </a>
        </p>
      </Hero>

      <Section className="subhero">
        <ImageList centered>
          <ImageListItem src="img/press/cnn-logo.png" url="http://www.cnn.com"/>
          <ImageListItem src="img/press/forbes-logo.png" url="http://forbes.com/"/>
          <ImageListItem src="img/press/theverge-logo.png" url="http://www.theverge.com/"/>
          <ImageListItem src="img/press/techcrunch-logo.jpg" url="http://techcrunch.com/"/>
        </ImageList>
      </Section>

      <Section className="nopad-bottom">
        <Code lang="jsx" block>{sampleCode}</Code>
      </Section>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <p className="lead">Batteries Included</p>
            <p>Neal is based on <a href="http://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a> and ships with navbar, hero, footer, sections, horizontal split, pricing tables, customer quotes and other components you need for a landing page. No more repetitive coding! Oh, and it's easy to extend.</p>
          </div>
          <div>
            <p className="lead">Third-Party Integrations</p>
            <p>External integrations like &nbsp;
              <a href="http://www.google.com/analytics/">Google Analytics</a>,&nbsp;
              <a href="https://segment.com/">Segment</a>,&nbsp;
              <a href="https://stripe.com/">Stripe</a> and&nbsp;
              <a href="http://typeform.com">Typeform</a> are included.
              No more copying & pasting integration code, all you need is your API keys. We automatically track events when visitors navigate to different parts of your page.</p>
          </div>
          <div>
            <p className="lead">Serverless Deployment</p>
            <p>Because you are relying on react.js and third-party integration you don't need a server to host your landing page. Simply upload it to an Amazon S3 bucket, enable website hosting, and it's ready to go!</p>
          </div>
        </HorizontalSplit>
      </Section>

      <Section heading="Inline and Modal Signup components" className="gray">
        <p>Use these components to capture user data, display a payment dialog and/or send them to your own backend for handling. Of course, you could also just use a Typeform to collect user emails. </p>
        <SignupInline onSubmit={onSignup}/>
        <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
        <p>
          <a className="btn btn-primary btn-ghost" data-toggle="modal" data-target="#signup-modal">Show Signup modal</a>
        </p>
      </Section>

      <Section>
        <PricingTable>
          <PricingPlan {... pricingPlan1} />
          <PricingPlan {... pricingPlan2} />
          <PricingPlan {... pricingPlan3} />
        </PricingTable>
      </Section>

      <Section>
        <CustomerQuotes>
          <CustomerQuote name="Paul Graham" title="YC" imageUrl="img/people/paulgraham.jpg">
            <p>What I tell founders is not to sweat the business model too much at first. The most important task at first is to build something people want. If you don't do that, it won't matter how clever your business model is.</p>
          </CustomerQuote>
          <CustomerQuote name="Elon Musk" imageUrl="img/people/elonmusk.jpg">
            <p>I came to the conclusion that we should aspire to increase the scope and scale of human consciousness in order to better understand what questions to ask. Really, the only thing that makes sense is to strive for greater collective enlightenment.</p>
          </CustomerQuote>
          <CustomerQuote name="Reid Hoffman" title="Linkedin" imageUrl="img/people/reidhoffman.jpg">
            <p>If you are not embarrassed by the first version of your product, you've launched too late.</p>
          </CustomerQuote>
        </CustomerQuotes>
      </Section>

      <Section>
        <Team>
          <TeamMember name="Member 1" title="Co-founder" imageUrl="img/people/grumpycat.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
          <TeamMember name="Member 2" title="Co-founder" imageUrl="img/people/boo.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
          <TeamMember name="Member 3" title="Co-founder" imageUrl="img/people/panda.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
        </Team>
      </Section>

      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com"
        twitterUrl="http://www.twitter.com/dennybritz"
        githubUrl="https://github.com/dennybritz/neal-react"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
