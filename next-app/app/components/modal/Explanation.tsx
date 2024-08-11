const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>You have a container div and the modal. The modal has a button.</p>
      <h3>Showing the Modal</h3>
      <p>
        The button&apos;s <code className="code">onClick</code> property is
        hooked up to a <code className="code">turnOnModal</code> function. This
        simple function along with <code className="code">turnOffModal</code>,
        control the <code className="code">useState</code> value,{" "}
        <code className="code">showModal</code>.
      </p>
      <p>
        The short-circuit evalutation <code className="code">&&</code> allows
        the modal to be shown conditionally on whether{" "}
        <code className="code">showModal</code> is true or false.
      </p>
      <h3>Hiding the Modal button</h3>
      <p>
        A button is present on the modal with the function{" "}
        <code className="code">turnOffModal</code>.
      </p>
      <h3>Hiding the modal on container click</h3>
      <p>This requires more thought.</p>
      <p>
        The container has the <code className="code">onClick</code> property
        linked to <code className="code">turnOffModal</code> but there&apos;s
        and issue. With <code className="code">event propagation</code> if we
        don&apos;t specify that the part of the container that is clicked on, is{" "}
        <em>actually</em> the container, and not the modal, then clicking the
        modal will <em>also</em> close the modal. This would mean you cannot
        interact with the modal or any of the contents inside it. Hence the{" "}
        <code className="code">if statement</code>.
      </p>
    </>
  );
};

export default Explanation;
