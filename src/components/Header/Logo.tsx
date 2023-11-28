import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'text-lg font-normal text-white md:text-4xl md:font-medium' as ClassNameValue
const dark = 'dark:text-red-400' as ClassNameValue

export type LogoProps = ComponentProps<'h1'>

export function Logo({ className, ...props }: LogoProps) {
  return (
    <h1 className={twMerge(base, dark, className)} {...props}>
      Code<span className="dark:text-white">lândia</span>
    </h1>
  )
}
