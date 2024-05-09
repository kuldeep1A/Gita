import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Home() {
  useEffect(() => {
    document.title = 'Home | Gita'

    return () => {
      document.title = 'Home | Gita'
    }
  }, [])
  const colorx = {
    color: '#a52a2a',
  }
  return (
    <div>
      <div className='r-f-welcome'>
        <div className='content'>
          <span style={colorx}>
            {false && (
              <strong>
                <span className='_notice'>
                  NOTICE: Users can edit content now. If you want to be an editor, please send your
                  credentials with offical
                  <em style={{ color: 'black', fontWeight: 'bold' }}>GitaSuperSite</em>
                  Website Maintained by IIT Kanpur.
                </span>
              </strong>
            )}
          </span>
        </div>
      </div>

      <div className='container'>
        <div className='con-wrap'>
          <div className='c-si-wrap'>
            <div id='content'>
              <section id='post-content' role='main'>
                <h1 className='pa-title'>Welcome to Gita Site!</h1>
                <div className='fi-items'>
                  <table className='homepage'>
                    <tbody>
                      <tr>
                        <td>
                          <Link to='/srimadIntro'>
                            <strong>Srimad BhagavadGita</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to='/othergitas'>
                            <strong>Other Gitas</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link className='user-none pointer-event-none' to=''>
                            <strong>
                              Ramcharitmanas
                              <span className='not-available'></span>
                            </strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to='/valmikiramayana'>
                            <strong>Valmiki Ramayana</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to='/brahmasutraWelcome'>
                            <strong>Brahma Sutra</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                        <td>
                          <Link to='yogasutra'>
                            <strong>Yoga Sutra</strong>
                          </Link>
                          <br />
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
          <div className='fse-describe user-none pointer-event-none'>
            <h1>
              <strong className='size-9'>
                <span className='not-available'></span> : Not Available
              </strong>
            </h1>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  )
}
