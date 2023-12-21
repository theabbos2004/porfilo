import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Title from "../../Title/Title";
import ProfilePhoto from "../../ProfilePhoto/ProfilePhoto";
import ProfileImage from "../../../img/Profile.png";
import Button from "../../Button/Button";
import { TypeAnimation } from "react-type-animation";
import { useDispatch, useSelector } from "react-redux";
import { contactActive } from "../../../Layout/Store/StoreSlice";
import { NextPage } from "../../../Hooks/NextPage";
import {
  unstable_HistoryRouter,
  useNavigate,
  useParams,
} from "react-router-dom";
const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={["IDES", 3000, "BUSINESS", 3000]}
      wrapper="span"
      speed={5}
      style={{
        fontSize: "3rem",
        display: "inline-block",
        color: "var(--color-brand--theme-text)",
      }}
      repeat={Infinity}
    />
  );
};
export default function MainSector() {
  let dispatch = useDispatch();
  let pathName = useNavigate();
  let scroolRef = useRef();
  NextPage(scroolRef, pathName);
  return (
    <div className={styles.main_bob} ref={scroolRef}>
      {window?.innerWidth > 576 ? (
        <div className={styles.intro}>
          <div className={styles.who_section}>
            <div className={styles.who_cover}>
              <Title children="FRONT-END" />
              <Title children="PROGRAMMER" />
            </div>
            <div className={styles.offer}>
              <p>
                contact me to develop your <ExampleComponent /> further
              </p>
              <Button
                onClick={() => dispatch(contactActive({ payload: true }))}
              >
                Contact me
              </Button>
            </div>
          </div>
          <div className={styles.image_section}>
            <ProfilePhoto
              src={ProfileImage}
              sx={{ transform: "translate(-2rem,-2rem)", transition: "1s all" }}
            />
            <p className={styles.profile_name}>Savrjonov Abbos</p>
          </div>
        </div>
      ) : (
        <div className={styles.intro}>
          <div className={styles.image_section}>
            <ProfilePhoto
              src={ProfileImage}
              sx={{ transform: "translate(-2rem,-2rem)", transition: "1s all" }}
            />
            <p className={styles.profile_name}>Savrjonov Abbos</p>
          </div>
          <div className={styles.who_section}>
            <div className={styles.who_cover}>
              <Title children="FRONT-END" />
              <Title children="PROGRAMMER" />
            </div>
            <div className={styles.offer}>
              <p>
                contact me to develop your <ExampleComponent /> further
              </p>
              <Button
                onClick={() => dispatch(contactActive({ payload: true }))}
              >
                Contact me
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.page_number}>
        <Title
          children="01"
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
