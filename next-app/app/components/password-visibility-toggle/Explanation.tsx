const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>
        A <code className="code">label</code>, an{" "}
        <code className="code">input</code> and a{" "}
        <code className="code">button</code>.
      </p>
      <p>
        The label is linked to the input via{" "}
        <code className="code">htmlFor</code>. Don&apos;t be tempted to only add
        the label as a placeholder as this has accessibility issues. When you
        start typing the placeholder goes and so does the instruction.
      </p>
      <p>
        The input <code className="code">type</code> is set initially to{" "}
        <code className="code">password</code>. This is how you get the effect
        of hiding the typed values with asterix.
      </p>
      <p>
        Note that the <code className="code">id</code> attribute links the input
        to the label. The <code className="code">name</code> attribute is the{" "}
        <code className="code">key</code> for the password value if it were
        hooked up to be sent in a form.
      </p>
      <h3>How to toggle the hidden password</h3>
      <p>
        You may be tempted to use <code className="code">display: none;</code>{" "}
        and have more than one element but you can simply toggle the input{" "}
        <code className="code">type</code> from{" "}
        <code className="code">password</code> to{" "}
        <code className="code">text</code>. This ensures a smoother experience.
      </p>
    </>
  );
};

export default Explanation;
