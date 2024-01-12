import { useEffect } from 'react'
import { pages } from '../../../ss/router'

const Home_page = () => {
  useEffect(() => {

  }, [])
  return <div>Home</div>
}

export
const home_page = {
  path: pages.home.path,
  Component: Home_page,
}
