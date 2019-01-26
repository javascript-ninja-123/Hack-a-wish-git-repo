import React from 'react';
import { Input as SemInput } from 'semantic-ui-react';

export const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div>
      <SemInput type="text" {...field} {...props} />
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );