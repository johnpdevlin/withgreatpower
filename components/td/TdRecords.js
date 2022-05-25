import TdVotes from './TdVotes';
import TdQuestions from './TdQuestions';

export default function TdRecords({votes, questions}){


    return (
        <>
        <div className="td-tab-menu">
                <div className="card align-content-center mb-3 shadow-lg">
                      <div className="card-header">
                          <ul className="nav nav-pills card-header-pills innerTab" id="allTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="votes-tab" data-bs-toggle="tab" data-bs-target="#votes" type="button" role="tab" aria-controls="votes" aria-selected="true">Votes</button>
                              </li>
                              {/* <li class="nav-item" role="presentation">
                                  <button class="nav-link" id="contributions-tab" data-bs-toggle="tab" data-bs-target="#contributions" type="button" role="tab" aria-controls="contribtions" aria-selected="false">Contributions</button>
                              </li> */}
                              <li className="nav-item" role="presentation">
                                  <button class="nav-link" id="questions-tab" data-bs-toggle="tab" data-bs-target="#questions" type="button" role="tab" aria-controls="questions" aria-selected="false">Questions</button>
                              </li>
                          </ul>
                      </div>
              
                      <div class="tab-content" id="walletContent">
                          <div className="tab-pane fade show active" id="votes" role="tabpanel" aria-labelledby="votes-tab" tabindex="0" style={{padding: "15px, 15px, 15px, 15px"}} >
                            <div id="votingRecord">
                                <TdVotes {...votes} />
                            </div>
                          </div>
                          {/* <div class="tab-pane" id="contributions" role="tabpanel" aria-labelledby="contributions-tab" style={{padding: "15px, 15px, 15px, 15px"}}>
                              <div id="contributionsRecord"></div>
                          </div> */}
                              <div className="tab-pane fade" id="questions" role="tabpanel" aria-labelledby="questions-tab" tabindex="0" style={{padding: "15px, 15px, 15px, 15px"}} />
                                  <div id="questionsRecord">
                                    <TdQuestions {...questions} />    
                                  </div> 
                              </div>
                          </div>
                      </div>
                      </>
    );
}