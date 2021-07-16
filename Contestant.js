class Contestant{

    constructor(){
        this.button=createElement("Submit");
        this.index = null;
        this.input1 = null;
    }

   getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value", (data)=>{
    contestantCount = data.val();   
    })
   }
        
   updateCount(count){
    database.ref('/').update({
    contestantCount: count
    })
   }

   update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
    input1:this.input1,
    })
   } 


}
