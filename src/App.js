import React, { useState } from "react";
// import Work from "./components/work";
import Contact from "./components/Contact";
import NewWork from "./components/NewWork";
import Navbar from "./components/Nav";
import HeroSection from "./components/heroSection";
import { NavLinksContext } from "./contexts/NavlinksContext";
// import Work from "./components/work";

//Importing global styles
import Globalstyle from "./css/globalstyles";

//importing animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  //setting state for all navitems
  const [homeStatus, setHomeStatus] = useState(false);
  const [workStatus, setWorkStatus] = useState(false);
  const [contactStatus, setContactStatus] = useState(false);
  const [navStatus, setNavStatus] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter>
      <NavLinksContext.Provider
        value={{
          homeStatus,
          setHomeStatus,
          workStatus,
          setWorkStatus,
          contactStatus,
          setContactStatus,
          setNavStatus,
          navStatus,
        }}
      >
        <div>
          <Globalstyle />
          <Navbar />
          <HeroSection />
          {/* <Work /> */}
          <NewWork />
          <Contact />
        </div>
      </NavLinksContext.Provider>
    </AnimatePresence>
  );
};

export default App;
