import {LoginPropTypes} from '../../../Function/PropTypes';
import FormComponent from './workspace.component/form.component';
import PageTitle from './workspace.component/page.title';
export const LoginComponent = ({
  UTN,
  setEmail,
  setPassword,
  handleAuth,
  logedIn,
  jkd,
}) => {
  return (
    <div className='container'>
      <div className='con-wrap'>
        <div className='c-si-wrap'>
          <div id='content'>
            <section id='post-content' role='main'>
              <div className='pa-title'>
                <PageTitle UTN={UTN} />
              </div>
              <div className='fi-items'>
                <div>
                  {UTN && !logedIn && (
                    <FormComponent
                      setEmail={setEmail}
                      setPassword={setPassword}
                      handleAuth={handleAuth}
                    />
                  )}
                  {!jkd && (
                    <div>
                      {navigator.clipboard ? (
                        <button
                          onClick={() => navigator.clipboard.writeText(jkd)}>
                          Copy
                        </button>
                      ) : (
                        <span>Press and hold to copy</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
LoginComponent.propTypes = LoginPropTypes;
