import { pages } from '../../../../ss/router'

const Login_page = () => {
  return <main className='container'>
    <form>
      <label className='input'>
        用户名
        <input required name='username' />
      </label>
      <label className='input'>
        密码
        <input required type='password' name='password' />
      </label>

      <input
        type='submit' value='登 录'
        className='btn fw'
        style={{ marginBottom: 0 }}
      />
      <hr data-title='or' />
    </form>
  </main>
}

export
const login_page = {
  path: pages.login.path,
  Component: Login_page,
}
