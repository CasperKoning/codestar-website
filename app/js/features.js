require('../img/Features/Features_FastTimeMarket.svg');
require('../img/Features/Features_Integrating.svg');
require('../img/Features/Features_Partner.png');
require('../img/Features/Features_ReduceCode.svg');
require('../img/Features/Features_TheRightPeople.svg');

var features = require('../data/features.json');

export function getFeatures() {
  var list = $('<div>');

  features.features.forEach((feature) => {
    var featureDiv = $('<div>');

    var imgTitle = $('<div>');
    var img = $('<img class="featureIcon" src="' + feature.img + '">');
    var title = $('<p class="featureTitle">').text(feature.name);
    imgTitle.append(img);
    imgTitle.append(title);

    var description = $('<p class="featureDescription">').html(feature.text);
    description.hide();

    imgTitle.click(() => {
      var desc = $(featureDiv).find('.featureDescription');
      $('.featureDescription').not(desc).slideUp(350);
      desc.slideToggle(350);
    });

    featureDiv.append(imgTitle);
    featureDiv.append(description);
    list.append(featureDiv);
  });

  return list;
}
