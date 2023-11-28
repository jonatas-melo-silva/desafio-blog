import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'mb-7 flex items-center justify-between' as ClassNameValue

export type WrapperProps = ComponentProps<'div'>

export function Wrapper({ className, ...props }: WrapperProps) {
  return <div className={twMerge(base, className)} {...props} />
}
