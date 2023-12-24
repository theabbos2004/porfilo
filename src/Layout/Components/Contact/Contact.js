import React, { useRef, useState } from "react";
import styles from "./index.module.scss";
import * as icon from "../../../img/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { contactActive } from "../../Store/StoreSlice";
import Button from "../../../Components/Button/Button";
import { ReactComponent as QRCodeSvg } from "../../../img/icons/qrcode_86958044_ef56f0b73f7eb6030cfd93d8b8c19876.svg"
import Thanks from "../../../Components/Thanks/Thanks";

export default function Contact() {
  const form = useRef();
  let [state, setState] = useState({
    messenger: [
      {
        id: 1,
        icon: "PhoneIcons",
        drop: "+998900093204",
      },
      {
        id: 2,
        icon: "TelegramIcons",
        drop: "Web_developer_777",
        link: "https://t.me/Web_developer_777",
      },
      {
        id: 3,
        icon: "InstagramIcons",
        drop: "_the_Abbos_",
        link: "https://www.instagram.com/_the_abbos_/",
      },
      {
        id: 4,
        icon: "FaceBookIcon",
        drop: "_the_Abbos_",
      },
      {
        id: 5,
        icon: "GitHubIcons",
        drop: "theabbos2004",
        link: "https://github.com/theabbos2004",
      },
      {
        id: 6,
        icon: "LocationIcon",
        drop: "Uzbekistan/Tashkent/Angren",
        link: "https://www.google.com/maps/place/Angren,+Uzbekistan/@41.0160596,69.9964671,12z/data=!3m1!4b1!4m6!3m5!1s0x38afeeb0f032acbf:0x6af0123d5787be09!8m2!3d41.0084382!4d70.074132!16s%2Fm%2F03mf7p2?entry=ttu",
      },
    ],
  });
  let [emailData, setEmailData] = useState({ from_name: "portfilo" });
  let [emailSend, setEmailSend] = useState({send:false,status:""});
  let store = useSelector((state) => state.store);
  let dispatch = useDispatch();

  const changeIcon = ({
    params = "",
    width = 20,
    height = 20,
    color = "var(--color-brand--1)",
    opacity = 1,
  }) => {
    let Icon = icon[params.icon];
    return <Icon width={width} height={height} color={color} opacity={opacity}/>;
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
          setEmailSend({send:true,status:true});
        },
        (error) => {
          setEmailData({ from_name: "portfilo" });
          setEmailSend({send:true,status:false});
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
              <div style={{width:"10rem",height:"10rem"}}>
                <QRCodeSvg/>
              </div>
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
                  width:window.innerWidth>576?17:8,
                  height:window.innerWidth>576?17:8,
                  opacity: item?.hover ? 1 : 0.65
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
                send
              </Button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
      {
        emailSend?.send?<Thanks error={emailSend?.status?false:true} onClick={()=>setEmailSend({send:false})}/>:""
      }
    </div>
  );
}
