import { useEffect, useState } from 'react'
import { gita1ab, gita1aw } from '../DATA/MoreData'
import { Link, Outlet } from 'react-router-dom'
import DarkButton from './DarkButton'
import { NavPropTypes } from '../Function/PropTypes'
const Navigation = ({ isWorkspace }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [_innerWidth, setInnerWidth] = useState(window.innerWidth)
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const valuesMatching = () => {
    const link = `https://gitas.web.app/${searchValue.toLocaleLowerCase().replace(/\s/g, '')}`
    return link
  }
  const redirectSearchPage = () => {
    const link = valuesMatching()
    setSearchValue('')
    window.open(link, '_self')
  }
  let _isDark = window.sessionStorage.getItem('isDark') === 'true' ? true : false
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (_innerWidth >= 850) {
        if (isMenuOpen) {
          setIsMenuOpen(!isMenuOpen)
        }
      }
      setInnerWidth(window.innerWidth)
    })
  }, [_innerWidth, isMenuOpen])
  return (
    <div className='_top'>
      <div className='in_he_wrap'>
        <header id='h' role='banner'>
          <div className='top_l'>
            <div id='logo'>
              <Link to='/' title='Home'>
                {_isDark ? (
                  <img src={gita1ab} draggable='false' alt='Gita' />
                ) : (
                  <img src={gita1aw} draggable='false' alt='Gita' />
                )}
              </Link>
            </div>
          </div>

          <div className='top_r'>
            <div className='region re-search'>
              <div
                id='b-s-form'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <div className='content'>
                  <div>
                    <div>
                      <form
                        onSubmit={e => {
                          e.preventDefault()
                          redirectSearchPage()
                        }}>
                        <div>
                          <input
                            id='search-id'
                            type='text'
                            className='f-text'
                            onChange={e => setSearchValue(e.target.value)}
                            onKeyUp={event => {
                              if (event.key === 'Enter') {
                                event.preventDefault()
                                redirectSearchPage()
                              }
                            }}
                            placeholder='Search'
                          />
                        </div>
                        <div>
                          <button type='submit' name='Search Button' className='f-submit' />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {_innerWidth <= 850 && (
                  <div style={{ marginLeft: '15px', marginTop: '3px' }}>
                    <DarkButton />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='clear'></div>
        </header>
      </div>
      <div className='me_wrap'>
        <nav id='main-me' role='navigation'>
          <Link to='#' className='nav-toggle' onClick={handleToggleMenu}>
            Navigation
          </Link>
          <div className='menu-navigation-container'>
            <ul className={`menu text-center  ${isMenuOpen ? 'open' : ''}`}>
              <li className='first leaf m'>
                <Link to='/' title='' className='active' onClick={handleToggleMenu}>
                  Home
                </Link>
              </li>
              <li className='leaf m' onClick={handleToggleMenu}>
                <Link to='/about'>About Website</Link>
              </li>
              <li className='leaf m' onClick={handleToggleMenu}>
                <Link to='/history'>
                  History{' '}
                  <span title='Some Copyright' className='cp-chra'>
                    ©
                  </span>
                </Link>
              </li>
              <li className='leaf m' onClick={handleToggleMenu}>
                <Link to='/team'>Our Team</Link>
              </li>
              <li className='expanded'>
                <Link to='/QuickLinks' title='' className='active' onClick={handleToggleMenu}>
                  Quick Links
                </Link>
                <ul className='menu text-left'>
                  <li className='first expanded'>
                    <Link to='/srimad' title='Srimad BhagavadGita'>
                      Srimad BhagavadGita
                    </Link>
                    <ul className='menu'>
                      <li className='first leaf'>
                        <Link to='/srimadIntro' title='Introduction'>
                          Introduction
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/srimad' title='Srimadn Content'>
                          Content
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/srimadTextdetails' title='Text Details'>
                          Text Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='expanded'>
                    <Link to='/othergitas' title='Other Gitas'>
                      Other Gitas
                    </Link>
                    <ul className='menu'>
                      <li className='first leaf'>
                        <Link to='/ashtavakra' title='Ashtavakra Gita'>
                          Ashtavakra Gita
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/avadhuta' title='Avadhuta Gita'>
                          Avadhuta Gita
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/kapila' title='Kapila Gita'>
                          Kapila Gita
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/sriram' title='Sriram Gita'>
                          Sriram Gita
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/sruti' title='Sruti Gita'>
                          Sruti Gita
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/uddhava' title='Uddhava Gita'>
                          Uddhava Gita
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/vibhishana' title='Vibhishana Gita'>
                          Vibhishana Gita
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='expanded'>
                    <Link to='/brahmasutra' title='Brahmasutra content'>
                      BrahmaSutra (ब्रह्मसूत्र)
                    </Link>
                    <ul className='menu'>
                      <li className='first leaf'>
                        <Link title='Welcome' to='/brahmasutraWelcome'>
                          Welcome
                        </Link>
                      </li>
                      <li className='leaf'>
                        <Link to='/brahmasutraAbout'>About Brahma Sutra</Link>
                      </li>
                      <li className='last leaf'>
                        <Link to='/brahmasutra' title='Brahmasutra content'>
                          Content
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='last expanded'>
                    <Link to='yogasutra' title='Yogasutra content'>
                      YogaSutra
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='leaf m' onClick={handleToggleMenu}>
                <Link to='/contact'>Contact</Link>
              </li>
              <li className='last leaf m' onClick={handleToggleMenu}>
                {isWorkspace ? (
                  <Link to='/workspace' title='On Admin Server'>
                    Workspace
                  </Link>
                ) : (
                  <Link to='/login' title='Admin Server'>
                    Login
                  </Link>
                )}
              </li>
              {_innerWidth >= 850 && (
                <div className='_c-sec' style={{ display: 'inline' }}>
                  <DarkButton />
                </div>
              )}
            </ul>
          </div>
          <div className='clear'></div>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default Navigation
Navigation.propTypes = NavPropTypes
