import Layout from "../components/Layout";
import SelectChains from "../components/SelectValues";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <SelectChains />
      </Layout>
    </>
  );
}
