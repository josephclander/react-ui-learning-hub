const Explanation = () => {
  return (
    <>
      <h3>Overview</h3>
      <p>
        <code className="code">setInterval</code> is the basis of how you create
        a timer. But the trick comes from knowing how to interact with it and to
        clean it up correctly to avoid adverse behavior.
      </p>
      <h3>useRef rather than useState</h3>
      <p>
        To keep track of the timer we need to store it in a{" "}
        <code className="code">useRef</code>. Now we are confident that when the
        page rerenders we don&apos;t lose access to this reference. This is an
        appropriate use case for storing data in a reference that you can look
        up than with constant monitoring that you get with state.
      </p>
      <h3>User interaction</h3>
      <p>
        For the user to interact with the timer you need 3 buttons and 3
        functions: <code className="code">handleStart</code>,{" "}
        <code className="code">handleStop</code> and{" "}
        <code className="code">handleReset</code>. The functions for each of
        these are very simple to update the status of the timer.
      </p>
      <h3>How to use useEffect</h3>
      <p>
        However, logically you will handle the timer with the use of{" "}
        <code className="code">status</code> and{" "}
        <code className="code">useEffect</code>. Here&apos;s the breakdown of
        the <code className="code">useEffect</code> code:
      </p>
      <p>
        The key to implementation is in the{" "}
        <code className="code">dependency array</code> in the{" "}
        <code className="code">useEffect</code> function. If{" "}
        <code className="code">status</code> is updated, the component will be
        rerendered.
      </p>
      <p>
        A <code className="code">status</code> of true, tells us that the timer
        should be running. The if statement checks if this is true and creates a{" "}
        <code className="code">setInterval</code>. If{" "}
        <code className="code">status</code> is false, meaning the timer should
        not be running, then we need to remove the{" "}
        <code className="code">setInterval</code> reference. This is why it was
        key to have this stored in a reference.
      </p>
      <h3>Keep it clean with useEffect cleanup function</h3>
      <p>
        Note that in <code className="code">useEffect</code> there is a return
        statement. This is standard practice to{" "}
        <code className="code">cleanup</code> functions that may be running when
        the component is unmounted. Otherwise this could lead to memory
        overload.
      </p>
    </>
  );
};

export default Explanation;
