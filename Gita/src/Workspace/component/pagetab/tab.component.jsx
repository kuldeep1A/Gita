import { WorkspacePropTypes } from '../../../Function/PropTypes'
import { handleSignOut } from '../../../Function/auth/auth'

const PageTab = ({ userEmail, emailVerified }) => {
  return (
    <div className='page-ws-tab'>
      <div>
        Gitas WorkSpace
        <div
          title={`${emailVerified ? 'Verified' : 'Unverified'}`}
          className={`${emailVerified ? 'wsverified' : 'wsunverified'} wscheck`}></div>
      </div>
      <div className='user'>
        <div className='email' title='Workspace email'>
          {userEmail}
        </div>
        <div className='wsignout' title='SignOut'>
          <button onClick={() => handleSignOut({})}>SignOut</button>
        </div>
      </div>
    </div>
  )
}
export default PageTab
PageTab.propTypes = WorkspacePropTypes
