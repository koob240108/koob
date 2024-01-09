import { Link } from 'wouter'
import { pages } from '../../../../ss/router'

const Login_page = () => {
  return <main className='container'>
    <form>
      <label>
        用户名
        <input required name='username' />
      </label>
      <label>
        密码
        <input required type='password' name='password' />
      </label>

      <div className='grid'>
        <Link
          role='button'
          className='outline'
          href={pages.signup.path}
        >注册</Link>
        <input type='submit' value='登录'
          style={{ marginBottom: 0 }}
        />
      </div>
      <hr />
    </form>
  </main>
}

export
const login_page = {
  path: pages.login.path,
  Component: Login_page,
}
