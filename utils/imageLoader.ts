import { ImageLoader, ImageLoaderProps } from "next/image"
import { $imageApi } from "../api"

export const serverLoader: ImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${$imageApi}/${src}`
}

export const localLoader = (src: string) => {
  return `/${src}`
}