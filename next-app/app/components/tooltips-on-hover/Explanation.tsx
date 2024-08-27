const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>
        An <code className="code">unordered list</code> with{" "}
        <code className="code">list items</code> each with a{" "}
        <code className="code">
          span as the <code className="code">tooltip</code>
        </code>
        .
      </p>
      <h3>The CSS</h3>
      <p>
        The <code className="code">list element</code> needs a{" "}
        <code className="code">relative position</code>. The{" "}
        <code className="code">tooltip</code> can then use{" "}
        <code className="code">position absolute</code> which will use the{" "}
        <code className="code">list container</code> as the parent.
      </p>
      <p>
        As the span will now align all position values relative to the{" "}
        <code className="code">li element</code>.
      </p>
      <p>
        In this example the positioning is off to the right with a{" "}
        <code className="code">-130px</code> from the right of the container.
      </p>
      <h3>Aligning vertically</h3>
      <p>To get a centrally aligned vertical height, you need a trick.</p>
      <p>
        <code className="code">top: 50%</code> will move the span down relative
        to the top of itself. So you then have to{" "}
        <code className="code">translate</code> the span up by{" "}
        <code className="code">50%</code> which moves it by 50% of it&apos;s own
        height.
      </p>
      <h3>Visibility vs Display</h3>
      <p>
        The <code className="code">visibility</code> attribute will keep the
        element in the HTML DOM structure where as the{" "}
        <code className="code">display</code> attribute adds or removes it from
        the DOM.
      </p>
      <p>
        This is relevant because while both will work, you will get adverse
        effects in spacing as the structure could &apos;jump&apos; around when
        using <code className="code">display</code>.
      </p>
    </>
  );
};

export default Explanation;
