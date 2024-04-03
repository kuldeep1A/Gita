import {LoginPropTypes} from '../../../../Function/PropTypes';
const PageTitle = ({UTN, logedIn, handleOut}) => {
  return (
    <>
      <div className='page-tab'>
        Admin Account
        {UTN ? (
          <div>
            <h1 className='UN'>On Admin Browser or Network</h1>
            {!logedIn ? (
              <></>
            ) : (
              <div className='gsignout'>
                <button
                  onClick={() => {
                    handleOut();
                  }}>
                  SignOut
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <span> (only for admin server)</span>
            <h1 className='ON'>Browser or Network Not Match</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default PageTitle;
PageTitle.propTypes = LoginPropTypes;
