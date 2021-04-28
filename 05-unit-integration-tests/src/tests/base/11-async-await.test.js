import { getImagen } from '../../base/11-async-await'

describe('Test with Async-Await and fetch', () => {
  test(' It should return the url of the image', async () => {
    const url = await getImagen()

    expect(url.includes('https://')).toBe(true)
  })
})
