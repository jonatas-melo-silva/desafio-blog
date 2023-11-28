import { posts } from '../store/posts'
import { Templates } from '../templates'
export function Home() {
  return (
    <>
      {posts?.map((post) => {
        return <Templates.Card key={post.id} post={post} />
      })}
    </>
  )
}
