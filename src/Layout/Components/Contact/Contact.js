import React, { useState } from "react";
import styles from "./index.module.scss";
import {
  FaceBookIcon,
  GitHubIcons,
  InstagramIcons,
  PhoneIcons,
  TelegramIcons,
} from "../../../img/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { contactActive } from "../../Store/StoreSlice";
export default function Contact() {
  let [state, setState] = useState({
    messenger: [
      {
        id: 1,
        icon: (
          <PhoneIcons width="20" height="20" color="var(--color-brand--1)" />
        ),
        title: "phoneNumber",
        drop: "+998900093204",
      },
      {
        id: 2,
        icon: (
          <TelegramIcons width="25" height="25" color="var(--color-brand--1)" />
        ),
        title: "TelegramIcon",
        drop: "Web_developer_777",
        link: "https://t.me/Web_developer_777",
      },
      {
        id: 3,
        icon: (
          <InstagramIcons
            width="25"
            height="25"
            color="var(--color-brand--1)"
          />
        ),
        drop: "_the_Abbos_",
        title: "InstagramIcon",
        link: "https://www.instagram.com/_the_abbos_/",
      },
      {
        id: 4,
        icon: (
          <FaceBookIcon width="25" height="25" color="var(--color-brand--1)" />
        ),
        drop: "_the_Abbos_",
        title: "FaceBookIcon",
      },
      {
        id: 5,
        icon: (
          <GitHubIcons width="25" height="25" color="var(--color-brand--1)" />
        ),
        drop: "theabbos2004",
        title: "GitHubIcon",
        link: "https://github.com/theabbos2004",
      },
    ],
  });

  let store=useSelector((state) =>state.counter)
  let dispatch=useDispatch()
  function changeIconInfo(params, width, hwidth) {
    switch (params.title) {
      case "phoneNumber":
        if (params.hover) {
          return (
            <PhoneIcons
              width={hwidth - 2}
              height={hwidth - 2}
              color="var(--color-brand--1)"
              opacity="1"
            />
          );
        } else {
          return (
            <PhoneIcons
              width={width - 2}
              height={width - 2}
              color="var(--color-brand--1)"
            />
          );
        }
      case "TelegramIcon":
        if (params.hover) {
          return (
            <TelegramIcons
              width={hwidth}
              height={hwidth}
              color="var(--color-brand--1)"
              opacity="1"
            />
          );
        } else {
          return (
            <TelegramIcons
              width={width}
              height={width}
              color="var(--color-brand--1)"
            />
          );
        }
      case "InstagramIcon":
        if (params.hover) {
          return (
            <InstagramIcons
              width={hwidth}
              height={hwidth}
              color="var(--color-brand--1)"
              opacity="1"
            />
          );
        } else {
          return (
            <InstagramIcons
              width={width}
              height={width}
              color="var(--color-brand--1)"
            />
          );
        }
      case "FaceBookIcon":
        if (params.hover) {
          return (
            <FaceBookIcon
              width={hwidth}
              height={hwidth}
              color="var(--color-brand--1)"
              opacity="1"
            />
          );
        } else {
          return (
            <FaceBookIcon
              width={width}
              height={width}
              color="var(--color-brand--1)"
            />
          );
        }
      case "GitHubIcon":
        if (params.hover) {
          return (
            <GitHubIcons
              width={hwidth}
              height={hwidth}
              color="var(--color-brand--1)"
              opacity="1"
            />
          );
        } else {
          return (
            <GitHubIcons
              width={width}
              height={width}
              color="var(--color-brand--1)"
            />
          );
        }
    }
  }
  return (
    <div
      className={styles.footer}
      style={{ width: store?.contactActive.payload ? "90%" : "4.5rem" }}
      onMouseEnter={() => {
        dispatch(contactActive({payload:true}))
      }}
      onMouseLeave={() => {
        dispatch(contactActive({payload:false}))
      }}
    >
      <div
        className={styles.contact_text}
        style={{
          transform: store?.contactActive.payload
            ? "rotate(0deg) translateX(0rem)"
            : "rotate(-90deg) translateX(-5rem)",
        }}
      >
        CONTACTS
      </div>

      <div
        className={styles.lines_section}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: store?.contactActive.payload ? "end" : "center",
          position: "absolute",
          top: "50%",
        }}
      >
        <div className={styles.lines}>
          <div className={styles.fist_line}></div>
          <div className={styles.second_line}></div>
        </div>
      </div>

      <div className={store?.contactActive.payload ? styles.contact_active : ""}>
        <div
          className={
            store?.contactActive.payload
              ? styles.messenger_sector_active
              : styles.messenger_sector
          }
        >
          {store?.contactActive.payload ? (
            <div className={styles.qr_section}>
              <img
                className={styles.qr_code}
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.png"
              />
              <p>Savrjonov Abbos</p>
            </div>
          ) : (
            ""
          )}
          <div className={styles.contact_section}>
            {state?.messenger?.map((item, index) => (
              <a
                key={index}
                className={styles.messenger_section}
                href={item?.link}
                target="-blank"
                onMouseEnter={() => {
                  let { messenger } = state;
                  messenger = messenger.map((itm) =>
                    itm.id == item.id ? { ...itm, hover: true } : itm
                  );
                  setState({ ...state, messenger });
                }}
                onMouseLeave={() => {
                  let { messenger } = state;
                  messenger = messenger.map((itm) => {
                    return { ...itm, hover: false };
                  });
                  setState({ ...state, messenger });
                }}
              >
                {changeIconInfo(item, store?.contactActive.payload?17:20,store?.contactActive.payload?17:20)}
                <div className={styles.messenger}>{item.drop}</div>
              </a>
            ))}
          </div>
        </div>
        {store?.contactActive.payload ? (
          <div className={styles.email_section}>sad</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
