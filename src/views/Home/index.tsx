import Layout from '../../components/HOC/Layout';
import KalkulatorView from './KalkulatorView';

interface propsi {
  props: any;
}

const Home: React.FC<propsi> = (props) => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "column"
        }}
      >
          <KalkulatorView />
      </div>
    </Layout>
  );
};

export default Home;
