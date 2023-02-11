import { FC } from 'react'

import withAuth from '../../hoc/withAuth'

export const Profile: FC = withAuth(() => {
  return <>Profile page</>
})
