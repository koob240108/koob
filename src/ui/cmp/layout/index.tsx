import { Props } from '../../types'
import { Login_and_signup_links } from './login_and_signup'

export
const Layout = (props: Props) => {
  return <>
    <header className='container'>
      <nav
        className='plain'
        css={{
          float: 'right',
        }}
      >
        <ul>
          <Login_and_signup_links />
        </ul>
      </nav>
      <h1>応</h1>
    </header>
    <main className='container'>
      {props.children}
    </main>
    <footer className='container'>
      this is footer
    </footer>
  </>
}
