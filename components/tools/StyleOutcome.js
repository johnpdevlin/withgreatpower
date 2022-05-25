export default function StyleOutcome(...outcome) {
    // TranslatesIrish
    if (outcome == "Carried"){
        return <h5 style={{color: "green"}}>Carried</h5>;
    }
    else if (outcome == "Lost"){
        return <h5 style={{color: "red"}}>Lost</h5>;
    }
    else {
        return "error;"
    }
}