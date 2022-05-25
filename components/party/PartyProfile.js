
import { urlFor } from "../../lib/sanity";

export default function PartyProfile({party, supParty}) {
    const partyData = party.results; 
    
    const name = partyData[0].member.memberships[0].membership.parties[0].party.showAs;
    const reps = partyData.length;
    const founded = supParty.founded;
    
    return (
        <>
               <div class="card mb-3 shadow-lg">
                    <h5 class="card-header bg-light">Party Profile</h5>
                    <div class="row g-0">
                      <div class="col-md-4">
                      <img src={urlFor(supParty.image)} alt={name} /> 
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h2 class="card-title">{name}</h2>
                          <table>
                                <tr>
                                    <td><h5>Year Founded: </h5></td>
                                    <td><h6>{founded}</h6></td>
                                </tr>
                                <tr>
                                    <td><h5>No. of TDs: </h5></td>
                                    <td><h6>{reps}</h6></td>
                                </tr>
                          </table>
                          {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                      </div>
                    </div>
                  </div>

            
        </>
    );
}
