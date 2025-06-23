export const getImageUrl = (imageName: string | undefined, imageFolder: string) => {
  const imageUrlGlob: Record<string, any> = import.meta.glob('../assets/images/**/*', {
    eager: true,
    query: 'url',
  })
  console.log(imageFolder)
  console.log(imageName)
  return imageUrlGlob[`../assets/images/${imageFolder}/${imageName}`].default
}

export const getVideoUrl = (videoName: string | undefined) => {
  const imageUrlGlob: Record<string, any> = import.meta.glob('../assets/videos/**/*', {
    eager: true,
    query: 'url',
  })
  return imageUrlGlob[`../assets/videos/${videoName}`].default
}

export const getAudioUrl = (audioName: string | undefined) => {
  const imageUrlGlob: Record<string, any> = import.meta.glob('../assets/audio/**/*', {
    eager: true,
    query: 'url',
  })
  return imageUrlGlob[`../assets/audio/${audioName}`].default
}
