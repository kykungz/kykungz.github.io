export const getImages = (event, type, limit) => {
  let images = []
  for(let i = 0; i < limit; i++) {
    try {
      images = [...images, require(`../assets/images/${event}/${i+1}.${type}`)]
    } catch (e) {
      images = [...images, require(`../assets/images/${event}/${i+1}.png`)]
    }
  }
  return images
}
