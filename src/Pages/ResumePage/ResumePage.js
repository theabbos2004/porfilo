import React from 'react'
import Resume from '../../Components/section/Resume/Resume.js'
import PdfDownload from '../../Components/section/PdfDownload/PdfDownload.js'

export default function ResumePage() {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%",paddingTop:"1rem"}}>
        <PdfDownload/>
        <Resume/>
    </div>
  )
}
