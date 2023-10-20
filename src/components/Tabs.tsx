'use client'

import React, { useState } from 'react'

interface TabsProps {
  children: React.ReactNode
}

interface TabProps {
  label: string
  children: React.ReactNode
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex border-b border-gray-300">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 transition-colors duration-300 ${
                  activeTab === index ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
              >
                {child.props.label}
              </button>
            )
          }
          return null
        })}
      </div>
      <div className="tab-content mt-4">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && activeTab === index) {
            return <div key={index}>{child}</div>
          }
          return null
        })}
      </div>
    </div>
  )
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>
}
