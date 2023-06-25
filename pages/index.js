import Layout from '../components/Layout';
import UploadContract from '../components/UploadContract';
import SelectChains from '../components/SelectChains';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <UploadContract />
        <SelectChains />
      </Layout>
    </>
  );
}