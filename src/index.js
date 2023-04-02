//when click on introduction button
var introductionBtn = document.getElementById('introduction-btn');
var educationBtn = document.getElementById('education-btn');
var workExperienceBtn = document.getElementById('workexperience-btn');
var projectsBtn = document.getElementById('projects-btn');
var contactBtn = document.getElementById('contact-btn');
introductionBtn.classList.add('button-click')
introductionBtn.addEventListener('click', function() {
  document.getElementById('introduction').classList.remove("hidden"); 
  document.getElementById('education').classList.add("hidden");
  document.getElementById('experience').classList.add("hidden"); 
  document.getElementById('projects').classList.add("hidden");
  document.getElementById('contact').classList.add("hidden");
  introductionBtn.classList.add('button-click')
  educationBtn.classList.remove('button-click')
  workExperienceBtn.classList.remove('button-click')
  projectsBtn.classList.remove('button-click')
  contactBtn.classList.remove('button-click')
});
//when click on education button

    educationBtn.addEventListener('click', function() {
      document.getElementById('introduction').classList.add("hidden"); 
      document.getElementById('education').classList.remove("hidden");
      document.getElementById('experience').classList.add("hidden"); 
      document.getElementById('projects').classList.add("hidden");  
      document.getElementById('contact').classList.add("hidden");
      introductionBtn.classList.remove('button-click')
      educationBtn.classList.add('button-click')
      workExperienceBtn.classList.remove('button-click')
      projectsBtn.classList.remove('button-click')
      contactBtn.classList.remove('button-click')
    });
//when click on work experience button

workExperienceBtn.addEventListener('click', function() {
  document.getElementById('introduction').classList.add("hidden"); 
  document.getElementById('education').classList.add("hidden");
  document.getElementById('experience').classList.remove("hidden"); 
  document.getElementById('projects').classList.add("hidden"); 
  document.getElementById('contact').classList.add("hidden");
  introductionBtn.classList.remove('button-click')
  educationBtn.classList.remove('button-click')
  workExperienceBtn.classList.add('button-click')
  projectsBtn.classList.remove('button-click')
  contactBtn.classList.remove('button-click')
});
//when click on projects button

projectsBtn.addEventListener('click', function() {
  document.getElementById('introduction').classList.add("hidden"); 
  document.getElementById('education').classList.add("hidden");
  document.getElementById('experience').classList.add("hidden"); 
  document.getElementById('projects').classList.remove("hidden");
  document.getElementById('contact').classList.add("hidden");
  introductionBtn.classList.remove('button-click')
  educationBtn.classList.remove('button-click')
  workExperienceBtn.classList.remove('button-click')
  projectsBtn.classList.add('button-click')
  contactBtn.classList.remove('button-click')
});
//when click contact button

contactBtn.addEventListener('click', function() {
  document.getElementById('introduction').classList.add("hidden"); 
  document.getElementById('education').classList.add("hidden");
  document.getElementById('experience').classList.add("hidden"); 
  document.getElementById('projects').classList.add("hidden");
  document.getElementById('contact').classList.remove("hidden");
  introductionBtn.classList.remove('button-click')
  educationBtn.classList.remove('button-click')
  workExperienceBtn.classList.remove('button-click')
  projectsBtn.classList.remove('button-click')
  contactBtn.classList.add('button-click')
});