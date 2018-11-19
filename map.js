// var map;

// var position = [{
//   lat: 23.9333649,
//   lng: 120.6975725
// }, {
//   lat: 23.9390193,
//   lng: 120.6972251
// }, {
//   lat: 23.9570555,
//   lng: 120.6861253
// }];

// var num = [100, 20, 30];
// var circle = [];
// var marker = [];

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 16,
//     center: position[2]
//   });

//   position.forEach(function(e, i) {
//     circle[i] = new google.maps.Circle({
//       center: e,
//       radius: num[i] * 30,
//       strokeOpacity: 2,
//       fillColor: '#000',
//       fillOpacity: 0.05,
//       map: map
//     });
//     marker[i] = new google.maps.Marker({
//       position: e,
//       map: map,
//       label: num[i].toString()
//     });
//   });
// }


var map2;

function initMap() {
  map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 15,
    center: {
      lat: 23.7352644,
      lng: 120.4006923
    }
  });

  var rect = new google.maps.Rectangle({
    bounds: {
      north: 23.7366151,
      south: 23.732571,
      east: 120.4031854,
      west: 120.3884762
    },
    strokeOpacity: 0.5,
    fillColor: '#000',
    fillOpacity: 0.3,
    editable: true,
    map: map2
  });

}


//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.85198197861!2d120.38470135219931!3d23.73466345465831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eb08d20413dbd%3A0xedc868a86b9e2aed!2zNjMy6Zuy5p6X57ij6JmO5bC-6Y6u5aK-5Zyw6YeM!5e0!3m2!1szh-TW!2stw!4v1541755024510" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>