


// Select total count
var totalCount = document.getElementById("total");

var progress=document.getElementById("mypro");


var count = 0;
function increa(){
  count+=1;
  totalCount.innerHTML ="Number of days:" + count;
  progress.style.value=count;
};




