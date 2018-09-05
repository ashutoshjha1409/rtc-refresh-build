function init() {  
    let intervalID = setInterval(() => {
      var entryEle = document.querySelector('.BuildResult')
      , stateEl = document.querySelector('td[dojoattachpoint="state"]')
      , refreshEl = document.querySelector('[title="Refresh"]');
      if (entryEle) { 
        refreshEl.click();
      }      
      if (stateEl && stateEl.innerHTML == 'Completed') {
          // stop the interval once status is completed
          alert('Migration completed');
          clearInterval(intervalID);
      }
    }, 3000);  
}

// Call the init function to setInterval
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
    clearInterval(stateCheck);
  }
}, 100);

