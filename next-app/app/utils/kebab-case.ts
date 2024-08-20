function titleToKebabCase(title: string): string {
  return title
    .toLowerCase() // Convert the string to lowercase
    .trim() // Trim any leading or trailing whitespace
    .replace(/[^a-z0-9\s]/g, "") // Remove any non-alphanumeric characters except spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading or trailing hyphens
}

export default titleToKebabCase;
