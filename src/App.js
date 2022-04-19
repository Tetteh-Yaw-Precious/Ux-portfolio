import React, { useState } from "react";
import Landingpage from "./components/landingPage";
import Work from "./components/work";
import Contact from "./components/Contact";

//Importing global styles
import Globalstyle from "./css/globalstyles";

//importing animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  //setting state for all navitems
  const [homeStatus, setHomeStatus] = useState(false);
  const [workStatus, setWorkStatus] = useState(false);
  const [contactStatus, setContactStatus] = useState(false);

  return (
    <div>
      <AnimatePresence>
        <Globalstyle />
        <Landingpage
          workStatus={workStatus}
          homeStatus={homeStatus}
          setHomeStatus={setHomeStatus}
          contactStatus={contactStatus}
        />
        <Work setWorkStatus={setWorkStatus} />
        <Contact  setContactStatus={setContactStatus}/>
      </AnimatePresence>
    </div>
  );
};

export default App;
