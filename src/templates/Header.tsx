import { Search } from 'lucide-react'
import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import * as H from '../components/Header'
import * as I from '../components/Input'

const base = '' as ClassNameValue

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <H.Root className={twMerge(base, className)} {...props}>
      <div className="flex w-full flex-col items-center justify-center gap-10 px-5 py-12 md:max-w-[1216px] md:flex-row md:justify-between">
        <H.Logo className="md:text-4xl md:font-medium" />

        <I.Root className="md:h-16 md:max-w-xs md:px-6 md:py-5">
          <I.Prefix>
            <Search className="h-4 w-4 text-white md:h-auto md:w-auto" />
          </I.Prefix>
          <I.Control
            className="md:text-lg md:placeholder:text-lg"
            type="search"
            placeholder="Pesquisar no blog"
          />
        </I.Root>
      </div>
    </H.Root>
  )
}
