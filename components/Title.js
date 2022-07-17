import Head from "next/head";

const Title = ({ title }) => {
    return (
        <Head>
            <title>Montasim -Al- Mamun</title>
            <meta name="description" content="Mohammad Montasim -Al- Mamun Shuvo is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default Title;