import { Props } from '../../types'
import { Login_and_signup_links } from './login_and_signup'

export
const Layout = (props: Props) => {

  return <>
    <header className='container'>
      <Login_and_signup_links />
    </header>
    <main className='container'>
      {props.children}
    </main>
    <footer className='container'>
      this is footer
    </footer>
  </>
}
