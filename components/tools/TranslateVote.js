export default function TranslateVote(...Gaeilge) {
    // TranslatesIrish
    if (Gaeilge == "Tá"){
        return <h5 style={{color: "green"}}>Yes</h5>;
    }
    else if (Gaeilge == "Níl"){
        return <h5 style={{color: "red"}}>No</h5>;
    }
    else if (Gaeilge == "Staon"){
        return <h5 style={{color: "yellow"}}>Abstained</h5>;
    }
    else {
        return "error;"
    }
}