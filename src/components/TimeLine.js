import React from "react";
import Timeline from "../assets/Timeline.png";
import { Box } from "@mui/system";



const TimeLine = () => {
  return (
    <>
   <div
     style={{
      
        margin: '2px', // Adjust the value as needed
     }}
   >
    <h1 
        className="mainHeading"
        style={{
            display: 'block',
            maxWidth: '100%',
            textAlign: 'center',
            color: 'white',
            fontWeight: '900',
            fontFamily: 'sans-serif',
            marginTop: '40px',
            marginBottom: '10px',
            padding: '0 50px',
            
        }}
    >
        TimeLine
    </h1>
</div>

      
      {/* <div
        className="prizes"
        style={{
          backgroundImage: `url(${''})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "200px",
          margin: "20px",
        }}
      >
        <VerticalTimeline lineColor="#12486B">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
             date="2011 - present"
             dateClassName="date-color" 
             contentStyle={{ background: 'rgb(18, 72, 107)', color: '#fff' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(18, 72, 107)' }}
             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
             icon={<FaRegSnowflake />}
            
          >
            <h3 className="vertical-timeline-element-title">Top 3</h3>

            <p>
              <ul className="prizeList">
                <li>Special Prize</li>
                <li>Shoutouts on Social Media handles</li>
                <li>Swag Kits and lot of exciting goodies</li>
                <li>Certificate of appreciation</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(18, 72, 107)', color: '#fff' }}
             dateStyle={{ color: '#12486B' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(18, 72, 107)' }}
             date="2011 - present"
             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
             icon={<FaRegSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">Top 5</h3>
        
            <p>
              <ul className="prizeList">
                <li>Surprise Gift</li>
                <li>Shoutouts on Social Media handles</li>
                <li>Swag Kits and lot of exciting goodies</li>
                <li>Certificate of appreciation</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(18, 72, 107)', color: '#fff' }}
             dateStyle={{ color: '#12486B' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(18, 72, 107)' }}
             date="2011 - present"
             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
             icon={<FaRegSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">Top 10</h3>
            
            <p>
              <ul className="prizeList">
                <li>Shoutouts on Social Media handles</li>
                <li>Swag Kits and lot of exciting goodies</li>
                <li>Certificate of appreciation</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaRegSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">Top 25</h3>
            
            <p>
              <ul className="prizeList">
                <li>Swag Kits and lot of exciting goodies</li>
                <li>Certificate of appreciation</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(18, 72, 107)', color: '#fff' }}
             dateStyle={{ color: '#12486B' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(18, 72, 107)' }}
             date="2011 - present"
             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
             icon={<FaRegSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">
              ALL Contributors
            </h3>
            
            <p>
              <ul className="prizeList">
                <li>
                  Certificate of appreciation for your First successful Pull
                  Request
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>  */}

      <Box
        style={{
          padding: "10px 80px",
          display: "flex",
          sx: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            color: "white",
            filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25))",
            overflow: "hidden",
            zIndex: 0,
            width: "a",
            height: "auto",
          },
        }}
      >
       <img src={Timeline} alt="timeline" style={{ width: "100%", justifyContent:'center' }} />
        
     

      </Box>
    </>
    );
}

export default TimeLine;
