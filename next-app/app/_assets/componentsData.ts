export type ComponentProps = {
  id: number;
  slug: string;
  title: string;
  details: string;
  complete: boolean;
};

export const componentsData = {
  accordion: {
    id: 1,
    slug: "accordion",
    title: "Accordion",
    details:
      "Build an accordion/dropdown where sections expand or collapse when their headers are clicked.",
    complete: true,
  },
  "autocomplete-text-input": {
    id: 2,
    slug: "autocomplete-text-input",
    title: "Autocomplete Text Input",
    details:
      "Develop a text input that suggests possible completions as the user types, pulling from a predefined list of options.",
    complete: false,
  },
  "calendar-picker": {
    id: 3,
    slug: "calendar-picker",
    title: "Calendar Picker",
    details:
      "Create a date picker that users can use to select a date from a simple calendar view.",
    complete: false,
  },
  carousel: {
    id: 4,
    slug: "carousel",
    title: "Carousel",
    details:
      "Implement a basic image carousel with 'next' and 'previous' buttons to cycle through images.",
    complete: true,
  },
  "chat-bubble-ui": {
    id: 5,
    slug: "chat-bubble-ui",
    title: "Chat Bubble UI",
    details:
      "Build a chat bubble interface where messages can be typed into a text box and submitted to appear as chat bubbles.",
    complete: false,
  },
  "clipboard-copy": {
    id: 6,
    slug: "clipboard-copy",
    title: "Clipboard Copy",
    details:
      "Create a component with a text box and a button that copies the text in the box to the clipboard when clicked.",
    complete: true,
  },
  "collapsible-side-menu": {
    id: 7,
    slug: "collapsible-side-menu",
    title: "Collapsible Side Menu",
    details:
      "Build a side menu that can be toggled to expand or collapse when clicking a menu icon.",
    complete: false,
  },
  counter: {
    id: 8,
    slug: "counter",
    title: "Counter",
    details:
      "Create a component that shows a number (starts from 0). Add two buttons to increment and decrement the counter.",
    complete: true,
  },
  "countdown-timer": {
    id: 9,
    slug: "countdown-timer",
    title: "Countdown Timer",
    details:
      "Create a countdown timer where users can set a duration, and it counts down to zero with updates displayed visually.",
    complete: true,
  },
  "currency-converter": {
    id: 10,
    slug: "currency-converter",
    title: "Currency Converter",
    details:
      "Build a small interface to convert amounts from one currency to another using static exchange rates.",
    complete: true,
  },
  "data-fetch-and-display": {
    id: 11,
    slug: "data-fetch-and-display",
    title: "Data Fetch and Display",
    details:
      "Make a component that fetches data from a public API and displays it in a list or table format.",
    complete: false,
  },
  "drag-and-drop-interface": {
    id: 12,
    slug: "drag-and-drop-interface",
    title: "Drag and Drop Interface",
    details:
      "Implement a basic drag and drop interface where users can move items between different containers.",
    complete: false,
  },
  "dynamic-form-builder": {
    id: 13,
    slug: "dynamic-form-builder",
    title: "Dynamic Form Builder",
    details:
      "Build a form where users can dynamically add or remove input fields (like text boxes or dropdowns).",
    complete: false,
  },
  "image-zoom-viewer": {
    id: 14,
    slug: "image-zoom-viewer",
    title: "Image Zoom Viewer",
    details:
      "Create a component that allows users to hover over an image to view a magnified version of the part their cursor is over.",
    complete: false,
  },
  modal: {
    id: 15,
    slug: "modal",
    title: "Modal",
    details:
      "Implement a modal window that opens with a button click and can be closed with a close button or by clicking outside the modal.",
    complete: false,
  },
  "multi-select-dropdown": {
    id: 16,
    slug: "multi-select-dropdown",
    title: "Multi-Select Dropdown",
    details:
      "Create a dropdown where users can select multiple options either by clicking or typing.",
    complete: false,
  },
  "notification-bell": {
    id: 17,
    slug: "notification-bell",
    title: "Notification Bell",
    details:
      "Implement a bell icon that shows a red notification badge; clicking on the bell shows a dropdown with messages.",
    complete: false,
  },
  pagination: {
    id: 18,
    slug: "pagination",
    title: "Pagination",
    details:
      "Build a component that shows numbered pages and allows users to click through pages of data (data can be static).",
    complete: false,
  },
  "password-visibility-toggle": {
    id: 19,
    slug: "password-visibility-toggle",
    title: "Password Visibility Toggle",
    details:
      "Create a password input field with a toggle button that shows or hides the password.",
    complete: false,
  },
  "progress-bar": {
    id: 20,
    slug: "progress-bar",
    title: "Progress Bar",
    details:
      "Implement a progress bar that updates based on a value input by the user.",
    complete: false,
  },
  "range-slider": {
    id: 21,
    slug: "range-slider",
    title: "Range Slider",
    details:
      "Develop a range slider component for selecting a value within a specified range.",
    complete: false,
  },
  "search-filter-for-list": {
    id: 22,
    slug: "search-filter-for-list",
    title: "Search Filter for List",
    details:
      "Develop a component that filters items in a list based on a text input search query.",
    complete: false,
  },
  "simple-blog-post-editor": {
    id: 23,
    slug: "simple-blog-post-editor",
    title: "Simple Blog Post Editor",
    details:
      "Create a text input area where users can enter a title and content for a blog post, and submit it with a button.",
    complete: false,
  },
  "star-rating": {
    id: 24,
    slug: "star-rating",
    title: "Star Rating",
    details:
      "Develop a star rating component where users can set a rating by clicking on stars.",
    complete: false,
  },
  "tab-selector": {
    id: 25,
    slug: "tab-selector",
    title: "Tab Selector",
    details:
      "Create a component with multiple tabs for users to click through. Display different content as each tab is selected.",
    complete: false,
  },
  "theme-switcher": {
    id: 26,
    slug: "theme-switcher",
    title: "Theme Switcher",
    details:
      "Build a toggle that switches the color scheme of the page between light and dark modes.",
    complete: false,
  },
  timer: {
    id: 27,
    slug: "timer",
    title: "Timer",
    details:
      "Develop a timer where users can start, stop, and reset. Display the time in a digital format.",
    complete: true,
  },
  "todo-list": {
    id: 28,
    slug: "todo-list",
    title: "Todo List",
    details:
      "Develop a simple todo list where users can add items to a list using a text input and a button. Items should also be removable.",
    complete: true,
  },
  "tooltips-on-hover": {
    id: 29,
    slug: "tooltips-on-hover",
    title: "Tooltips on Hover",
    details:
      "Implement tooltips that appear when hovering over different elements, providing additional information.",
    complete: false,
  },
  "weather-display-widget": {
    id: 30,
    slug: "weather-display-widget",
    title: "Weather Display Widget",
    details:
      "Create a component that displays the weather (e.g. sunny, rainy) based on a predefined location. Allow users to change the location from a dropdown.",
    complete: true,
  },
};
