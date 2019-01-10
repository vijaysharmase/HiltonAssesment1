import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Menu" />
    <List>
      <ListItem link="/" title="Home" view="#main-view" panelClose></ListItem>
      <ListItem link="/hotel/" title="Hotel" view="#main-view" panelClose></ListItem>
      <ListItem link="/about/" title="About" view="#main-view" panelClose></ListItem>
      <ListItem link="/contact/" title="Contact" view="#main-view" panelClose></ListItem>
    </List>
  </Page>
);
