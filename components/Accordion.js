import { useState } from 'react'
import Image from 'next/image'

import iconArrow from '../public/icon-arrow.png'

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="accordion">
      <button className="accordion-title" onClick={toggleAccordion}>
        {title}
        <Image
          src={iconArrow}
          width={12}
          height={15}
          quality={100}
          alt=""
          className={`icon ${isExpanded ? 'open' : ''}`}
        />
      </button>
      <div className={`accordion-content ${isExpanded ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Accordion
