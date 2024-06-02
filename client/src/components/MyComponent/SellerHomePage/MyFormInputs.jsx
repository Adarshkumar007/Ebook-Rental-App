const MyFormInputs = ({ editable,values, focus }) => {
  return (
    <input
      type="text"
      name={values.name}
      placeholder={values.placeholder}
      required
      readOnly={!editable}
      onFocus={focus}
      className="custominput"
    />
  );
};

export default MyFormInputs;
