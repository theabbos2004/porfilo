import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loding from '../Components/Loading/Loding'
const HomePage =  React.lazy(()=>import('./BasicPage/HomePage'));
const PortfiloPage =  React.lazy(()=>import('./PortfiloPage/PortfiloPage'))
const SkillsPage =  React.lazy(()=>import('./SkillsPage/SkillsPage'))
const AboutPage =  React.lazy(()=>import('./Aboutpage/AboutPage'))
const ResumePage =  React.lazy(()=>import('./ResumePage/ResumePage'))
export default function RoutConfig() {
  return (
        <Routes>
            <Route path='/' element={<React.Suspense fallback={<Loding/>}><HomePage/></React.Suspense>}/>
            <Route path='/about' element={<React.Suspense fallback={<Loding/>}><AboutPage/></React.Suspense>}/>
            <Route path='/skills' element={<React.Suspense fallback={<Loding/>}><SkillsPage/></React.Suspense>}/>
            <Route path='/portfilo' element={<React.Suspense fallback={<Loding/>}><PortfiloPage/></React.Suspense>}/>
            <Route path='/resume' element={<React.Suspense fallback={<Loding/>}><ResumePage/></React.Suspense>}/>
        </Routes>
  )
} 
