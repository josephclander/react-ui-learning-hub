const Explanation = () => {
  return (
    <>
      <p>
        It&apos;s clear that you&apos;ll need to keep track of the count with
        the <code className="code">useState</code> hook. Using the{" "}
        <code className="code">onClick</code> event listener enables you to move
        the count up or down. I have created two distinct functions,{" "}
        <code className="code">handleAdd</code> and{" "}
        <code className="code">handleMinus</code> to keep the code clean.
      </p>
      <p>
        To make sure your counter component doesn&apos;t run into any conflicts
        of state, you need to write your handlers using a functional update
        rather than updating state directly.
      </p>
    </>
  );
};

export default Explanation;
