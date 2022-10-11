import Header from "./header";
import Section from "./section1";
import SectionContent from "./section2";
import SectionContent3 from "./section3";
import LogSection from "./logSection";
import './chart.css'
import Chart from './chart'

export default function LandingPage(){
    return(
        <article>
            <Header />
            <Section />
            <SectionContent />
            <SectionContent3 />
            {/* <LogSection /> */}
            <Chart />
        </article>
    )
}