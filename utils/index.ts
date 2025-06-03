/**
 * @param path - should have "/" as prepend of path.
 * @returns 
 */
export const publicAssetPath = (path: string) => {
  return `${useRuntimeConfig().app.baseURL}${path}`;
}
