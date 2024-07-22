const Explanation = () => {
  return (
    <>
      <h3>The HTML</h3>
      <p>
        Structurally what you see is what you get. An{" "}
        <code className="code">input</code>,{" "}
        <code className="code">button</code> and{" "}
        <code className="code">div</code> for the display.
      </p>
      <h3>Starting the timer</h3>
      <p>
        <code className="code">useRef</code> is an efficient way to get the
        value from the input.
      </p>
      <p>
        The <code className="code">handleStart</code> function, will parse the
        input as a number, then we have a <code className="code">count</code>{" "}
        state to track the value.
      </p>
      <h3>Mimicking a timer</h3>
      <p>
        Now we can set the <code className="code">count</code> value, we need to
        make the timer count down in seconds.
      </p>
      <p>
        The <code className="code">useEffect</code> function allows us to update
        the counter when the <code className="code">count</code> state gets
        updated.
      </p>
      <p>
        The <code className="code">intervalRef</code> variable keeps a{" "}
        <code className="code">setInterval</code> reference to allow us to
        update and clear. The if statements contain a lot of checks that the
        value is valid and that there are no old values still around.
      </p>
      <p>
        The fundamental element to make this function is the{" "}
        <code className="code">setCount</code> function that takes the current
        count and reduces it by 1.
      </p>
      <p>
        <span className="bold">Disclaimer:</span> using{" "}
        <code className="code">setInterval</code> is{" "}
        <span className="bold">not</span> an accurate way to measure time but
        works well in simple cases.
      </p>
      <h3>Cleanup</h3>
      <p>
        You&apos;ll notice the the many areas where we check the status of the{" "}
        <code className="code">setInterval ref</code>. We mentioned the check to
        see if a ref exists it needs to be cleared first. But there is also a{" "}
        <code className="code">return</code> statement in the{" "}
        <code className="code">useEffect</code> that is called a{" "}
        <code className="code">cleanup function</code>. This makes sure that
        when we leave this page and the component unmounts, if there is still an
        interval present, it is cleared.
      </p>
    </>
  );
};

export default Explanation;
