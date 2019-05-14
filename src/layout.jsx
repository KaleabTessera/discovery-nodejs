import React from 'react';
import { Header, Jumbotron, Footer } from 'watson-react-components';
import Demo from './demo';

export default function Layout() {
  return (
    <div>
      <Header
        mainBreadcrumbs="Discovery"
        mainBreadcrumbsUrl="http://www.ibm.com/watson/developercloud/discovery.html"
        subBreadcrumbs="Multichoice"
        subBreadcrumbsUrl="/"
      />
      <h2> Multichoice News Discovery
      </h2>
      <Demo />
      <div className="footer-container--div">
        <Footer />
      </div>
    </div>
  );
}
