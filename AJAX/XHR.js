let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=16', true);
xhr.send(null);

xhr.onreadystatechange = initData;

function initData() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    var data = JSON.parse(xhr.response);
    // debugger; // NOTE: uncomment this to observe JSON objects
    // call display function here
    callback(data);
  };
};

// Callback: Process data however you need to
function callback(data) {


// E.g. display (render with vanulla JS)
  data.forEach( function(e) {
      var name = e.data.name;

      // Render
      var nameElement = document.createElement('li');
      nameElement.innerText = name;
      // ...
  });
};
