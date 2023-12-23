import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Global } from "@emotion/react";
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
const drawerBleeding = 52;

export default function BottomDrawer() {
  const [state, setState] = useState(true);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  return (
    <div className="App">
    <SwipeableBottomSheet overflowHeight={40}>
	<div style={{ height: '240px' }}>
		Here goes the content of your bottom sheet
	</div>
</SwipeableBottomSheet>
    </div>
  );
}
