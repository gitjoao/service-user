export const InputValidation = {
  email: {
    presence: true
  },
  password: {
    presence: true
  },
  name: {
    presence: true
  }
}

export interface Input {
  email: string
  password: string
  name: string
}