


const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>

      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
