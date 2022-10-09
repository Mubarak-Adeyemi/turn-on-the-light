const switchContain = document.querySelector('.on_off');
const switchBtn = document.querySelector('.switch-btn');
const bulb = document.getElementById('bulb');
let status = 'OFF';


switchContain.addEventListener('click', function(){
  if(status === 'OFF'){
      switchBtn.style.left = '50px';
      switchBtn.textContent = 'OFF';
      switchBtn.style.color = '#2a2a2a';
      bulb.src = 'images/lightBulb.png';
      switchContain.style.backgroundColor = '#e8aa4d';
      status = 'ON';
  }else{
      switchBtn.style.left = '5px';
      bulb.src = 'images/bulb.png';
      switchBtn.textContent = 'ON';
      switchBtn.style.color = 'whitesmoke';
      switchContain.style.backgroundColor = '#2C3639';
      status = 'OFF';
  }
});
