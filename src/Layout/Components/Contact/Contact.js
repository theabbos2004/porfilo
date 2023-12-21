import React, { useRef, useState } from "react";
import styles from "./index.module.scss";
import * as icon from "../../../img/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { contactActive } from "../../Store/StoreSlice";
import Button from "../../../Components/Button/Button";

export default function Contact() {
  const form = useRef();
  let [state, setState] = useState({
    messenger: [
      {
        id: 1,
        icon: "PhoneIcons",
        title: "phoneNumber",
        drop: "+998900093204",
      },
      {
        id: 2,
        icon: "TelegramIcons",
        title: "TelegramIcon",
        drop: "Web_developer_777",
        link: "https://t.me/Web_developer_777",
      },
      {
        id: 3,
        icon: "InstagramIcons",
        drop: "_the_Abbos_",
        title: "InstagramIcon",
        link: "https://www.instagram.com/_the_abbos_/",
      },
      {
        id: 4,
        icon: "FaceBookIcon",
        drop: "_the_Abbos_",
        title: "FaceBookIcon",
      },
      {
        id: 5,
        icon: "GitHubIcons",
        drop: "theabbos2004",
        title: "GitHubIcon",
        link: "https://github.com/theabbos2004",
      },
    ],
  });
  let [emailData, setEmailData] = useState({ from_name: "portfilo" });
  let [emailSend, setEmailSend] = useState(false);
  let store = useSelector((state) => state.counter);
  let dispatch = useDispatch();

  const changeIcon = ({
    params = "",
    width = 20,
    height = 20,
    hWidth = 20,
    hHeight = 20,
    hColor = "var(--color-brand--1)",
    color = "var(--color-brand--1)",
    hOpacity = 1,
    opacity = 1,
  }) => {
    let Icon = icon[params.icon];
    if (params?.hover) {
      return (
        <Icon
          width={hWidth - 2}
          height={hHeight - 2}
          color={hColor}
          opacity={hOpacity}
        />
      );
    } else {
      return <Icon width={width - 2} height={height - 2} color={color} opacity={opacity}/>;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("abbos", "template_e4b1dyh", form.current, "o0jw9Nlxnmu7te-il")
      .then(
        (result) => {
          setEmailData({
            from_name: "portfilo",
            name: "",
            email: "",
            message: "",
          });
          setEmailSend(true);
        },
        (error) => {
          setEmailData({ from_name: "portfilo" });
          setEmailSend(false);
        }
      );
    let booleen = true;
    let interval = setInterval(() => {
      booleen = false;
      setEmailSend(false);
    }, 5000);
    if (!booleen) {
      clearInterval(interval);
    }
  };

  return (
    <div
      className={styles.footer}
      style={{ width: store?.contactActive ? "90%" : "4.5rem" }}
      onMouseEnter={() => {
        dispatch(contactActive(true));
      }}
      onMouseLeave={() => {
        dispatch(contactActive(false));
      }}
    >
      <div
        className={styles.contact_text}
        style={{
          transform: store?.contactActive
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
          justifyContent: store?.contactActive ? "end" : "center",
          position: "absolute",
          top: "50%",
        }}
      >
        <div className={styles.lines}>
          <div className={styles.fist_line}></div>
          <div className={styles.second_line}></div>
        </div>
      </div>

      <div className={store?.contactActive ? styles.contact_active : ""}>
        <div
          className={
            store?.contactActive
              ? styles.messenger_sector_active
              : styles.messenger_sector
          }
        >
          {store?.contactActive ? (
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
                {changeIcon({
                  params: { ...item },
                  width: store?.contactActive ? 17 : 20,
                  height: store?.contactActive ? 17 : 20,
                })}
                <div className={styles.messenger}>{item.drop}</div>
              </a>
            ))}
          </div>
        </div>
        {store?.contactActive ? (
          <form ref={form} className={styles.email_box}>
            <p>Contact me</p>
            <div className={styles.form_input}>
              <div className={styles.input_sector}>
                <label>NAME</label>
                <input
                  name="name"
                  placeholder="Name"
                  value={emailData?.name}
                  onChange={(e) =>
                    setEmailData({ ...emailData, name: e.target.value })
                  }
                />
              </div>
              <div className={styles.input_sector}>
                <label>EMAIL</label>
                <input
                  name="email"
                  placeholder="email@gmail.com"
                  value={emailData?.email}
                  onChange={(e) =>
                    setEmailData({ ...emailData, email: e.target.value })
                  }
                />
              </div>
              <div className={styles.textarea_sector}>
                <label>MESSAGE</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  style={{ width: "100%" }}
                  value={emailData?.message}
                  onChange={(e) =>
                    setEmailData({ ...emailData, message: e.target.value })
                  }
                />
              </div>
              <Button
                sx={{ fontSize: "1.5rem", padding: "1rem 3rem" }}
                type="submit"
                onClick={(e) => sendEmail(e)}
              >
                {emailSend ? icon.CheckedIcon : "send"}
              </Button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
