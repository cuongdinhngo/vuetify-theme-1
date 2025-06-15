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

export const formatTimeAgo = (timestamp: string | Date) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  // Less than 1 minute
  if (diffInSeconds < 60) {
    return 'now';
  }

  // Minutes
  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) {
    return `${minutes}m`;
  }

  // Hours
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h`;
  }

  // Days
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days}d`;
  }

  // Weeks (instead of months)
  const weeks = Math.floor(days / 7);
  if (weeks < 52) {
    return `${weeks}w`;
  }

  // Years
  const years = Math.floor(days / 365);
  return `${years}y`;
};

export const getRandomPhoto = (id: number, {width, height}: {width: number, height: number}) => {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}
