export const LoginComponent = UTN => {
  console.log(UTN);
  return (
    <>
      <div className='container'>
        <div className='con-wrap'>
          <div className='c-si-wrap'>
            <div id='content'>
              <section id='post-content' role='main'>
                <div className='pa-title'>
                  Admin Account <span>(only for admin server)</span>
                  {UTN ? (
                    <h1 className='UN'>On Admin Network</h1>
                  ) : (
                    <h1 className='ON'>IP Not Match...</h1>
                  )}
                </div>
                <div className='fi-items _d-p-size'>
                  <div>
                    {UTN ? (
                      <div className='auth'>
                        <form action='' method=''>
                          <div className='auth-input auth-email'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' required id='email' />
                          </div>
                          <div className='auth-input auth-password'>
                            <label htmlFor='password'>Passowrd</label>
                            <input type='passowrd' required id='password' />
                          </div>
                          <div className='auth-input auth-submit'>
                            <button type='submit'>Login</button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
