type ImageModule = { default?: string }

export const getImageUrl = (imageName: string | undefined, imageFolder: string) => {
  const imageUrlGlob: Record<string, ImageModule> = import.meta.glob('../assets/images/**/*', {
    eager: true,
    query: 'url'
  })
  return imageUrlGlob[`../assets/images/${imageFolder}/${imageName}`]?.default
}
