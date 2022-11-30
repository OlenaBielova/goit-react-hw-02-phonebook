import React from "react";

export const Filter = ({value, onChange}) => (
    <label>Find contact by name <input type="text"
          value={value}
          onChange={onChange}
        name="filter" />
    </label>
)