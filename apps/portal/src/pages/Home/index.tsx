import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { getPageConfig } from '../../router';

const Home = () => {
  const pageConfig = getPageConfig();
  return (
    <div className="flex flex-col items-center mt-5">
      {pageConfig.map((page) => (
        <Link to={page.path || '/'} key={page.path}>
          <Button type="link" size="large">
            {page.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Home;
