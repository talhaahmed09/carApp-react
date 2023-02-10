const CustomInputComponent = ({ inputRef, ...rest }) => (
  <input ref={inputRef} {...rest} type="text" />
);


export default CustomInputComponent
