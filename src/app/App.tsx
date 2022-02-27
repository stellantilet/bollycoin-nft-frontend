import React from "react";

import { Layout } from "./layout/layout";
import { Hero } from "./component/hero";
import { Mint } from "./component/mint";
import { About } from "./component/about";
import { Team } from "./component/team";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Mint />
        <About />
        <Team />
      </Layout>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
