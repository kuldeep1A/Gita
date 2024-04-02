import {LoginPropTypes} from '../../../Function/PropTypes';
import FormComponent from './workspace.component/form.component';
import PageTitle from './workspace.component/page.title';
export const LoginComponent = ({
  UTN,
  setEmail,
  setPassword,
  handleAuth,
  displayName,
  userEmail,
  emailVerified,
  photoURL,
  logedIn,
  handleOut,
}) => {
  return (
    <>
      <div className='container'>
        <div className='con-wrap'>
          <div className='c-si-wrap'>
            <div id='content'>
              <section id='post-content' role='main'>
                <div className='pa-title'>
                  <PageTitle
                    UTN={UTN}
                    logedIn={logedIn}
                    handleOut={handleOut}
                    displayName={displayName}
                    userEmail={userEmail}
                    emailVerified={emailVerified}
                    photoURL={photoURL}
                  />
                </div>
                <div className='fi-items _d-p-size'>
                  <div>
                    {UTN && !logedIn ? (
                      <FormComponent
                        setEmail={setEmail}
                        setPassword={setPassword}
                        handleAuth={handleAuth}
                      />
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
LoginComponent.propTypes = LoginPropTypes;
