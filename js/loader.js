
document.addEventListener('DOMContentLoaded', function() {
  // Immediately show the loader when the DOM starts loading
  showLoader();

  // Hide the loader once the page is fully loaded
  window.addEventListener('load', function() {
    hideLoader();
  });

  // Additionally, in case the load event has already been fired before the script runs
  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    // If the page is still loading, ensure the loader is hidden once it's done
    window.addEventListener('load', hideLoader);
  }
});

function showLoader() {
  var loaderContainer = document.getElementById('loader-container');
  if (loaderContainer) {
    loaderContainer.style.display = 'flex'; // Assuming 'flex' is your initial display type
  }
}

function hideLoader() {
  // Use setTimeout to ensure the loader is displayed for a minimum of 3 seconds
  setTimeout(function() {
    var loaderContainer = document.getElementById('loader-container');
    if (loaderContainer) {
      loaderContainer.style.display = 'none';
    }
  }, 3000); // Adjust time as needed (3000ms = 3 seconds)
}

