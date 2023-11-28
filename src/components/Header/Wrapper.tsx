import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full flex-col items-center justify-center gap-10 bg-transparent px-5 py-12 md:max-w-[1216px] md:flex-row md:justify-between' as ClassNameValue

export type WrapperProps = ComponentProps<'div'>

export function Wrapper({ className, ...props }: WrapperProps) {
  return <div className={twMerge(base, className)} {...props} />
}
