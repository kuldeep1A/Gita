import WorkspaceComponent from './component/workspace.component';
import WorkspaceFun from './component/workspace.fun';
const Workspace = () => {
  const {userEmail, emailVerified} = WorkspaceFun();
  return (
    <WorkspaceComponent userEmail={userEmail} emailVerified={emailVerified} />
  );
};
export default Workspace;
