import {InputHTMLAttributes} from "react";
import React from "react";

export interface IProductItem {
  id: number,
  title: string,
  img: string,
  price: number,
  shopQuantity: number,
  isAdded?: boolean
}

export interface IcartItem extends IProductItem {
  quantity: number | undefined
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

export interface IProduct {
  product: IProductItem,
  onAddClick: (item: IProductItem) => void,
  onRemoveClick: (id: number) => void,
  onHandleChange: (evt: React.ChangeEvent<HTMLInputElement>, id: number) => void
}

export interface ICurrency {
  from: string | null,
  to: string | null,
  amount: number | null
}