const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>
        The tabs are stored in an <code className="code">unordered list</code>.
        Each <code className="code">list</code> item has an{" "}
        <code className="code">onClick</code> function and a dynamic{" "}
        <code className="code">class name</code>.
      </p>
      <p>The content is handled through an object lookup.</p>
      <h3>The activeTab state</h3>
      <p>
        The <code className="code">activeTab</code> value is stored in{" "}
        <code className="code">state</code> and is set via the{" "}
        <code className="code">clickHandler</code> function.
      </p>
      <h3>The clickHandler function</h3>
      <p>When a tab is clicked, it&apos;s name is set in state.</p>
      <h3>Conditional styling for tabs</h3>
      <p>
        Each <code className="code">list item</code> shares basic styles and the{" "}
        <code className="code">active</code> style is added conditionally based
        on the value of <code className="code">activeTab</code>.
      </p>
      <h3>The dynamic content</h3>
      <p>
        For speed and reduced complexity, the content for each tab is stored in
        an object. In the <code className="code">section</code> element,{" "}
        <code className="code">content[activeTab]</code> uses the{" "}
        <code className="code">activeTab</code> as the object key to return the
        correct content.
      </p>
    </>
  );
};

export default Explanation;
