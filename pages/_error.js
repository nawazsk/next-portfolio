import Layout from "../components/Layout";

export default ({statusCode }) => (
    <Layout title="Error!!">
        <p>Error - {statusCode}</p>
        <p>Didn't see that coming!! Sorry</p>
    </Layout>
);