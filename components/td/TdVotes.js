import StyleOutcome from '../tools/StyleOutcome';
import TranslateVote from '../tools/TranslateVote';

export default function TdVotes(votes) {
    

    const dailVotes = votes.results;
    console.log(dailVotes);

    const allVotes = dailVotes.map((v) => 
      <>
   
  <div className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{v.division.debate.showAs}</h5>
      <small>{v.contextDate}</small>
    </div>
    <p className="mb-1">{v.division.subject.showAs}</p>
    <div className="row">
      <div className="col-3">
        <small>Voted: {TranslateVote(v.division.memberTally.showAs)}</small>
      </div>
      <div className="col-3">
        <small>Outcome: {StyleOutcome(v.division.outcome)}</small>
      </div>
    </div>
  </div>

    
      </>
    );
    return (
      <>
      <div className="list-group">
        {allVotes}
      </div>
      </>
    );
    
    
};           
    // Render data...

    
    
  
