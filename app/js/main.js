
angular.module('myApp', ['duParallax']).
  controller('MyCtrl', function($scope, parallaxHelper){
    $scope.background = parallaxHelper.createAnimator(-0.3);
  }
);

$(document).ready(function(){
    $('.collapsible popout').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });





// $scope.invertColors = function(elementPosition) {
//   var factor = -0.4;
//   var pos = Math.min(Math.max(elementPosition.elemY*factor, 0), 255);
//   var bg = 255-pos;
//   return {
//     backgroundColor: 'rgb(' + bg + ', ' + bg + ', ' + bg + ')',
//     color: 'rgb(' + pos + ', ' + pos + ', ' + pos + ')'
//   };
// };
