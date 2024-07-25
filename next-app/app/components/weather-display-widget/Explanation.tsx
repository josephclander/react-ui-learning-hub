const Explanation = () => {
  return (
    <>
      <h3>Getting the user&apos;s input</h3>
      <p>
        For this example the weather is predetermined. The pattern is to obtain
        the user&apos;s selection via a <code className="code">useRef</code> on
        the input.
      </p>
      <h3>The functions</h3>
      <p>
        The <code className="code">handleSelect</code> function is attached to
        the <code className="code">onChange</code> event listener. Whatever
        option the user selects will be referenced in the{" "}
        <code className="code">select</code> element. And that is what we are
        retrieving the information from.
      </p>
      <h3>Object rather than if or switch statements</h3>
      <p>
        The input is compared via an object for most efficient lookup speed.
        Without going to deep, this is more readable and uses less computing
        power than completing multiple checks.
      </p>
      <h3>Storing the response</h3>
      <p>
        We use <code className="code">useState</code> to update state with the
        response.
      </p>
      <h3>Defensive coding for a more robust component</h3>
      <p>
        Notice that the selection is checked before being used. Also a check is
        made to see if a selection exists before rendering to the page.
      </p>
    </>
  );
};

export default Explanation;
