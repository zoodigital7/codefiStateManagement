export class User {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  password: string
  constructor({
    id = 0,
    first_name = '',
    last_name = '',
    email = '',
    phone = '',
    password = '',
    ...rest
  }) {
    Object.assign(this, rest)
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.phone = phone
    this.password = password
  }
}
