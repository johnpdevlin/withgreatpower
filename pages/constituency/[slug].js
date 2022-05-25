import { 
    sanityClient,
} from "../../lib/sanity";

import ConstitProfile from '../../components/constituency/ConstitProfile';


const constitQuery = `*[_type == "constituency" && slug.current == $slug][0]{
    _id,
    slug,
    image,
}`; 
 // QUERY TO FETCH  TD

export default function OneConstituency({constit, supConstit}) { // TODO: FETCH TD

       
    return (
        <>
        <ConstitProfile constit={constit}  supConstit={supConstit} />
        </>
   
    )
}


export const getStaticPaths = async () => { 
    // CHECKS IF REQUEST BEING MADE TO /constituency/[slug]
    const paths = await sanityClient.fetch(
        `*[_type == "constituency" && defined(slug.current)]{ 
            "params": {
                "slug": slug.current
            }
        }`
    );

    return {
        paths,
        fallback: true, // checks to see if the path is valid
    }
}

export const getStaticProps = async ({ params }) => {
        const { slug } = params;
        const supConstitData = await sanityClient.fetch(constitQuery, {slug});
        
        // FETCH CONSTIT DATA
        const constit_api_url = `https://api.oireachtas.ie/v1/members?date_start=1900-01-01&chamber_id=&chamber=dail&house_no=33&date_end=2099-01-01&limit=50&const_code=${slug}`;
        const constitRes = await fetch(constit_api_url); 
        const constitData = await constitRes.json();

         
    return { 
        props: { 
            constit: constitData,
            supConstit: supConstitData,
        },
        // NO REVALIDATION BESIDE BUILD TIME
    };
}
