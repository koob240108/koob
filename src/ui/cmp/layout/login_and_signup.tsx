import { Link } from 'wouter'
import { useIs_page } from '../../../ss/utils'
import { pages } from '../../../ss/router'

export
const Login_and_signup_links = () => {
  const is_login = useIs_page(pages.login)
  const is_signup = useIs_page(pages.signup)
  return <>
    {is_login || <li><Link href={pages.login.path}>登录</Link></li>}
    {is_signup || <li><Link href={pages.signup.path}>注册</Link></li>}
  </>
}
