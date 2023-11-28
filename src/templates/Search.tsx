import { SearchIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Input } from '../components'

const base =
  'dark:border-2 dark:border-neutral-800 dark:bg-neutral-800/40 dark:focus-within:border-red-400 md:h-16 md:max-w-xs md:px-6 md:py-5' as ClassNameValue

export type SearchProps = ComponentProps<'input'>

export function Search({ className, ...props }: SearchProps) {
  return (
    <Input.Root className={twMerge(base, className)}>
      <Input.Prefix>
        <SearchIcon className="h-4 w-4 text-white dark:text-red-400 md:h-auto md:w-auto" />
      </Input.Prefix>
      <Input.Control
        className="dark:placeholder-zinc-400 md:text-lg md:placeholder:text-lg"
        type="search"
        placeholder="Pesquisar no blog"
        name="search"
        id="search"
        {...props}
      />
    </Input.Root>
  )
}
