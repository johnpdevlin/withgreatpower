const today = new Date(Date.now());

export default function TimeElapsed(date) { 
    // RETURNS TIME SINCE ELECTED
    let startDate = new Date(date);
    let days =0;
    let timeSince = (today - startDate);
    let months = Math.floor(timeSince/2629800000);
    let yearsPassed = Math.floor(months / 12);
    let monthsPassed = (months - yearsPassed*12); 
            if (yearsPassed > 1) {
                if (monthsPassed > 1) { return yearsPassed+" years, "+monthsPassed+" months"; }
                else if (monthsPassed = 1) { return yearsPassed+" years, "+monthsPassed+" month"; }
                else { return yearsPassed+" years"; }
            }
            else if (yearsPassed = 1) {
                if (monthsPassed > 1) { return yearsPassed+" year, "+monthsPassed+" months"; }
                else if (monthsPassed = 1) { return yearsPassed+" year, "+monthsPassed+" month"; }
                else { return yearsPassed+" year"; }
            }
            else {
                if (monthsPassed > 1) { return +monthsPassed+" months"; }
                else if (monthsPassed = 1) { return +monthsPassed+ " month"; }
                else {
                    let days = timeSince/86400000;
                    if (days = 1) { 
                      return "1 day"; }
                }
            }        
} 