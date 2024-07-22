const Explanation = () => {
  return (
    <>
      <h3>The setup</h3>
      <p>I&apos;ve made 3 different flavours for you to learn.</p>
      <p>
        Each one consists of a <code className="code">list</code> with{" "}
        <code className="code">list items</code> placed within a{" "}
        <code className="code">container div</code>.
      </p>
      <h3>The trick</h3>
      <p>
        Most of this work can be achieved with <code className="code">CSS</code>{" "}
        alone. You need to set the container&apos;s{" "}
        <code className="code">overflow-x</code> property to{" "}
        <code className="code">scroll</code>.
      </p>
      <p>
        The buttons are linked via a <code className="code">ref</code>. When
        they are actioned, <code className="code">prevButton</code> and{" "}
        <code className="code">nextButton</code> will add or subtract an amount
        to the <code className="code">scrollLeft</code> property.
      </p>
      <p>
        The value you add is determined by the total width of each section
        including borders.
      </p>
      <h3>Extras</h3>
      <p>
        Add <code className="code">scroll-behaviour: smooth</code> to make sure
        the transitions don&apos;t <em>jump</em>.
      </p>
      <p>
        And add <code className="code">scroll-snap-type: x mandatory</code> if
        you want the sections to perfectly snap into place when scrolling.
      </p>
    </>
  );
};

export default Explanation;
