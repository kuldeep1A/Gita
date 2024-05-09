import { WorkspacePropTypes } from '../../Function/PropTypes'
import WorkStationComponent from './WorkStation/WorkStation.component'
import PageTab from './pagetab/tab.component'

const WorkspaceComponent = ({ userEmail, emailVerified }) => {
  return (
    <div className='container'>
      <div className='con-wrap'>
        <div className='c-si-wrap'>
          <div id='content'>
            <section id='post-content' role='main'>
              <div className='pa-title'>
                <PageTab userEmail={userEmail} emailVerified={emailVerified} />
              </div>
              <div className='fi-items'>
                <WorkStationComponent emailVerified={emailVerified} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WorkspaceComponent
WorkspaceComponent.propTypes = WorkspacePropTypes
