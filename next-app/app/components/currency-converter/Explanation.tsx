const Explanation = () => {
  return (
    <>
      <h3>Using React useRef and useState efficiently</h3>
      <p>
        <code className="code">useRef</code> enables you to reference the value
        entered by the user to retrieve the current value. While{" "}
        <code className="code">useState</code> is used for the update to keep
        track of the value and ensure that the output gets updated when the user
        enters a new value.
      </p>
      <h3>Tips</h3>
      <p>
        When using forms, ensure that you prevent the default behaviour to
        submit the data and rerender the page.
      </p>
      <h3>Creating better user experience</h3>
      <p>
        Note that if the user doesn&apos;t enter a value and presses the submit
        button, then <code className="code">0</code> is entered to prevent
        errors.
      </p>
      <p>
        Without <code className="code">TypeScript</code>, the browser will still
        parse this with <code className="code">JavaScript</code> fine most
        likely. However, defensive coding, parsing and using{" "}
        <code className="code">optional chaining</code>, ensures you will
        consistently get the results you expect.
      </p>
    </>
  );
};

export default Explanation;
