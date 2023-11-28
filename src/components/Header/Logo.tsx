import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'text-lg font-normal text-white' as ClassNameValue

export type LogoProps = ComponentProps<'h1'>

export function Logo({ className, ...props }: LogoProps) {
  return (
    <h1 className={twMerge(base, 'dark:text-red-400', className)} {...props}>
      Code<span className="dark:text-white">lândia</span>
    </h1>
  )
}
