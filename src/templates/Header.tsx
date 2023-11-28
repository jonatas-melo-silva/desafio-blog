import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import * as H from '../components/Header'
import { Search } from './Search'

const base = '' as ClassNameValue

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <H.Root
      className={twMerge(
        base,
        'bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-900',
        className,
      )}
      {...props}
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 bg-transparent px-5 py-12 md:max-w-[1216px] md:flex-row md:justify-between">
        <H.Logo className="md:text-4xl md:font-medium" />

        <Search />
      </div>
    </H.Root>
  )
}
