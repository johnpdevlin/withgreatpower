import { urlFor } from "../../lib/sanity";

export default function ConstitProfile({constit, supConstit}) {

  console.log(constit)
    return (
        <>
               <div class="card mb-3 shadow-lg">
                    <h5 class="card-header bg-light">Constituency Profile</h5>
                    <div class="row g-0">
                      <div class="col-md-4">
                      {/* <Image src={urlFor(supConstit.image)} alt={constit.results[0].member.memberships[0].membership.represents[0].represent.showAs} />  */}
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          {/* <h2 class="card-title">{constit.results[0].member.memberships[0].membership.represents[0].represent.showAs}</h2> */}
                          <table>
                                <tr>
                                    <td><h5>No. of TDs: </h5></td>
                                    {/* <td><h6>{constit.results.length}</h6></td> */}
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