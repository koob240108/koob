import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { pages } from '../../../../ss/router'

const Signup_page = () => {
  return <main className='container'>
    <form onSubmit={async evt => {
      evt.preventDefault()
      const data = new FormData(evt.target as HTMLFormElement)
      const email = data.get('email') as string
      const passwd = data.get('password') as string
      const passwd2 = data.get('password2') as string

      if (passwd.length < 8)
        return alert('密码至少 8 位')
      if (passwd !== passwd2)
        return alert('两次密码不一致')

      const res = await createUserWithEmailAndPassword(getAuth(), email, passwd)
      console.log({ res })
    }}>
      <label>
        邮箱
        <input required name='email' />
      </label>
      <label>
        密码
        <input required type='password' name='password' />
      </label>
      <label>
        确认密码
        <input required type='password' name='password2' />
      </label>

      <input type='submit' value='注册' />
    </form>
  </main>
}

export
const signup_page = {
  path: pages.signup.path,
  Component: Signup_page,
}
