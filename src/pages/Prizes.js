 import React from 'react';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
 import 'react-vertical-timeline-component/style.min.css';
 import { FaRegSnowflake } from "react-icons/fa";
 import prizes_bg from "../assets/prizes_bg.jpg";
 


 const Prizes=()=>{
    
    return (
<div>
        <Header/>

        
<div className='prizes' style={{backgroundImage: `url(${prizes_bg})` ,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>

    <VerticalTimeline lineColor='#fff'>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            // date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaRegSnowflake />}
        >
            <h3 className="vertical-timeline-element-title">Top 3</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
                <ul className='prizeList'>
                    <li>Special Prize</li>
                    <li>Shoutouts on Social Media handles</li>
                    <li>Swag Kits and lot of exciting goodies</li>
                    <li>Certificate of appreciation</li>
                </ul>
            </p>
        </VerticalTimelineElement >
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaRegSnowflake />}
        >
            <h3 className="vertical-timeline-element-title">Top 5</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
                <ul className='prizeList'>
                    <li>Surprise Gift</li>
                    <li>Shoutouts on Social Media handles</li>
                    <li>Swag Kits and lot of exciting goodies</li>
                    <li>Certificate of appreciation</li>
                </ul>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaRegSnowflake />}
        >
            <h3 className="vertical-timeline-element-title">Top 10</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
            <p>
                <ul className='prizeList'>
                    <li>Shoutouts on Social Media handles</li>
                    <li>Swag Kits and lot of exciting goodies</li>
                    <li>Certificate of appreciation</li>
                </ul>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaRegSnowflake />}
        >
            <h3 className="vertical-timeline-element-title">Top 25</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
            <p>
                <ul className='prizeList'>
                    <li>Swag Kits and lot of exciting goodies</li>
                    <li>Certificate of appreciation</li>
                </ul>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaRegSnowflake />}
        >
            <h3 className="vertical-timeline-element-title">ALL Contributors</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
            <p>
                <ul className='prizeList'>
                    <li>Certificate of appreciation for your First successful Pull Request</li>
                </ul>
            </p>
        </VerticalTimelineElement>

    </VerticalTimeline>


  
</div>
        <Footer/>
        </div>
    )

 }

 export default Prizes;