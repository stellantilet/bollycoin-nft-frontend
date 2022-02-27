import React from 'react';

import { Layout } from "./layout/layout";
import { Hero } from "./component/hero";
import { Mint } from "./component/mint";
import { About } from "./component/about";
import { Team } from "./component/team";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero/>
        <Mint/>
        <About/>
        <Team/>
      </Layout>
    </div>
  );
}

export default App;
