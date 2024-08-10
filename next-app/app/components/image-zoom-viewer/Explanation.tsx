const Explanation = () => {
  return (
    <>
      <h3>HTML Structure</h3>
      <p>
        You have a <code className="code">NextJS</code>{" "}
        <code className="code">Image</code> tag and a container to control
        it&apos;s size.
      </p>
      <h3>NextJS Image tag</h3>
      <p>
        By using the built in framework tag instead of an{" "}
        <code className="code">img</code> tag, you get lots of benefits built
        in.
      </p>
      <p>
        Handling image loading and source sets is handled automatically.
        However, there are set properties you are required to provide. Note on
        the tag the <code className="code">fill</code> property.
      </p>
      <h3>Handling image size</h3>
      <p>
        <code className="code">NextJS</code> will automatically add width and
        height of 100% so you need to control size and responsiveness with a
        container.
      </p>
      <p>
        Looking at the <code className="code">.container</code> styles, you can
        see the full width is taken and we need to provide a height.
      </p>
      <p>
        Also the element has to have a{" "}
        <code className="code">position: relative</code> so that the{" "}
        <code className="code">Image</code> that has{" "}
        <code className="code">position: absolute</code> knows which parent to
        position too. Otherwise it could use the{" "}
        <code className="code">body</code> tag.
      </p>
      <h3>Creating the 'Zoom' effect</h3>
      <p>
        The principle behind this code is adding a zoom when the element is
        hovered over.
      </p>
      <p>
        To achieve this we track the pointer position when the pointer is over
        the container. Note on the container div two functions:{" "}
        <code className="code">onMouseMove</code> uses{" "}
        <code className="code">handleCursor</code> and{" "}
        <code className="code">onMouseLeave</code> will reset the tracked
        position with <code className="code">handleReset</code>.
      </p>
      <h3>handleCursor</h3>
      <p>
        <code className="code">getBoundingClientRect</code> returns positions of
        the offsets of the left and top part of the window.
      </p>
      <p>
        <code className="code">event.clientX</code> is providing the horizontal
        position of the mouse. To get it&apos;s real position, we need to remove
        the container&apos;s left offset from the window as well as the border
        width. The same is done in the vertical direction.
      </p>
      <p>
        The <code className="code">position state</code> is updated, and in turn
        used to update the position of the <code className="code">origin</code>{" "}
        (where the centre of the object is) which aligns with the position of
        the mouse.
      </p>
    </>
  );
};

export default Explanation;
