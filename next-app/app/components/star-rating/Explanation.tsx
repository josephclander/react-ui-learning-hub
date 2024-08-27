const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>
        An <code className="code">unordered list</code> that displays 5 button
        elements. The text content of each button is either a filled in star or
        an empty one.
      </p>
      <h3>The rating state</h3>
      <p>
        The current rating of the star is set to 3 using{" "}
        <code className="code">useState</code>.
      </p>
      <h3>Displaying the correct number of filled stars</h3>
      <p>
        The number of stars is created by using an array with values 1 to 5. The
        array is mapped over and the button attributes are determined using this
        index value.
      </p>
      <p>
        If the rating stored in <code className="code">rating</code> state, is
        higher than or equal to the current index value, the button text is set
        to a full star.
      </p>
      <h3>The button attributes</h3>
      <p>
        The <code className="code">aria-label</code> ensures screen readers
        understand what the star on the button means.
      </p>
      <p>
        The <code className="code">key</code> is required on list items rendered
        by React.
      </p>
      <p>
        The <code className="code">style</code> attribute has a function,{" "}
        <code className="code">getStarRating</code> to determine if it should be
        an empty or filled star.
      </p>
      <p>
        The <code className="code">onClick</code> function uses an arrow
        function to be able to send the index of the star to{" "}
        <code className="code">setRating</code>.
      </p>
      <h3>The button content and style</h3>
      <p>
        The content is determined by a{" "}
        <code className="code">ternary operator</code> that checks if the star{" "}
        <code className="code">isSelected</code>.
      </p>
      <p>A full star if it is, and empty if not.</p>
      <p>
        The transform is a <code className="code">scale</code> of{" "}
        <code className="code">1.2</code> if selected so that it is clear which
        value is selected for user experience.
      </p>
    </>
  );
};

export default Explanation;
