const Explanation = () => {
  return (
    <>
      <p>
        For this example the weather is predetermined. The pattern is to obtain
        the user&apos;s selection via a <code className="code">useRef</code> on
        the input.
      </p>
      <p>
        The <code className="code">handleSelect</code> function is attached to
        the <code className="code">onChange</code> event listener. The input is
        compared via an object for most efficient lookup speed. We then use{" "}
        <code className="code">useState</code> to update state with the
        response.
      </p>
      <p>
        Notice that the selection is checked before being used. Also a check is
        made to see if a selection exists before rendering to the page.
      </p>
    </>
  );
};

export default Explanation;
