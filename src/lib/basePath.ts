// next/image with images.unoptimized (required for GitHub Pages static export)
// doesn't auto-prefix local src paths with basePath, so we do it ourselves.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
