import CapitaliseFirstLetter from "../tools/CapitaliseFirstLetter";

export default function TdQuestions(questions) {

 const dailQuestions = questions.results;
 const allQuestions = dailQuestions.map((q) => 
   <>
   
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1" style={{color: "green"}}>{q.question.debateSection.showAs}</h5>
      <small class="text-muted">{q.contextDate}</small>
    </div>
    <small class="text-muted">{CapitaliseFirstLetter(q.question.questionType)} question to Minister for {q.question.to.showAs}</small>
    <p class="mb-1">{q.question.showAs}</p>
   
  </a>

   </>
 );
 return (
  <div class="list-group">
     {allQuestions}
  </div>
 );
 
 
};   

// let date = data.results[i].contextDate;
// let topic = data.results[i].question.debateSection.showAs;
// let questionContent = data.results[i].question.showAs;
//     const questionType = data.results[i].question.questionType;

//     let qNum = data.results[i].question.questionNumber;
// let questionlink = 'https://www.oireachtas.ie/en/debates/question/'+date+'/'+qNum+'/';
// let toMinister = data.results[i].question.to.showAs; 