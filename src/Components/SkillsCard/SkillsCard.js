import React from "react";
import styles from "./index.module.scss";
export default function SkillsCard({ data = [], index = 0 }) {
  return (
    <div className={styles.skill_card}>
      {index % 2 == 0 ? (
        <div className={styles.main_card_section}>
          <div className={styles.main_card}>
            <p className={styles.title}>{data?.title}</p>
            <table style={{marginTop:"2rem"}}>
             <tbody>
                {data?.drop?.map((item, indx) => (
                  <tr key={Math.random() * 100}>
                    {item.map((itm, indx) => (
                      <td key={indx}>
                        <div style={{ display: "flex",alignItems:"center" }}>
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
             </tbody>
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
            <table style={{marginTop:"2rem"}}>
              <tbody>
                {data?.drop?.map((item, index) => (
                  <tr key={Math.random() * 100}>
                    {item.map((itm, indx) => (
                      <td key={indx}>
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
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
