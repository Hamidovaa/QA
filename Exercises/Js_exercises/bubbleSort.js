
function bubbleSort(arr){
    const k=arr.length;
    for(i=0; i<k-1; k++){
        for(j=0; j<k-1-i; j++){
            if(arr[j]>arr[j+1]){
                let y=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=y;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([10,2,7,5]));
