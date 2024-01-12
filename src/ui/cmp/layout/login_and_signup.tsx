import { Link } from 'wouter'
import { useIs_page } from '../../../ss/utils'
import { pages } from '../../../ss/router'

export
const Login_and_signup_links = () => {
  const is_login = useIs_page(pages.login)
  const is_signup = useIs_page(pages.signup)
  return <>
    {is_login || <Link href={pages.login.path}>登录</Link>}
    {is_signup || <Link href={pages.signup.path}>注册</Link>}
  </>
}
