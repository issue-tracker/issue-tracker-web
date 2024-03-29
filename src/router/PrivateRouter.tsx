import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, NotFound, Issues, Labels, Milestones, NewIssue, IssueDetail } from '@/pages';

const PrivateRouter = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<Issues />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/issues/new" element={<NewIssue />} />
      <Route path="/issues/:issueId" element={<IssueDetail />} />
      <Route path="/labels" element={<Labels />} />
      <Route path="/milestones" element={<Milestones />} />
      <Route path="/redirect-auth" element={<Navigate to="/issues" />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default PrivateRouter;
