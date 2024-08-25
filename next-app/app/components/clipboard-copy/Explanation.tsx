const Explanation = () => {
  return (
    <>
      <h3>The JS Clipboard API</h3>
      <p>
        To be able to write to the clipboard, you&apos;ll notice we use the
        line,{" "}
        <code className="code">navigator.clipboard.writeText(copyText)</code> in
        the code.
      </p>
      <h3>How to copy the text</h3>
      <p>
        Link the <code className="code">textArea</code> element with a{" "}
        <code className="code">ref</code>. Now in the{" "}
        <code className="code">copyToClipboard</code> function you can see that
        the value is checked and assigned.
      </p>
      <p>
        The Clipboard API is asynchronous, so{" "}
        <code className="code">copyToClipboard</code> is{" "}
        <code className="code">async</code>.
      </p>
      <h3>Adding User Interactions</h3>
      <p>
        Alone, there would be no clear way to know that you had copied to
        clipboard until you went to use it. This isn&apos;t ideal so we&apos;ll
        add some interactions to improve it.
      </p>
      <h3>Track button click and text</h3>
      <p>
        Using <code className="code">useState</code> we&apos;ll assign an intial
        text of &apos;Copy to Clipboard&apos;. We will also track whether the
        button is idle or in a state of &apos;copying&apos;.
      </p>
      <p>
        The function, <code className="code">buttonFeedback</code>, updates the
        text when the button is clicked and sets the state of the button to
        being active, setting off new styles.
      </p>
      <h3>Reset effect</h3>
      <p>
        To get the effect of the button resetting to it&apos;s original state, a{" "}
        <code className="code">setTimeout</code> function is used.
      </p>
    </>
  );
};

export default Explanation;
