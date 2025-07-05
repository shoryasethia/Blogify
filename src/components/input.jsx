import React, { useId } from 'react';

function Input(
  { 
    label, 
    type = 'text', 
    className = '', 
    ref,        
    ...props   
  }
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-2 pl-1 text-white font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        {...props}
        className={`
          px-3 py-2 rounded-lg bg-gray-700 text-white 
          outline-none focus:bg-gray-600 duration-200 
          border border-gray-600 focus:border-blue-400 w-full 
          placeholder-gray-400 ${className}
        `}
      />
    </div>
  );
}

export default Input;