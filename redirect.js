//<![CDATA[
//Script Redirect CTRL + U
//https://mastamvan.blogspot.com/ ganti dengan url blog kalian
function redirectCU(e) {
  if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    window.location.replace("http://tokopulberaja.online");
    return false;
  }
  if (event.ctrlKey && event.keyCode == 85) {
    window.location.replace("http://tokopulberaja.online");
    return false;
  }
  if (event.keyCode == 123) {
    window.location.replace("http://tokopulberaja.online");
    return false;
  }
   if (event.keyCode && event.keyCode == 70) {
    window.location.replace("http://tokopulberaja.online");
    return false;
  }
   if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                   disabledEvent(e);
               }
    if (event.keyCode && event.keyCode == 69) {
    window.location.replace("http://tokopulberaja.onlinep");
    return false;
  }
      if (event.keyCode && event.keyCode == 76) {
    window.location.replace("http://tokopulberaja.online");
    return false;
  }
  if (event.keyCode && event.keyCode == 75) {
    window.location.replace("http://tokopulberaja.online");
    return false;
  }
  if (event.keyCode && event.keyCode == 68) {
    window.location.replace("http://tokopulberaja.online");
    return false;
  }
  if (event.keyCode && event.keyCode == 17) {
    window.location.replace("http://tokopulberaja.online");
    return false;
  }
}
document.onkeydown = redirectCU;
//]]>
