import { 
    sanityClient,
} from "../../lib/sanity";

import PartyProfile from '../../components/party/PartyProfile';


const partyQuery = `*[_type == "party" && slug.current == $slug][0]{
    _id,
    slug,
    image,
}`; 
 // QUERY TO FETCH  TD

export default function OneParty({party, supParty}) { // TODO: FETCH TD

       
    return (
        <>
        <PartyProfile party={party}  supParty={supParty} />
        </>
   
    )
}


export const getStaticPaths = async () => { 
    // CHECKS IF REQUEST BEING MADE TO /constituency/[slug]
    const paths = await sanityClient.fetch(
        `*[_type == "party" && defined(slug.current)]{ 
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
        const supPartyData = await sanityClient.fetch(partyQuery, {slug});
        
        // FETCH PARTY DATA
        const party_api_url = `https://api.oireachtas.ie/v1/members?date_start=1900-01-01&chamber_id=&chamber=dail&house_no=33&date_end=2099-01-01&limit=50&party_code=${slug}`;
        const partyRes = await fetch(party_api_url); 
        const partyData = await partyRes.json();

         
    return { 
        props: { 
            party: partyData,
            supParty: supPartyData,
        },
        // NO REVALIDATION BESIDE BUILD TIME
    };
}

