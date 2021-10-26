var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/story', function (req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

module.exports = router;

function getStory(formData) {
  if(formData.storyChoice === "1") {
    return generateStory1 (formData);
  } else if (formData.storyChoice ==="2") {
    return generateStory2 (formData);
  } else if (formData.storyChoice ==="3") {
    return generateStory3 (formData);
  } else {
      return "invalid";
  }
}

function generateStory1(formData){
  return `${formData.noun1} is such a nice guy. His ${formData.adjective1} personality is what makes him a good person. He ${formData.verb1} to ${formData.nounplace} before to grab me a snack and during all of this, he ${formData.verb2} into a wall.`
}

function generateStory2(formData){
  return `I am the ruler of ${formData.nounplace}. A ${formData.adjective1} country suitable for me. This country is able to ${formData.verb1} by itself which is really cool. Even ${formData.noun1} agrees so. The cup slowly ${formData.verb2} to it's end.`
}

function generateStory3(formData){
  return `Twas a horrible and shivering ${formData.noun1}. The ${formData.adjective1} skeletons started to ${formData.verb1}! I ${formData.verb2} at the top of my lungs and ran towards ${formData.nounplace}.`
}