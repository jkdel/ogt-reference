function check() {
  document.getElementById("result").innerHTML = "";
  insulin=document.getElementById("insulin").value
  time=document.getElementById("time").value
  if (time >=90 && time <= 180) {
    if (insulin != 0) {
      cutoff=Math.round(9.515353+2.623057*time-0.04145439*time*time+0.0003201212*time*time*time-0.0000008373978*time*time*time*time);
      if (insulin<=0.9*cutoff) {
        document.getElementById("result").innerHTML = "<strong>This value seems fine.</strong> Please remmember that the proposed reference can only be considered valid when the protocol described in the paper this Webapp is based upon was followed and insulin was measured with Mercodia Equine Insulin ELISA.";
        document.getElementById("result").style.backgroundColor = "#d8f2d2";
      } else if (insulin>1.1*cutoff) {
        document.getElementById("result").innerHTML = "This level of insulin at the given time-point of the OGT is considered to be <strong>indicative of insulin dysregulation</strong>. An optimisation of the horse's managment is higly recommended.";
        document.getElementById("result").style.backgroundColor = "#f7bbb9";
      } else {
        document.getElementById("result").innerHTML = "A reliable diagnosis can not be provided upon this value. It is considered to be in a <strong>grey zone</strong>. We suggest retesting the patient in a few weeks. As references are available for the range 90 to 180 min, it is of course possible to take more than one sample to augment the sensitivity of the OGT. This is especially recommended when insulin status is unclear.";
        document.getElementById("result").style.backgroundColor = "#f7e9b9";
      }
    }
  } else {
    document.getElementById("result").innerHTML = "References for insulin are only available for the time range 90 to 180 minutes!";
    document.getElementById("result").style.backgroundColor = "#eee";
  }
}
var el = document.querySelectorAll('input');
for (var i=0; i<el.length; i++) {
  el[i].addEventListener("keyup", function(event) {
    if(event.key !== "Enter") return;
    document.querySelector("#check").click();
    event.preventDefault();
  });
}
var validTime = new RegExp(/^\d{0,3}$/);
var lastValidTime = document.getElementById("time").value;
function validateTime(elem) {
  if (validTime.test(elem.value)) {
    if (parseInt(elem.value)>180) {elem.value = "180";}
    lastValidTime = elem.value;
  } else {
    elem.value = lastValidTime;
  }
}
var validNumber = new RegExp(/^\d*(\.|,)?\d*$/);
var lastValid = document.getElementById("insulin").value;
function validateNumber(elem) {
  if (validNumber.test(elem.value)) {
    lastValid = elem.value;
  } else {
    elem.value = lastValid;
  }
}
