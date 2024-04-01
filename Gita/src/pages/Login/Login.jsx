import {useEffect} from 'react';

export default function Login() {
  useEffect(() => {
    document.title = 'Login | Gita';

    return () => {
      document.title = 'Login | Gita';
    };
  }, []);
  return (
    <>
      <div className='container'>
        <div className='con-wrap'>
          <div className='c-si-wrap'>
            <div id='content'>
              <section id='post-content' role='main'>
                <div className='pa-title'>
                  Admin Account <span>(only for admin server)</span>
                  <h1>IP Not Match...</h1>
                </div>
                <div className='fi-items _d-p-size'>
                  <div>
                    <div className='auth'>
                      <form action='' method='post'>
                        <div className='auth-input auth-email'>
                          <label htmlFor='email'>Email</label>
                          <input type='email' id='email' />
                        </div>
                        <div className='auth-input auth-password'>
                          <label htmlFor='password'>Passowrd</label>
                          <input type='passowrd' id='password' />
                        </div>
                        <div className='auth-input auth-submit'>
                          <button type='submit'>Login</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
