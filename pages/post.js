import Layout from "../components/Layout";
import {withRouter} from "next/router";

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p>The reason this is going away is that we want to make things very predictable and explicit. Having a magical url
             property coming out of nowhere doesn't aid that goal.</p>    
    </Layout>
);

export default withRouter(Post);