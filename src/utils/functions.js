export const getImages = (event, limit) => {
  let images = []
  for (let i = 0; i < limit; i++) {
    for (let ext of ['.jpg', '.png', '.gif']) {
      try {
        images.push(require(`../assets/images/${event}/${i + 1}${ext}`))
        break
      } catch (e) {}
    }
  }
  return images
}
