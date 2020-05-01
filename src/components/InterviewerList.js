import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "components/InterviewerListItem";
import action from "@storybook/addon-actions/dist/preview/action";

export default function InterviewerList(props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map(p => <InterviewerListItem
          key={p.id}
          name={p.name}
          avatar={p.avatar}
          setInterviewer={action("setInterviewer")} />)}
      </ul>
    </section>
  )
}