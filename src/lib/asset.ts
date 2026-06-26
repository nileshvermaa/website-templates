// Prefix a /public path with the production basePath.
// Use for RAW <img src>, <video src>, <object data>, fetch(), and CSS url().
// Do NOT use for next/image or next/link `href` — those prepend basePath automatically.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
