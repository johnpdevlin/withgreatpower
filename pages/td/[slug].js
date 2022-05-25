
import { sanityClient, urlFor } from "../../lib/sanity";
import TdProfile from '../../components/td/TdProfile';
import TdRecords from "../../components/td/TdRecords";
import LeftCol from "../../components/universal/LeftCol";
import RightCol from "../../components/universal/RightCol";
import Link from "next/link";


export default function OneTd({votes, td, questions, party}) {
    console.log(party);
    const partyName = party.results[0].member.memberships[0].membership.parties[0].party.showAs;

    return (
      <>
       <LeftCol>
        <TdProfile td={td} />
        <TdRecords votes={votes} questions={questions} />
        </LeftCol>
        <RightCol>
            
                <div class="card shadow-lg">
                <div class="card-header">{partyName} TDs</div>
                        <div class="card-body">
                            <p class="card-text">
                                <ul class="list-group list-group-flush">
                                    {party.results.map(td => (
                                            <li class="list-group-item">
                                            <Link href={`/td/${td.member.memberCode}`}>
                                                {td.member.fullName}
                                            </Link>
                                            </li>  
                                    ))}
                                </ul>
                            </p>
                        </div>
                    </div>
            
        </RightCol>                

      </>
    );
  }


export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}


export const getStaticProps = async ({ params }) => {
    const { slug } = params;

    // FETCH TD DATA
    const td_api_url = `https://api.oireachtas.ie/v1/members?date_start=1900-01-01&chamber_id=&member_id=https%3A%2F%2Fdata.oireachtas.ie%2Fie%2Foireachtas%2Fmember%2Fid%2F${slug}&date_end=2099-01-01&limit=50`;
    const tdRes = await fetch(td_api_url); 
    const tdData = await tdRes.json();
    const partyCode = tdData.results[tdData.results.length-1].member.memberships[0].membership.parties[0].party.partyCode;

    // FETCH VOTE DATA
    const votes_api_url = `https://api.oireachtas.ie/v1/divisions?chamber_type=house&chamber_id=https%3A%2F%2Fdata.oireachtas.ie%2Fie%2Foireachtas%2Fhouse%2Fdail%2F33&chamber=dail&date_start=1919-02-01&date_end=2099-01-01&limit=10&outcome=&member_id=https%3A%2F%2Fdata.oireachtas.ie%2Fie%2Foireachtas%2Fmember%2Fid%2F${slug}`;
    const voteRes = await fetch(votes_api_url);
    const voteData = await voteRes.json();

    // FETCH PARTY DATA
    const party_api_url = `https://api.oireachtas.ie/v1/members?date_start=1900-01-01&chamber_id=&chamber=dail&house_no=33&date_end=2099-01-01&limit=50&party_code=${partyCode}`;
    const partyRes = await fetch(party_api_url); 
    const partyData = await partyRes.json();
    

    // FETCH QUESTION DATA 
    const questions_api_url = `https://api.oireachtas.ie/v1/questions?date_start=1900-01-01&date_end=2099-01-01&limit=10&qtype=oral,written&member_id=https%3A%2F%2Fdata.oireachtas.ie%2Fie%2Foireachtas%2Fmember%2Fid%2F${slug}`;
    const questionRes = await fetch(questions_api_url);
    const questionData = await questionRes.json();

    return { 
        props: { 
            td: tdData,
            votes: voteData,
            questions: questionData, 
            party: partyData,
        },
        revalidate: 10800 // 3 hours
    };
}


//  `https://api.oireachtas.ie/v1/divisions?chamber_type=house&chamber_id=&date_start=1900-01-01&date_end=2099-01-01&limit=50&outcome=`;
