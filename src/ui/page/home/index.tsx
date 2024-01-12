import { useEffect } from 'react'
import { pages } from '../../../ss/router'
import { Layout } from '../../cmp/layout'

const Home_page = () => {
  useEffect(() => {

  }, [])
  return <Layout>
    this is home
  </Layout>
}

export
const home_page = {
  path: pages.home.path,
  Component: Home_page,
}
