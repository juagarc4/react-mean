import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from 'hooks/useCounter'

describe('Tests in useCounter', () => {
  test('Should return the default values', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.counter).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  })

  test('Should return the given value', () => {
    const { result } = renderHook(() => useCounter(20))
    expect(result.current.counter).toBe(20)
  })

  test('Should increment the counter in 1', () => {
    const { result } = renderHook(() => useCounter(20))
    const { increment } = result.current

    act(() => {
      increment()
    })

    expect(result.current.counter).toBe(21)
  })
  test('Should decrement the counter in 1', () => {
    const { result } = renderHook(() => useCounter(20))
    const { decrement } = result.current

    act(() => {
      decrement()
    })

    expect(result.current.counter).toBe(19)
  })

  test('Should reset the counter to the default/given value', () => {
    const { result } = renderHook(() => useCounter(20))
    const { increment, reset } = result.current

    act(() => {
      increment()
      reset()
    })

    expect(result.current.counter).toBe(20)
  })
})
