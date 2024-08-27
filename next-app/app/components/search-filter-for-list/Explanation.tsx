const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>
        The component is made up of an <code className="code">input</code> and
        an <code className="code">unordered list</code> where the{" "}
        <code className="code">list</code> items are mapped over.
      </p>
      <h3>handleInput function</h3>
      <p>
        When the input is updated, the <code className="code">onChange</code>{" "}
        event calls the <code className="code">handleInput</code> function.
      </p>
      <p>
        <code className="code">searchInput</code> stores the current value of
        the input. Which is in turn filtered to return those values{" "}
        <em>included</em> in the list and stored in{" "}
        <code className="code">updatedList</code>.
      </p>
      <h3>Debounce</h3>
      <p>
        Although not essential for this action, a{" "}
        <code className="code">debounce</code> function is used to ensure that
        the list seen by the user isn&apos;t updated too quickly to become
        distracting.
      </p>
      <p>
        The <code className="code">debounce</code> function is often used to
        prevent too many API calls.
      </p>
      <h4>How Debounce works</h4>
      <p>
        The function takes a <code className="code">callback</code> and a{" "}
        <code className="code">delay</code>.
      </p>
      <p>
        A <code className="code">timer</code> is referenced at this level of
        scope. An anonymous function is returned that clears any current timer
        and sets a new one.
      </p>
      <p>
        Now when the function is called before the delay time has passed, that
        callback is removed and a new delay is initiated.
      </p>
    </>
  );
};

export default Explanation;
