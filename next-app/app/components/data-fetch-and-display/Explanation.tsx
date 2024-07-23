const Explanation = () => {
  return (
    <>
      <h3>Before we start</h3>
      <p>
        Before starting, it&apos;s worth mentioning that this is not a barebones
        approach to creating a data fetching component. In this React component
        you will see loading messages, error handling,{" "}
        <code className="code">TypeScript</code> types, abstraction and{" "}
        <code className="code">custom hooks</code>.
      </p>
      <h3>The Solution Component</h3>
      <p>
        Focusing at the root level, we can see the custom hook,{" "}
        <code className="code">useFetchUsers()</code> and the structure of the{" "}
        <code className="code">HTML</code>. We pull in{" "}
        <code className="code">users</code>,{" "}
        <code className="code">isLoading</code> and{" "}
        <code className="code">error</code> to output the fetched content from
        the API.
      </p>
      <p>
        Notice the pattern{" "}
        <code className="code">isLoading && &lt;p&gt;Loading...&lt;/p&gt;</code>
        . This is called <code className="code">short-cicuit evaluation</code>{" "}
        and is a quick way to check that the value exists, and if it does, show
        the component. We did the same with the{" "}
        <code className="code">error</code> component.
      </p>
      <h3>Displaying the data</h3>
      <p>
        It&apos;s important to use <code className="code">semantic HTML</code>{" "}
        when structuring your code. This is the proper way to display a list.
      </p>
      <p>
        Then we use the <code className="code">map</code> function to produce a
        list of the users. Notice that we&apos;ve abstracted the{" "}
        <code className="code">li</code> element into a{" "}
        <code className="code">User</code> component. We supply a key and the
        user data.
      </p>
      <h3>The User Component</h3>
      <p>
        This is a simple <code className="code">li</code> component that uses{" "}
        <code className="code">optional chaining</code> (the ?) to only execute
        if the value exists.
      </p>
      <h3>fetchUserData function</h3>
      <p>
        This follows a standard pattern using the{" "}
        <code className="code">fetch</code> API. Note that we are using an{" "}
        <code className="code">async</code> function because it is asynchronous.{" "}
      </p>
      <p>
        We check to see if there is an OK response header. Before converting the{" "}
        <code className="code">JSON</code> into readable{" "}
        <code className="code">JavaScript</code> and returning the data array.
      </p>
      <h3>useFetchUsers custom hook</h3>
      <p>
        To abstract the logic we&apos;ve used a custom hook. We keep the{" "}
        <code className="code">state</code> of{" "}
        <code className="code">users</code>,{" "}
        <code className="code">isLoading</code> and{" "}
        <code className="code">error</code>.
      </p>
      <p>
        <code className="code">useEffect</code> then runs when the component is
        loaded, and only once. This is set by leaving the{" "}
        <code className="code">dependency array</code> empty.
      </p>
      <p>
        Since the fetch is asynchronous, we use an{" "}
        <code className="code">async</code> function and a{" "}
        <code className="code">trycatch</code> block.
      </p>
      <p>
        Note the use of <code className="code">finally</code> to reset{" "}
        <code className="code">loading</code> to false regardless of outcome.
      </p>
      <p>To finish our custom hook we return the useful variables.</p>
    </>
  );
};

export default Explanation;
