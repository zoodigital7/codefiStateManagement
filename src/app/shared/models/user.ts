export class User {
  id: number
  first_name: string
  last_name: string
  name: string
  email: string
  phone: string
  password: string
  relatives: User[]
  constructor({
    id = 0,
    email = '',
    phone = '',
    password = '',
    ...rest
  }) {
    // assigns all other non-assigned fields to this model
    Object.assign(this, rest)
    this.id = id
    // example of what you can do with rest
    this.first_name = rest.first_name
    this.last_name = rest.last_name
    // example of using two fields from rest to build a field
    this.name = rest.first_name && rest.last_name ? `${rest.first_name} ${rest.last_name}` : ''
    this.email = email
    this.phone = phone
    this.password = password
    // example of building a nested typed array off of rest
    this.relatives = rest.relatives && rest.relatives.length ? rest.pumps.map(x => new User(x)) : []
  }
}
