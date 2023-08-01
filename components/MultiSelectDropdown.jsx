import { useEffect, useRef, useState } from 'react';
import './MultiSelectDropdown.css'
import dropdown from '../public/dropdown.svg'
import Image from 'next/image';


function MultiSelectDropdown ({ tags, handleSelected, options }) {
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false)
  const svgRef = useRef()

  useEffect(() => {
    if (!tags) {
      setSelected()
    }
  }, [tags])
  
  

  function toggle(option) {
    if (selected === option) {
      setSelected()
    } else {
      setSelected(option);
      handleSelected(option)
    }
  }

  function isSelected(option) {
    return selected === option;
  }

  return (
    <>
    <div className="multiselect-dropdown">
      <div className="select-header" onClick={() => {setOpen(!open); open ? svgRef.current.style.transform = 'rotate(0deg)' : svgRef.current.style.transform = 'rotate(180deg)'}}>
      <div className="selected-items">
          {selected ?  '' : <div><span>No List</span></div>}
          {selected && <div key={selected} className="selected-item">{selected}</div>}
          <Image className='svg' ref={svgRef} src={dropdown} height={20} alt="dropdown" />

        </div>
      </div>
      {open &&
      <div className="select-options">
        {options.map(option => (
          <div 
            key={option}
            className={`select-option ${isSelected(option) && 'selected'}`}
            onClick={() => toggle(option)}
          >
            {option}
          </div>
        ))}
      </div>}
    </div>
    </>
  );
}

export default MultiSelectDropdown;