<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOYuaBDZ5cPbh7RzWAFoHBYq1YZbYPK4A&libraries=places&callback=initialize" async defer>
  </script>
<script>
    var map;
    var service;
    var foodFinder;
    var results;

    function initialize() {
      var wellington = new google.maps.LatLng(0,0);
      map = new google.maps.Map(document.getElementById('map'), {
          center: wellington,
          zoom: 15
        });

      $("#statusBar").html("Finding food near you.  (400 meter radius)...")
    }

    // Called by geolocation 'getCurrentPosition()' below...
    function setPosition(position) {
      var coords = position.coords;
      var posLat = coords.latitude;
      var posLng = coords.longitude;
      //sets coordinate pair in 'foodFinder'
      foodFinder = new google.maps.LatLng(posLat, posLng)
      //$("#statusBar").html("You are at LAT:" + posLat.toFixed(3) + ", LONG:" + posLng.toFixed(3));
      makeRequest();
    }

    function makeRequest() {
      var request = {
        location: foodFinder,
        radius: '400',
        types: ['restaurant']
      };

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    }

    // Callback function from Places API. Gets results, creates DIV elements for each
    // Checks for callback status OK, populates list w/ results, else, error message
    function callback(results, status) {
      console.log(status);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        $("#statusBar").html("Here are all of the restaurants near you:" + "<br/>");
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          // console.log(place.name);
          var thisResult = "result" + i;
          var resultDiv = $("<div/>").attr({
            id: thisResult
          }).text(place.name);
          $(document.getElementById("resultsContainer")).append("</br>");
          $(document.getElementById("resultsContainer")).append(resultDiv);
        }
      } else {
        $(document.getElementById("statusBar")).html("Sorry, no restaurants in range.")
      }
    }
</script>
