import React from 'react';
import { Dropdown as SemDropdown } from 'semantic-ui-react';

export const Dropdown = ({
  field, 
  form: { touched, errors, setFieldValue }, 
  options,
  ...props
}) => (
    <div>
      <SemDropdown  {...props} {...field} onChange={(e, val) => {
        setFieldValue(field.name, val.value);
      }} fluid search selection options={options} />
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );