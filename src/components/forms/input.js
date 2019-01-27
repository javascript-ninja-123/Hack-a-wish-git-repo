import React from 'react';
import { Input as SemInput } from 'semantic-ui-react';

export const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div>
      <SemInput  {...props} {...field} onChange={(e, val) => {
        setFieldValue(field.name, val.value)
      }} />
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );