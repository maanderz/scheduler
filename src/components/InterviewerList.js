import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        <InterviewerListItem
          id={props.interviewers.id}
          name={props.interviewers.name}
          avatar={props.interviewers.avatar}
        />
      </ul>
    </section>
  )
}