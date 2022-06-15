export const InputValidation = {
  email: {
    presence: true
  },
  password: {
    presence: true
  }
}

export interface Input {
  email: string
  password: string
}