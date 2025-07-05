import React, { useId } from 'react'

export function Select({
  options,
  label,
  className = "",
  ref,
  ...props
}) {
  
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='inline-block mb-2 pl-1 text-white font-medium'>{label}</label>}
      <select 
      {...props} 
      id={id} 
      ref={ref} 
      className={`px-3 py-2 rounded-lg bg-gray-700 text-white 
        outline-none focus:bg-gray-600 duration-200 
        border border-gray-600 focus:border-blue-400 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option} className="bg-gray-700 text-white">{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Select