import { pages } from '../../../../ss/router'
import { create_user_with_email_and_password } from '../../../../ss/auth'
import { Layout } from '../../../cmp/layout'
import { useIs_page } from '../../../../ss/utils'

const Login_and_signup_page = () => {
  const is_login = useIs_page(pages.login)
  const action_name = is_login ? '登录' : '注册' // 用 letterspacing 隔开
  return <Layout>
    <div
      style={{
        maxWidth: 500,
        margin: '0 auto',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{action_name}</h2>
      <form
        onSubmit={async evt => {
          evt.preventDefault()
          const data = new FormData(evt.target as HTMLFormElement)
          const email = data.get('email') as string
          const passwd = data.get('password') as string
          const passwd2 = data.get('password2') as string

          if (passwd.length < 8)
            return alert('密码至少 8 位')
          if (!is_login && passwd !== passwd2)
            return alert('两次密码不一致')

          const res = await create_user_with_email_and_password(email, passwd)
          console.log({ res })
        }}
      >
        <label className='input'>
          邮件地址
          <input required name='email' />
        </label>
        <label className='input'>
          密码
          <input required type='password' name='password' />
        </label>
        <label className='input'>
          确认密码
          <input required type='password' name='password2' />
        </label>

        <input
          type='submit' value={action_name}
          className='btn fw'
          style={{ marginBottom: 0 }}
        />
        <hr data-title='or' />
      </form>
    </div>
  </Layout>
}

export
const login_page = {
  path: pages.login.path,
  Component: Login_and_signup_page,
}

export
const signup_page = {
  path: pages.signup.path,
  Component: Login_and_signup_page,
}
