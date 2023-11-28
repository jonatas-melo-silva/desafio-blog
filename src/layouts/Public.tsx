import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import { Templates } from '../templates'

const base =
  'flex min-h-screen w-full items-center flex-col bg-gray-100 antialiased' as ClassNameValue

export type PublicProps = ComponentProps<'div'>

export function Public({ className, ...props }: PublicProps) {
  return (
    <div className={twMerge(base, className)} {...props}>
      <Templates.Header />

      <main className="flex h-full w-full flex-col gap-6 px-5 py-12 md:max-w-[1216px]">
        {props.children}
      </main>
    </div>
  )
}
