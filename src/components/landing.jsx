import Header from "./header";
import LogSection from "./logSection";
import Homepage from "./bodyForSection1";
import './chart.css';
import Chart from './chart';
import Collection from './collection';
import {Routes, Route, Link} from 'react-router-dom'

export default function LandingPage(){
    return(
        <article>
            <Header />
            {/* <LogSection /> */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="chart" element={<Chart />} />
            </Routes>
            <Collection />
        </article>
    )
}