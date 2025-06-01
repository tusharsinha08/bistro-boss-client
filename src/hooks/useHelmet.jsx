import { Helmet } from 'react-helmet-async';

const useHelmet = (title) => {
    return (
        <Helmet>
            <title>Bistro Boss | {title}</title>
        </Helmet>
    );
};

export default useHelmet;