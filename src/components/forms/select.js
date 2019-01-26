import React from 'react';
import { Dropdown as SemDropdown } from 'semantic-ui-react';

export const Dropdown = ({
  field, 
  form: { touched, errors }, 
  options,
  ...props
}) => (
    <div>
      <SemDropdown fluid search selection options={options} {...props} />
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );