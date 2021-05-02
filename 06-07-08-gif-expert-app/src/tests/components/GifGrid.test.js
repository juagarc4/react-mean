import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from 'components/GifGrid'
import { useFetchGifs } from 'hooks/useFetchGifs'

jest.mock('hooks/useFetchGifs')

describe('Tests in <GifGrid />', () => {
  const category = 'Dragon Ball'

  test('Should show the component correctly', () => {
    useFetchGifs.mockReturnValue({ gifs: [], loading: true })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })
  test('Should show items when they are loaded by useFetchGifs', () => {
    const gifs = [
      {
        id: 'Gif 1',
        url: 'http://localhost:3000/image.gif',
        title: 'Gif 1',
      },
      {
        id: 'Gif 2',
        url: 'http://localhost:3000/image.gif',
        title: 'Gif 2',
      },
    ]
    useFetchGifs.mockReturnValue({
      gifs: gifs,
      loading: false,
    })

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
