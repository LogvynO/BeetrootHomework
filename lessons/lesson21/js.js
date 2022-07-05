function spanSwitch(e) {
    let txt = e.innerText;
    let element = document.getElementById('element');
  
    element.innerHTML = `<input onblur='spanReset(this)' value='${txt}' />`;
    document.getElementsByTagName('input')[0].focus();
  }
  
  function spanReset(e) {
    let txt = e.value;
    let element = document.getElementById('element');
  
    element.innerHTML = `<span onclick='spanSwitch(this)'> ${txt} </span>`;
  }