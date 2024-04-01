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
                  <div></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
