const Explanation = () => {
  return (
    <>
      <h3>JS Drag & Drop API</h3>
      <p>
        The solution mimics the pattern for vanilla JavaScript with the
        exception that it uses <code className="code">state</code> and{" "}
        <code className="code">refs</code> to keep track of the elements.
      </p>
      <h3>The HTML structure</h3>
      <p>
        We have 2 main div containers, the first of which has two items. The 2
        parent containers have the properties{" "}
        <code className="code">onDrop</code> and{" "}
        <code className="code">onDragOver</code> and a{" "}
        <code className="code">ref</code> to make sure we can access which{" "}
        <code className="code">dropZone</code> we are targetting.
      </p>
      <p>
        The items currently placed in the first container have the properties{" "}
        <code className="code">draggable</code> and{" "}
        <code className="code">onDragStart</code>.{" "}
        <code className="code">draggable</code> tells the API that the element
        can be dragged. <code className="code">onDragStart</code> allows us to
        know which element is being dragged.
      </p>
      <h3>dragStartHandler</h3>
      <p>
        When the draggable item begins to be moved, this triggers a{" "}
        <code className="code">drag event</code>. The{" "}
        <code className="code">dragStartHandler</code> function takes the
        current property of the ref and tells us which item is being dragged.
        This is stored in <code className="code">state</code> as{" "}
        <code className="code">draggedItem</code>.
      </p>
      <h3>dragOverHandler</h3>
      <p>
        This function is present to allow dragging and provide the animation.
      </p>
      <h3>dropHandler</h3>
      <p>
        Now to drop the item, the <code className="code">dropHandler</code>{" "}
        function establishes if we are over a box by looking for the{" "}
        <code className="code">box</code> style. Then if that is true and we
        have a <code className="code">draggedItem</code> (which we do), then it
        will append the draggedItem to the box.
      </p>
    </>
  );
};

export default Explanation;
