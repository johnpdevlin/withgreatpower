import TimeElapsed from "../tools/TimeElapsed";
import Link from "next/link";
import Image from "next/image";

export default function TdProfile({td}) {
   
    const uri = td.results[0].member.memberCode;
    const fullName = td.results[0].member.fullName;
    const party = td.results[td.results.length-1].member.memberships[0].membership.parties[0].party.showAs;
    const partyCode = td.results[td.results.length-1].member.memberships[0].membership.parties[0].party.partyCode;
    const constituency = td.results[0].member.memberships[0].membership.represents[td.results[0].member.memberships[0].membership.represents.length-1].represent.showAs;
    const constitCode = td.results[0].member.memberships[0].membership.represents[td.results[0].member.memberships[0].membership.represents.length-1].represent.representCode;
    const startDate = td.results[0].member.memberships[0].membership.dateRange.start;
    const period = TimeElapsed(startDate);
    const tdImage = `https://data.oireachtas.ie/ie/oireachtas/member/id/${uri}/image/large`

    return (
      <div className='card mb-3 shadow-lg' >
        <div class='row g-0'>


            <div className='col-3'>
                <br />
                    <img src={tdImage} className="img-thumbnail rounded float-start mb-4" alt={fullName}/>
                <br /> 
            </div>

            <div className='col-9'>           
            <div className='card-body'>
            
             <h2 className='card-title'>{fullName}</h2>
                                                  
              <p className='card-text'>
                  <div className='table-responsive'>
                      <table className='table table-default table-striped'>
                          <tbody>
                              <tr>
                                  <td><strong>Constituency: </strong> </td>
                                  <td><Link href={`/constituency/${constitCode}`}>{constituency}</Link></td>
                              </tr>
                              <tr>
                                  <td><strong>Party:</strong></td>
                                  <td><Link href={`/party/${partyCode}`}>{party}</Link></td>
                              </tr>
                              <tr>
                                  <td><strong>TD since: </strong></td>
                                  <td>{startDate}</td>
                              </tr>
                              <tr>
                                  <td><strong>Period in Office</strong></td>
                                  <td>{period}</td>
                            </tr>
                          </tbody>
                      </table>
                  </div>
              </p>
          </div>
            </div>
      </div>
      </div>
    );
}