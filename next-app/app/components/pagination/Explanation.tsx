const Explanation = () => {
  return (
    <>
      <h3>The HTML Structure</h3>
      <p>Let&apos;s look at displaying the data and outputting the buttons.</p>
      <h4>The Content</h4>
      <p>
        The content is a list so to follow good semantic HTML practice it uses a
        list container.
      </p>
      <p>
        To render the data to the page, <code className="code">map</code> over
        the data array and return <code className="code">li</code> elements.
      </p>
      <h4>The pagination buttons</h4>
      <p>
        The number of page buttons is dependant on the amount of data so you
        will also <code className="code">map</code> these out. The page number
        is passed down to the element. Styling is conditional on whether it is
        the current page.
      </p>
      <h3>Handling the page numbers</h3>
      <p>
        The pages needed is calculated by dividing the number of items by the
        number you want on each page. Three has been chosen for this example.
      </p>
      <p>
        Make an array with the number of pages then cycle through the values
        adding numbers starting from 1.
      </p>
      <h3>Showing the data for that page</h3>
      <p>
        This is calculated at <code className="code">pageList</code>. Take the
        page you are on (zero-indexed) and go up to the next page. Multiply that
        calculation by the number of items per page.
      </p>
      <h3>Handling the page button function</h3>
      <p>
        Each page button has the <code className="code">onClick</code> function,{" "}
        <code className="code">handlePageChange</code> attached. Note how it is
        written, <code className="code">() =&gt; handlePageChange(page)</code>.
        This allows you to pass the page number back to the function to work
        with and apply the function to all button elements without having to
        hard-code the page values.
      </p>
      <h3>Keeping track of the page number</h3>
      <p>
        The simplest part of the setup is keeping track of the current page with{" "}
        <code className="code">useState</code>, for the value,{" "}
        <code className="code">currentPage</code>.
      </p>
      <p>
        This leaves the function, <code className="code">handlePageChange</code>{" "}
        with only one job to do, <code className="code">setCurrentPage</code>.
      </p>
      <h3>Bonus notes</h3>
      <p>
        Check out the{" "}
        <code className="code">
          aria-label=&#123;&#96;Go to page &#123;page&#125;&#96;&#125;
        </code>{" "}
        on the pagination button. It&apos;s a small edit that makes the button
        useful for screen readers.
      </p>
    </>
  );
};

export default Explanation;
