import React, { useRef, useState } from "react";
import styles from "./index.module.scss";
import Title from "../../Title/Title";
import Slider from "../Slider/Slider";
import { useNavigate } from "react-router-dom";
import { NextPage } from "../../../Hooks/NextPage";
export default function PortfiloSector() {
  let [state, setState] = useState({
    portfilos: [
      {
        id: 1,
        imgUrl: require("../../../img/dashboard-website.png"),
        imgUrl1: "yellow",
        link: "https://dashboard-savrjonov.vercel.app/",
        gitHubLink: "https://github.com/theabbos2004/Dashboard",
        use: ["HtmlIcons", "CssIcons", "SASSIcons", "JSIcons", "ReactIcons"],
      },
      {
        id: 2,
        imgUrl: require("../../../img/auto-zona-portfilo.png"),
        imgUrl1: "red",
        link: "https://auto-zona.vercel.app/",
        gitHubLink: "https://github.com/theabbos2004/AutoZona",
        use: ["HtmlIcons", "CssIcons", "SASSIcons", "JSIcons", "ReactIcons"],
      },
      {
        id: 3,
        imgUrl: require("../../../img/blue-color-website.png"),
        imgUrl1: "green",
        link: "https://blue-collor.vercel.app",
        gitHubLink: "https://github.com/theabbos2004/BlueCollor",
        use: ["HtmlIcons", "CssIcons", "JSIcons"],
      },
      {
        id: 4,
        imgUrl: require("../../../img/foodShoopPortfio.png"),
        imgUrl1: "green",
        link: "https://food-shop-blond.vercel.app",
        gitHubLink: "https://github.com/theabbos2004/food-shop",
        use: ["HtmlIcons", "CssIcons", "JSIcons"],
      },
      {
        id: 5,
        imgUrl: require("../../../img/digitalAgensyPortfilo.png"),
        imgUrl1: "black",
        link: "https://digital-agensy.vercel.app/",
        gitHubLink: "https://github.com/theabbos2004/digital-agensy",
        use: ["HtmlIcons", "CssIcons", "JSIcons"],
      },
    ],
  });
  let pathName = useNavigate();
  let scrollRef = useRef();
  NextPage(scrollRef, pathName);
  return (
    <div className={styles.portfilo_bob} ref={scrollRef}>
      <div className={styles.portfilo_section}>
        <Slider data={state.portfilos} />
      </div>
      <div className={styles.page_number}>
        <Title
          children="04"
          sx={{
            transform: "translateY(-6rem)",
            fontFamily: "Allerta Stencil",
            fontWeight: "200",
            color: "var(--color-brand--8)",
          }}
        />
      </div>
    </div>
  );
}
