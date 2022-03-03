function compareTriplets(a, b) {
    // Write your code here
    let aliceFinalScore = 0;
    let bobFinalScore = 0;
    let finalArr = [];
        for(let i = 0;i<a.length;i++){
            if(a[i]>b[i]){
                aliceFinalScore = aliceFinalScore+1;
            }
            else if(a[i]<b[i]){
                bobFinalScore = bobFinalScore+1;
            }
            else{
                aliceFinalScore = aliceFinalScore+0;
                bobFinalScore = bobFinalScore+0;
            }
        }
    finalArr.push(aliceFinalScore,bobFinalScore);
    return finalArr;
    }
