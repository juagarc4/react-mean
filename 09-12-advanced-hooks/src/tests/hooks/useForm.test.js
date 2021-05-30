import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from 'hooks/useForm'

describe('Tests in useCounter', () => {
  const initialForm = {
    name: 'Raul',
    email: 'test@test.com',
  }

  test('Should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [formValues, handleInputChange, reset] = result.current

    expect(formValues).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('Should change the value of the name field of the form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Roberto',
        },
      })
    })

    const [formValues] = result.current
    expect(formValues).toEqual({ ...initialForm, name: 'Roberto' })
  })
  test('Should reset the form with RESET', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Roberto',
        },
      })

      reset()
    })

    const [formValues] = result.current
    expect(formValues).toEqual(initialForm)
  })
})
