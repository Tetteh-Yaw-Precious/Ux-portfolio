import React, { useState } from "react";
import Landingpage from "./components/landingPage";
import Work from "./components/work";
import Contact from "./components/Contact";
import { NavLinksContext } from "./contexts/NavlinksContext";

//Importing global styles
import Globalstyle from "./css/globalstyles";

//importing animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  //setting state for all navitems
  const [homeStatus, setHomeStatus] = useState(false);
  const [workStatus, setWorkStatus] = useState(false);
  const [contactStatus, setContactStatus] = useState(false);
  const [navStatus, setNavStatus] = useState(false)

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
        }}
      >
        <div>
          <Globalstyle />
          <Landingpage
            homeStatus={homeStatus}
            setHomeStatus={setHomeStatus}
          />
          <Work />
          <Contact/>
        </div>
      </NavLinksContext.Provider>
    </AnimatePresence>
  );
};

export default App;
