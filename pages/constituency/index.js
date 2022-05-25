// import ConstitProfile from '../../components/constituency/ConstitProfile';

// export default function AllConstituencies(constits) { // TODO: FETCH TD
//     const { constituencies } = constits;
//     console.log(constituencies);
//     return (
//         <>
           
//         </>
//     )
// }



// export const getStaticProps = async () => {

//     // FETCH CONSTIT DATA
//     const constits_api_url = `https://api.oireachtas.ie/v1/constituencies?chamber_id=&chamber=dail&house_no=33&limit=60`;
//     const constitsRes = await fetch(constits_api_url); 
//     const constitsData = await constitsRes.json();

//     return { 
//         props: { 
//             constits: constitsData,
//         },
//         // NO REVALIDATION BESIDE BUILD TIME
//     };
// }