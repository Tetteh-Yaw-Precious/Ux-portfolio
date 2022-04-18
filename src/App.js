import React from "react";
import Landingpage from "./components/landingPage";
import Work from "./components/work";

//Importing global styles
import Globalstyle from "./css/globalstyles";

//importing animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div>
      <AnimatePresence>
        <Globalstyle />
        <Landingpage />
        <Work />
      </AnimatePresence>
    </div>
  );
};

export default App;
