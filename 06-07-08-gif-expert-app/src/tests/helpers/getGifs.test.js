import { getGifs } from 'helpers/getGifs'

describe('Tests in getGifs', () => {
  test('Should contain 10 elements', async () => {
    const gifs = await getGifs('Matrix')
    expect(gifs.length).toBe(10)
  })
  test('Should recive a category', async () => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
  })
})
