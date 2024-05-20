import { useEffect, useState } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('')
  useEffect(() => {
    const _y = new Date().getFullYear()
    const _sY = `${_y}`.split('')
    const _Y = `${_sY[2]}${_sY[3]}`
    setCurrentYear(_Y)
  }, [])
  return (
    <div id='footer'>
      <h1 className='is-hidden-desktop size-6 text-center color-white'>
        Content Management System (Admin) - 2022
      </h1>
      <div className='d-flex horizontal-between'>
        <span>
          <h1 className='size-9 color-white'>
            <a className='color-white' href='/history' target='_blank' rel='noreferrer'>
              Copyright-©
            </a>
            {` 2022-${currentYear}`}
          </h1>
        </span>
        <span>
          <h1 className='size-9 color-white'>
            <a
              className='color-white'
              href='https://github.com/kuldeep1A/Gita/blob/master/LICENSE'
              target='_blank'
              rel='noreferrer'>
              LICENSE-℗
            </a>
          </h1>
        </span>
      </div>
    </div>
  )
}

export default Footer
