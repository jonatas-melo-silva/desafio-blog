import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'mb-2.5 text-lg font-normal text-gray-900 md:text-2xl md:font-medium' as ClassNameValue
const dark = 'dark:text-white' as ClassNameValue

export type TitleProps = ComponentProps<'h2'>

export function Title({ className, ...props }: TitleProps) {
  return <h2 className={twMerge(base, dark, className)} {...props} />
}
