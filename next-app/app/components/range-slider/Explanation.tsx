const Explanation = () => {
  return (
    <>
      <h3>Range Slider and State Management</h3>
      <p>
        The user can select a value from 0 to 10 using a range slider in this
        example. The current value of the slider is stored in the state using
        the <code className="code">useState</code> hook. The default value is
        set to 5 to be precise, but the inbuilt default will be the middle of
        the range.
      </p>
      <p>
        When the user interacts with the slider, the{" "}
        <code className="code">handleChange</code> function is triggered. The
        slider&apos;s value is obtained from the event and is converted to an
        integer using <code className="code">parseInt</code>. The state is then
        updated to reflect the selected value.
      </p>

      <h3>Displaying the Selected Value</h3>
      <p>
        The selected value is displayed dynamically in a{" "}
        <code className="code">p</code> tag and controlled through the{" "}
        <code className="code">value state</code>.
      </p>

      <h3>Range Slider Configuration</h3>
      <p>
        The range input field is configured with a minimum value of 0 and a
        maximum value of 10. The <code className="code">step</code> property is
        set to 1, meaning users can only select whole numbers.
      </p>
      <p>
        The <code className="code">datalist</code> element is used to create
        ticks and is valid across browsers. Unfortunately, labels are not widely
        available.
      </p>

      <h3>Handling Edge Cases</h3>
      <p>
        To handle any potential edge cases, the{" "}
        <code className="code">handleChange</code> function includes a fallback
        value of 5 (the midpoint of the range) in case the input is invalid or
        cannot be parsed into an integer. This ensures that the slider will
        always have a valid value.
      </p>
    </>
  );
};

export default Explanation;
