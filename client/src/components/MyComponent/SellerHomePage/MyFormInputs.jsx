const MyFormInputs = ({ editable,values,value, focus ,onChange }) => {
  return (
    <input
      type="text"
      name={values.name}
      placeholder={values.placeholder}
      required
      readOnly={!editable}
      onFocus={focus}
      value={value}
      className="custominput"
      onChange={onChange}
    />
  );
};

export default MyFormInputs;
