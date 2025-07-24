import { Url } from "next/dist/shared/lib/router/router"
import { StaticImageData } from "next/image"

export type ButtonProp= {
    children: string
    link?: string | Url
    classname?: string
    onClick?: () => void
  }

export type UseModalProp= {
    children: string
    link?: string | Url
    type: string
    onClick?: () => void
  }

export type ProductsProp = {
    product: {
    img: string,
    img2: string
    title: string,
    desc: string
    },
    index: number
}

export type ProductCardProp = {
  src: StaticImageData
}

export type SocialsProp = {
  styles?: string
}

export type PageHeroProps = {
  children: string
  bg: StaticImageData
}

export type TeamCardProp = {
  data: {
    src: StaticImageData | string,
    name: string,
    title: string
  }
 }

 export type FilterButtonProps = {
  children: React.ReactNode
  filter: string
  active: string
}

export interface ContactData {
  name: string,
  email:string,
  phone: string,
  message: string,
  isSubscribe: string,
}