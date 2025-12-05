

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


document.addEventListener('selectstart', function(e) { e.preventDefault(); });
document.addEventListener('copy', function(e) { e.preventDefault(); });

var style = document.createElement('style');
style.innerText = `*{ -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }`;
document.head.appendChild(style);


document.addEventListener('keydown', function(e) {
  // F12
  if (e.key === 'F12') { e.preventDefault(); return false; }
  
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) { e.preventDefault(); return false; }
  
  if (e.ctrlKey && (e.key === 'U' || e.key === 'S')) { e.preventDefault(); return false; }
 
  if (e.ctrlKey && e.shiftKey && e.key === 'K') { e.preventDefault(); return false; }
 
  if (e.metaKey && (e.key === 'U' || e.key === 'S')) { e.preventDefault(); return false; }
});


(function detectDevTools() {
  var last = new Date();
  var check = function() {
    var start = new Date();
    debugger; 
    var delta = new Date() - start;
   
    if (delta > 100) {
    
      var overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.background = 'rgba(0,0,0,0.9)';
      overlay.style.color = '#fff';
      overlay.style.zIndex = 99999;
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.fontSize = '20px';
      overlay.innerText = 'Access denied.';
      document.body.appendChild(overlay);
    }
  };
  setInterval(check, 2000);
})();







// new code


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Common shortcuts
document.addEventListener('keydown', function(e) {

  if (e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && (e.key === 'u' || e.key === 'U'))) {
    e.preventDefault();
    // alert('Inspecting disabled.');
  }
});