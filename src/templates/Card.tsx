import { Heart } from 'lucide-react'
import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import {
  Data,
  Description,
  Prefix,
  Root,
  Title,
  Wrapper,
} from '../components/Card'
import { Post } from '../types/Post'

const base = '' as ClassNameValue

export type CardProps = ComponentProps<'section'> & {
  post: Post
}

export function Card({ className, post, ...props }: CardProps) {
  return (
    <Root className={twMerge(base, className)} {...props}>
      <Wrapper>
        <Data>{post.date}</Data>
        <Prefix>
          <Heart className="h-5 w-5 text-indigo-600" />
        </Prefix>
      </Wrapper>
      <Title>{post.title}</Title>
      <Description>{post.content}</Description>
    </Root>
  )
}
