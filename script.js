// theme color change

document.getElementById('color-theme-changing-btn').addEventListener('click',function(){
    // console.log('clicked');
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
 })


 const completedBtn = document.querySelectorAll(".completed-btn"); 
 let count = parseInt(document.getElementById("counter").innerText);  
let totalScore = parseInt(document.getElementById('total-score').innerText);
const activityLog = document.getElementById("activity-log");
const clearLogBtn = document.getElementById("clear-log-btn"); 


 for (const complete of completedBtn) {
     complete.addEventListener("click", function () {
        // data-title attribute ar jonno;
        const title = complete.getAttribute("data-title");
         if (count > 0) { // zero nice jeno na jai
             count--; // 1 , 1 kore kombe
             alert('Board Update Successfully');
             document.getElementById("counter").innerText = count; // update kore dilam
             totalScore++;
            document.getElementById("total-score").innerText = totalScore;

         }
         if(count === 0){
            alert('Congrates!!! You Have Completed All the Current Task');
         }
         complete.disabled = true;
         complete.style.backgroundColor = "#FFFFFF";

          // Get the current time
          const currentTime = new Date().toLocaleTimeString();

         // Create a new paragraph for the activity log
        const logMessage = `You have completed the task: ${title} at ${currentTime}`;
        const logParagraph = document.createElement("p");
         logParagraph.textContent = logMessage;  
         logParagraph.classList.add("mb-3","bg-slate-200","p-4",'rounded-2xl');
        //  logParagraph.classList.add="bg-slate-200";

         //  new  log message ta activity log a appendChild 
         activityLog.appendChild(logParagraph);

         // clear btn
    clearLogBtn.addEventListener("click", function () {
        activityLog.innerHTML = ""; 
         })
         
     });
 }


// log section added;

function openNewPage() {
    window.open("blogs.html", "_blank");  
}

// back 
function goToHome() {
    window.location.href = "index.html"; 
}

// live time showing.
const liveTime = document.getElementById("live-time");
const today = new Date().toISOString().split('T')[0];
liveTime.innerText=today;