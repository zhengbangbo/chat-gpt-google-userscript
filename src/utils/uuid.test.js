import { uuidv4 } from './uuid'

test('uuidv4', () => {
  const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  expect(uuidv4().match(regex))
})

