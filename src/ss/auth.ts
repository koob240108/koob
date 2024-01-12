import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export
const create_user_with_email_and_password = async (email: string, passwd: string) => {
  const res = await createUserWithEmailAndPassword(getAuth(), email, passwd)

}
