import { PageHeader } from './MainTitle.styled';

const MainTitle = ({ title, color }) => {
  return <PageHeader style={{ color }}>{title}</PageHeader>;
};

export default MainTitle;
