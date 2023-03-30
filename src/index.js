//when click on introduction button
var educationBtn = document.getElementById('introduction-btn');
educationBtn.addEventListener('click', function() {
  document.getElementById('introduction').classList.remove("hidden"); 
  document.getElementById('education').classList.add("hidden");
  document.getElementById('experience').classList.add("hidden"); 
  document.getElementById('projects').classList.add("hidden");
});
//when click on education button
    var educationBtn = document.getElementById('education-btn');
    educationBtn.addEventListener('click', function() {
      document.getElementById('introduction').classList.add("hidden"); 
      document.getElementById('education').classList.remove("hidden");
      document.getElementById('experience').classList.add("hidden"); 
      document.getElementById('projects').classList.add("hidden");  
    });
//when click on work experience button
var workExperienceBtn = document.getElementById('workexperience-btn');
workExperienceBtn.addEventListener('click', function() {
  document.getElementById('introduction').classList.add("hidden"); 
  document.getElementById('education').classList.add("hidden");
  document.getElementById('experience').classList.remove("hidden"); 
  document.getElementById('projects').classList.add("hidden"); 
});
//when click on projects button
var projectsBtn = document.getElementById('projects-btn');
projectsBtn.addEventListener('click', function() {
  document.getElementById('introduction').classList.add("hidden"); 
  document.getElementById('education').classList.add("hidden");
  document.getElementById('experience').classList.add("hidden"); 
  document.getElementById('projects').classList.remove("hidden");
});