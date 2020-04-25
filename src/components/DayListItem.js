import React, { useState } from "react";
import "components/DayListItem.scss"

const classNames = require('classnames');

export default function DayListItem(props) {
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover);

  const dayClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  })

  return (
    <li
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={dayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  )
}