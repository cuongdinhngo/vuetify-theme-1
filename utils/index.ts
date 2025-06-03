/**
 * @param path - should have "/" as prepend of path.
 * @returns 
 */
export const publicAssetPath = (path: string) => {
  return `${useRuntimeConfig().app.baseURL}${path}`;
}

export const dashboardImgPath = (img: string) => {
return `${useRuntimeConfig().app.baseURL}/images/dashboard/${img}`;
}
