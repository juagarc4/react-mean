import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { useFetch } from 'hooks/useFetch'

describe('Tests in useFetch', () => {
  test('Should return the default information', () => {
    const { result } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    )

    const { data, loading, error } = result.current
    expect(data).toBe(null)
    expect(loading).toBe(true)
    expect(error).toBe(null)
  })
  test('Should return the desired info, loading:false, error:null', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    )
    await waitForNextUpdate({ timeout: 3000 })

    const { data, loading, error } = result.current
    expect(data.length).toBe(1)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })

  test('Should handle error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/apid/users?page=2')
    )
    await waitForNextUpdate({ timeout: 3000 })

    const { data, loading, error } = result.current
    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe('Info could not be loaded')
  })
})
