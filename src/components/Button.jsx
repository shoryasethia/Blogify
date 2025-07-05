import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600 hover:bg-blue-700",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button 
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${bgColor} ${textColor} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
}