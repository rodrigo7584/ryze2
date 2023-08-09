import { useState } from 'react'

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="accordion">
      <button className="accordion-title" onClick={toggleAccordion}>
        {title}
        <img
          src="/icon-arrow.png"
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
