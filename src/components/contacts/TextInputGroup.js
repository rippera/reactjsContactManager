import React from 'react';
import classnames from 'classnames';
const TextInputGroup = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  type,
  error
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};
TextInputGroup.defaulProps = {
  type: 'text'
};
export default TextInputGroup;
