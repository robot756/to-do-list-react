import React from 'react'

export const MySelect = ({ defaultValue, options, value, onChange }) => {
  return (
    <select
      value={value.sort}
      onChange={(e) => onChange({ ...value, sort: e.target.value})}
    >
      <option disabled value="">{defaultValue}</option>

      {options.map((opt) => 
        <option
        key={opt.value} value={opt.value}>
        {opt.name}
        </option>
      )}
    </select>

  )
}
