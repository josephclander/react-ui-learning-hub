const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>
        A progress container will have two overlapping elements. A{" "}
        <code className="code">background div</code> that has a constant fixed
        width and a <code className="code">progress div</code> that will change
        size based on a calculation.
      </p>
      <p>
        Beneath that is the <code className="code">text area</code> to enter the
        content to be counted.
      </p>
      <h3>Counting the characters</h3>
      <p>
        The <code className="code">text area</code> has an{" "}
        <code className="code">onChange</code> attribute linked to a{" "}
        <code className="code">handleCount</code> function.
      </p>
      <p>
        The function calculates the characters by measuring the length of the
        value. This is tracked in <code className="code">useState</code>, with{" "}
        <code className="code">count</code>.
      </p>
      <h3>Animating the progress bar</h3>
      <p>
        To update the width of the <code className="code">progress div</code> a
        small calculation is done on <code className="code">progressStyle</code>{" "}
        to see how many pixels should be added for every extra unit of the
        count.
      </p>
      <p>
        The width of this element has been fixed to{" "}
        <code className="code">400px</code> and an{" "}
        <code className="code">upper limit</code> of{" "}
        <code className="code">50 characters</code>. This means every{" "}
        <code className="code">1 unit</code> is equivalent to{" "}
        <code className="code">8px</code>.
      </p>
      <h3>Bonus animation</h3>
      <p>
        For extra benefit to the <code className="code">user experience</code>,{" "}
        <code className="code">isComplete</code> is a state to track when the{" "}
        <code className="code">50 character limit</code> has been reached. Then{" "}
        <code className="code">short-circuit evaluation</code> controls the
        display of the &apos;complete&apos; alert.
      </p>
    </>
  );
};

export default Explanation;
