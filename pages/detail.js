import React from 'react';
import {useRouter} from 'next/router'
import Layout from "../components/Layout";
import MovieDetail from "../components/MovieDetail/MovieDetail";

const Detail = () => {
    const router = useRouter()
    const {id} = router.query
    return (
        <Layout>
            <MovieDetail/>
        </Layout>
    );
};

export default Detail;
