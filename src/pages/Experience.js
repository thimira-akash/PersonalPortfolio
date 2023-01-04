import { School, Work } from "@mui/icons-material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2003-2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-tittle">
            Gurukula College, kelaniya, Sri Lanka
          </h3>
          <p>Primary Education with Ordinary Level and Advanced Level </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-tittle">
            Sri Lanka Instittue of Information Technology, Malabe, Sri Lanka
          </h3>
          <p>Bachelor's degree in Information Technology </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - for 6 months"
          iconStyle={{ background: "#ebd234", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-tittle">
          jWare Automation – IT Solutions and Services
          </h3>
          <p>Internship as a Trainee Software Engineer </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
