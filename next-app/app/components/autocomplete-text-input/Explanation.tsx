const Explanation = () => {
  return (
    <>
      <h3>Input and Autocomplete Logic</h3>
      <p>
        The input field allows users to type in the name of a programming
        language. The component has a state for the{" "}
        <code className="code">input</code> value and a{" "}
        <code className="code">highlightedSuggestion</code>, which holds the
        first matching suggestion from the{" "}
        <code className="code">programmingLanguages</code> array.
      </p>
      <p>
        As the user types, the <code className="code">handleChange</code>{" "}
        function is called, updating the input value and filtering the array for
        languages that match the current input. If any match is found, the first
        one is displayed as the suggestion.
      </p>

      <h3>Handling Autocomplete Suggestions</h3>
      <p>
        The suggestion system works by comparing the user&apos;s input to the
        start of each item in the{" "}
        <code className="code">programmingLanguages</code> array. The match is
        case-insensitive and the first match is set as the autocomplete
        suggestion, which is visually hinted to the user.
      </p>
      <p>
        If no match is found, or the input field is empty, the{" "}
        <code className="code">highlightedSuggestion</code> is cleared, and no
        hint is displayed. This ensures that irrelevant suggestions are not
        shown.
      </p>

      <h3>Handling Keyboard Events</h3>
      <p>
        The <code className="code">handleKeyDown</code> function captures the
        <code className="code">Tab</code> key press event. If the user presses{" "}
        <code className="code">Tab</code> and there is a suggestion available,
        the input is automatically filled with the suggestion.
      </p>
      <p>
        The function also prevents the default tab behavior to avoid shifting
        focus when auto-completing the input. This makes the suggestion process
        more fluid for the user.
      </p>

      <h3>CSS Styling for Autocomplete</h3>
      <p>
        The CSS controls both the input field and the autocomplete suggestion.
        The{" "}
        <code className="code">autocompleteWrapper</code> ensures the suggestion
        is positioned correctly and doesn&apos;t interfere with the input. The
        suggestion is styled to overlay on top of the input field, with part of
        the text displayed in light grey to indicate what will be completed.
      </p>
      <p>
        The input text that has already been typed is set to transparent to
        visually merge with the suggestion. This gives the user the illusion
        that they are typing, while the suggestion helps guide them to complete
        the input.
      </p>
    </>
  );
};

export default Explanation;
