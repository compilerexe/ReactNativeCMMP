import React, { Component } from "react";
import { Image } from "react-native";

const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-kitchen-sink.png");

import styles from "./styles";

class Background extends Component {
  render() {
    return (
        <Image source={launchscreenBg} style={styles.imageContainer}/>
    );
  }
}

export default Background;
