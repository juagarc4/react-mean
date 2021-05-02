import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from 'hooks/useFetchGifs'

describe('Tests in custom hook useFetchGifs', () => {
  test('Should return initial state', async () => {
    const { result } = renderHook(() => useFetchGifs('Matrix'))
    const { gifs, loading } = result.current
    expect(gifs.length).toBe(0)
    expect(loading).toBe(true)
  })
})
