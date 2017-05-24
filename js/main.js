(function(){

  var lightSwitch = document.querySelector('.light-switch');
  var body = document.querySelector('body');
  var lightState = document.querySelector('#light-status');

  toggleLightState(true);

  lightSwitch.addEventListener('click', function(e) {
    body.classList.toggle('lights-off');

    toggleLightState(body.className.split(' ').indexOf('lights-off') < 0);

  });

  function toggleLightState(state) {
    lightState.innerHTML = (!state) ? "On" : "Off";
  }

})();