const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>
        A <code className="code">form</code> element with an{" "}
        <code className="code">onSubmit</code> that calls{" "}
        <code className="code">handleSubmit</code>.
      </p>
      <p>
        Note there are labels and inputs. Reminder that it is the{" "}
        <code className="code">id</code> attribute that links to the label via{" "}
        <code className="code">htmlFor</code>. The{" "}
        <code className="code">name</code> attribute is the key for the value
        when the form data is received.
      </p>
      <p>
        Each input is linked to a separate{" "}
        <code className="code">onChange</code> function. The final input has a
        type of <code className="code">submit</code>.
      </p>
      <h3>onChange functions</h3>
      <p>
        Each on change function is connected with its relevant{" "}
        <code className="code">state</code>. Each function updates state.
      </p>
      <h3>handleSubmit function</h3>
      <p>
        The default behaviour of a <code className="code">JS Form</code> element
        is to send the data and refresh the page. To stop that from happening,
        we use <code className="code">event.preventDefault</code>.
      </p>
      <p>
        The data is then be processed. In this case, an alert has been created.
      </p>
      <p>
        Notice that both the title and content are reset to a blank string
        afterwards.
      </p>
    </>
  );
};

export default Explanation;
