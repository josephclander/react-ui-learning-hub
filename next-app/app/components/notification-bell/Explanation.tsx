const Explanation = () => {
  return (
    <>
      <h3>Bell Icon and Notification Badge</h3>
      <p>
        The bell icon serves as a visual indicator that users can click to check
        their messages. The red badge is only displayed when there are unread
        notifications. This is controlled by the{" "}
        <code className="code">isViewed</code> state, and the state toggles to
        remove the badge once the button is clicked.
      </p>

      <h3>Accessibility</h3>
      <p>
        Accessibility is improved with the use of the{" "}
        <code className="code">aria-label</code> attribute, which provides a
        descriptive label for screen readers. This allows users with
        disabilities to understand what the bell icon is for.
      </p>

      <h3>State Management</h3>
      <p>
        The component uses the <code className="code">useState</code> hook to
        track whether the notifications have been viewed. The state{" "}
        <code className="code">isViewed</code> is initially set to{" "}
        <code className="code">false</code>
        and changes to <code className="code">true</code> once the bell is
        clicked, which reveals the message dropdown and hides the notification
        badge.
      </p>

      <h3>Dropdown for Messages</h3>
      <p>
        When the bell icon is clicked, the message dropdown is rendered using an
        unordered list. Each message from the{" "}
        <code className="code">messages</code> array is displayed inside a
        styled list item. This provides users with a simple and clear way to see
        their notifications.
      </p>

      <h3>CSS Styling</h3>
      <p>
        The bell icon is styled to be an appropriate size and position, with the
        red badge being placed in the top-right corner by using{" "}
        <code className="code">position absolute</code>. The badge is styled
        with a red background and is shaped like a circle. The dropdown messages
        are styled with borders and padding for readability and visual
        distinction.
      </p>
    </>
  );
};

export default Explanation;
