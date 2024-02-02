var summaryGroupIcon = document.querySelectorAll(".summary-group-icon");
var summaryGroupName = document.querySelectorAll(".summary-group-name");
var summaryScore = document.querySelectorAll(".summary-score");
var score = document.getElementById("score");

async function fetchData(){
    try{
        const response = await fetch("../data.json");
        return await response.json();
    } catch (error){
        console.error(error);
    }
}

window.onload = () => {
    let counter = 0;
    fetchData().then(data => {
        var n = 0;
        data.forEach(element => {
            summaryGroupIcon[n].innerHTML = "<img src='"+ element["icon"]+"'></img>";
            summaryGroupName[n].innerText = element["category"];
            summaryScore[n].innerHTML = "<span class='bold'>"+ element["score"]+"</span>" + " / 100";
            counter += element["score"];
            n += 1;
        });
        score.innerHTML = ~~(counter / 4);
    });    
};

