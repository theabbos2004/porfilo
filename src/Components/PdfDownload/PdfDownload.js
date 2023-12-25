import React, { useRef } from 'react'
import styles from "./index.module.scss"
import Button from '../Button/Button'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useSelector } from 'react-redux'
export default function PdfDownload() {
    let resumePdfLink=useSelector(store=>{
        let resumePdf=store.store.resumes.filter(item=>{
            if(item.change){return item}
        })
        return resumePdf[0]?.pdf
    })
  return (
    <div className={styles.PdfDownload}>
        <a href={resumePdfLink} download>
            <Button
                sx={{position:"absolute",right:"4rem",fontSize:"1.5rem",zIndex:"10"}}
            >Download Pdf</Button>
        </a>
    </div>
  )
}
