import { FC } from 'react'

import { PostList } from './components/Post/PostList'

const mock = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    img: 'https://via.placeholder.com/600/56a8c2',
  },
  {
    id: 2,
    title: 'qui est esse',
    description:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    img: 'https://via.placeholder.com/600/24f355',
  },
]

export const News: FC = () => {
  return <PostList posts={mock} />
}
