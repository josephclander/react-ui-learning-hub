const Explanation = () => {
  return (
    <>
      <h3>isDark useState</h3>
      <p>
        The user preference for <code className="code">light</code> or{" "}
        <code className="code">dark</code> mode is stored in the state variable,{" "}
        <code className="code">isDark</code>.
      </p>
      <h3>toggleDarkMode function</h3>
      <p>
        The <code className="code">toggleDarkMode</code> function very simply
        returns the opposite of the current state. This is attached to the{" "}
        <code className="code">Toggle Theme</code> button.
      </p>
      <h3>Adding the style to elements</h3>
      <p>
        A conditional style has been added to the container element with a{" "}
        <code className="code">ternary operator</code> with either{" "}
        <code className="code">lightMode</code> and{" "}
        <code className="code">darkMode</code> being assigned.
      </p>
      <h3>The trick to changing the styles in CSS</h3>
      <p>
        The use of <code className="code">CSS Variables</code> controls the
        output colours.
      </p>
      <p>
        Both <code className="code">lightMode</code> and{" "}
        <code className="code">darkMode</code> have their own values for the
        variables <code className="code">--fontColor</code> and{" "}
        <code className="code">--bgColor</code>.
      </p>
      <p>
        Look to the other CSS classes to see how those variables have been used
        to assign key colours. This means they can alter based off of which of
        the two classes <code className="code">lightMode</code> or{" "}
        <code className="code">darkMode</code> is used.
      </p>
    </>
  );
};

export default Explanation;
