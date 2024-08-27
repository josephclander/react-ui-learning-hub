const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>
        A <code className="code">form</code> element with an{" "}
        <code className="code">onSubmit</code> attribute set to{" "}
        <code className="code">handleSubmit</code>.
      </p>
      <p>
        Multiple <code className="code">label</code> and{" "}
        <code className="code">input</code> elements linked by the{" "}
        <code className="code">htmlFor</code> and{" "}
        <code className="code">id</code> attributes.
      </p>
      <h3>The functions</h3>
      <p>
        Several functions are used to handle all three types of state. There are{" "}
        <code className="code">standard state</code>,{" "}
        <code className="code">partnerToggle</code> and multiple{" "}
        <code className="code">item</code> inputs.
      </p>
      <h4>Hold state in formState</h4>
      <p>
        There are many moving parts, rather than keeping each in a separate
        variable, they are all kept together with room to include the extra
        values that can be dynamically added.
      </p>
      <h4>Standard input functions</h4>
      <p>
        The <code className="code">handleInputChange</code> function receives a
        string with the key of the field to update. This reduces the amount of
        functions needed to update state.
      </p>
      <p>
        A functional state update allows the previous state to be added using
        the <code className="code">spread operator</code>. The{" "}
        <code className="code">spread operator</code> takes the state object and
        only updates <code className="code">[field]: event.target.value</code>{" "}
        in the object.
      </p>
      <h4>toggleShowPartner function</h4>
      <p>
        This takes the previous state object and toggles the{" "}
        <code className="code">showPartner</code> value.
      </p>
      <h4>AddItemHandler function</h4>
      <p>
        A new item is created where the <code className="code">id</code> is
        created using the current date and for safety, the{" "}
        <code className="code">formState.items.length</code> is added which will
        change between every newly added item.
      </p>
      <p>
        The new item is added to the previous items array using a{" "}
        <code className="code">functional state update</code> and the{" "}
        <code className="code">spread operator</code>
      </p>
      <h4>deleteItemHandler function</h4>
      <p>
        The item <code className="code">id</code> is passed from the element
        back to the function. The current state is retrieved, and the items is
        filtered using the <code className="code">filter</code> method to return
        items that <em>do not</em> have that id.
      </p>
      <h4>handleSubmit function</h4>
      <p>
        When submitting a form, the usual action is to send the data and refresh
        the page. To stop this{" "}
        <code className="code">event.preventDefault</code> is called. The data
        is logged to the console in this example.
      </p>
      <h3>formState showPartner</h3>
      <p>
        The <code className="code">showPartner</code> state is used with a{" "}
        <code className="code">ternary operator</code> to conditionally render
        the text, &apos;Remove&apos; or &apos;Add&apos;, to the button.
      </p>
      <p>
        The input for partner is conditionally rendered using{" "}
        <code className="code">short-circuit evaluation</code>.
      </p>
      <h3>formState.items</h3>
      <p>
        The current items are rendered to the page using the{" "}
        <code className="code">map</code> array method. Each one has an
        anonymous<code className="code">onChange</code> function that takes all
        the previous items and adds the new content into the items array.{" "}
        <code className="code">setFormState</code> then updates{" "}
        <code className="code">formState</code>.
      </p>
    </>
  );
};

export default Explanation;
