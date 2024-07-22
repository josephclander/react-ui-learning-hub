const Explanation = () => {
  return (
    <>
      <h3>The trick</h3>
      <p>
        With this component we want to be able to show and hide the list.
        That&apos;s the key!
      </p>
      <p>
        So it becomes more of a question of how to do that in an aesthetically
        pleasing way?
      </p>
      <p>
        If you toggle the <code className="code">display</code> property the
        content will <em>jump</em> as you change the HTML structure.
      </p>
      <p>
        Instead, we use the <code className="code">transform</code> property.
        This property doesn&apos;t affect the other elements in the DOM and
        stops you getting that <em>jump</em> effect.
      </p>
      <h3>The code</h3>
      <p>In this simple example, the <code className="code">container</code> section has a <code className="code">height</code> that we will match later on. And it has <code className="code">overflow</code> set to <code className="code">hidden</code>.</p>
      <p>But why?</p>
      <p>Now the <code className="code">click handler</code> will <code className="code">toggle</code>the <code className="code">showStyle</code> and the <code className="code">hideStyle</code>. Look closely and you will see that the <code className="code">translate</code> value shifts up in the y-coordinate by exactly the same height that we set the container to.</p>
      <p>You can of course style this better and use different effects, but the main takeaway is to use a <code className="code">non-layout-effecting</code> property. We&apos;ve used <code className="code">transform</code> but you can also use properties such as <code className="code">opacity</code> and <code className="code">filter.</code></p>
    </>
  );
};

export default Explanation;
