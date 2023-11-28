import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Templates } from '../templates'

const base =
  'flex min-h-screen w-full flex-col items-center bg-gray-100 antialiased' as ClassNameValue
const dark = 'dark:bg-neutral-950' as ClassNameValue

export type PublicProps = ComponentProps<'div'>

export function Public({ className, ...props }: PublicProps) {
  return (
    <div className={twMerge(base, dark, className)} {...props}>
      <Templates.Header />

      <main className="flex h-full w-full flex-col gap-6 px-5 py-12 md:max-w-[1216px]">
        {props.children}
      </main>
    </div>
  )
}
