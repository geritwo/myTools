// Sophisticated AJAX client for XHR


// Init
function initRequest() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'http://localhost:3000/exam', true);
  return httpRequest;
}

// POST request with XHR. NOTE: Set header content type for POST!
function postData(httpRequest, data) {
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.send(JSON.stringify(data));

  httpRequest.onreadystatechange = function () { fetchResponse(httpRequest)}; // Optional; can process data without error checking
};

// check response or error
function fetchResponse(httpRequest) {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    console.log(httpRequest);  // NOTE: 4Debug
      if (httpRequest.status === 200) {
        var incoming = JSON.parse(httpRequest.response);
        console.log('Response:', incoming);
        processResponse(incoming);
      } else {
        loading.textContent = 'ERROR: There was a problem with the request.';
      }
  }
};

function processResponse(data) {}; // Do whatever with data
