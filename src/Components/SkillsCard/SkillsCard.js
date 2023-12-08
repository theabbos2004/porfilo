import React from "react";
import styles from "./index.module.scss";
import ReactImageMagnify from "react-image-magnify";
export default function SkillsCard({ key, data = [], index = 0 }) {
  return (
    <div className={styles.skill_card} key={key}>
      {index % 2 == 0 ? (
        <div className={styles.main_card_section}>
          <div className={styles.main_card}>
            <p className={styles.title}>{data?.title}</p>
            <table>
              <tr>
                {data?.dropTitle?.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
              {data?.drop?.map((item, index) => (
                <tr key={Math.random() * 100}>
                  {item.map((itm, indx) => (
                    <td key={indx}>
                      <div style={{ display: "flex" }}>
                        {itm.icon}
                        <p
                          style={{
                            paddingLeft: "1rem",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {itm.drop}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <div className={styles.img_section}>
          <img src={data?.img}/>
        </div>
      )}
      {index % 2 == 0 ? (
        <div className={styles.img_section}>
          <img src={data?.img}/>
        </div>
      ) : (
        <div
          className={styles.main_card_section}
          style={{ justifyContent: "end" }}
        >
          <div className={styles.main_card}>
            <p className={styles.title}>{data?.title}</p>
            <table>
              <tr>
                {data?.dropTitle?.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
              {data?.drop?.map((item, index) => (
                <tr key={Math.random() * 100}>
                  {item.map((itm, indx) => (
                    <td key={index}>
                      <div style={{ display: "flex" }}>
                        {itm.icon}
                        <p
                          key={index}
                          style={{
                            paddingLeft: "1rem",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {itm.drop}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
