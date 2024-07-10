const Explanation = () => {
  return (
    <>
      <p>
        <code className="code">useRef</code> enables you to reference the value
        entered by the user to retrieve the current value. While{" "}
        <code className="code">useState</code> is used for the update to keep
        track of the value and ensure that the output gets updated when the user
        enters a new value.
      </p>
      <p>
        When using forms, ensure that you prevent the default behaviour to
        submit the data and rerender the page.
      </p>
      <p>
        Note that if the user doesn&apos;t enter a value and presses the submit
        button, then <code className="code">0</code> is entered to prevent
        errors.
      </p>
    </>
  );
};

export default Explanation;
