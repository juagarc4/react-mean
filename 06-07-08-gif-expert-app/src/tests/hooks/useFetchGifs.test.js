import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from 'hooks/useFetchGifs'

describe('Tests in custom hook useFetchGifs', () => {
  test('Should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Matrix')
    )
    const { gifs, loading } = result.current

    await waitForNextUpdate()
    expect(gifs.length).toBe(0)
    expect(loading).toBe(true)
  })
  test('Should return an array of images and loading is false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Matrix')
    )
    await waitForNextUpdate()
    const { gifs, loading } = result.current
    expect(gifs.length).toBe(10)
    expect(loading).toBe(false)
  })
})
