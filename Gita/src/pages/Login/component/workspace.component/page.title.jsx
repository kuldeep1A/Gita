import {LoginPropTypes} from '../../../../Function/PropTypes';
const PageTitle = ({UTN}) => {
  return (
    <>
      <div className='page-tab'>
        Admin Account
        {UTN ? (
          <div>
            <h1 className='UN'>On Admin Browser or Network</h1>
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
