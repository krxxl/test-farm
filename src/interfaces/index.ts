import {InputHTMLAttributes} from "react";


export interface IcartItem {
  id: number,
  title: string,
  img: string,
  price: number,
  quantity: number,
  shopQuantity: number,
  isAdded?: boolean
}

export interface Ibutton {
  children?: React.ReactNode,
  disabled?: boolean | undefined,
  onClick?: () => void,
  className?: string,
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  className: string
}