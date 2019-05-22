import Link from "next/link";
import Layout from "../components/Layout";
const Index = () => (
    <Layout title="Home">
        Welcome
        <Link href="/about"><a>About</a></Link>
    </Layout>
)

export default Index;