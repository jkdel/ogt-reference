function check() {
  document.getElementById("result").innerHTML = "";
  insulin=document.getElementById("insulin").value
  time=document.getElementById("time").value
  if (time >=90 && time <= 180) {
    if (insulin != 0) {
      cutoff=Math.round(9.515353+2.623057*time-0.04145439*time*time+0.0003201212*time*time*time-0.0000008373978*time*time*time*time);
      if (insulin<=0.8*cutoff) {
        document.getElementById("result").innerHTML = "This level of insulin response is <strong>considered normal</strong>. Please remember that the proposed reference range is only valid for the protocol described above and that any medical decision should take the clinical circumstances into account.";
        document.getElementById("result").style.backgroundColor = "#d8f2d2";
      } else if (insulin>1.2*cutoff) {
        document.getElementById("result").innerHTML = "The given values are <strong>indicative of insulin dysregulation</strong>. We recommend adapting the horse's management (see <a href='#suggested'>'Suggested readings'</a>). Please bear in mind that any medical decision should consider the clinical circumstances in addition to the laboratory measurements.";
        document.getElementById("result").style.backgroundColor = "#f7bbb9";
      } else {
        document.getElementById("result").innerHTML = "This value is <strong>intermediate</strong> and does not warrant a reliable diagnosis. We suggest retesting the patient in a few weeks and recommend taking more than one sample in the range of 90 to 180 min, to increase the sensitivity of the OGT. Please bear in mind that any medical decision should consider the clinical circumstances in addition to the laboratory measurements.";
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
