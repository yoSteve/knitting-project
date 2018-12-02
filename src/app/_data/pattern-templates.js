const toInches = (cm) => {
  return Math.round(cm * 0.393701);
};

const toCm = (inches) => {
  return Math.round(inches * 2.54);
};

let mainNeedle = guage.needles, // defined
  cuffNeedle = guage.needles - 1,
  bodyCastOn,
  sleeveCastOn,
  cuffColor, // defined
  bodyColor, // defined
  collarColor, // defined
  bodyPatternChart, // defined
  sleevePatternChart, // defined
  yokePatternChart, // defined
  measurements.chest, // defined
  measurements.torso, // defined
  measurements.sleeve, // defined
  cuffIncrease,
  sleeveIncreases,
  sleeveIncreaseRound,
  sleeveStitchcesFinal,
  underarmStitches,
  chestAndBackStitches,
  initialYokeStitches,
  yokePatternEndStitches,
  collarDecreases,
  collarStitches;

const bodyTemplateString = `
  Cast on ${bodyCastOn} stitches using ${cuffNeedle} circular needle, using ${cuffColor}. Join in a circle and work *k1, p1* rib for 5 cm (2").
  Change to ${mainNeedle} circular needle and ${bodyPatternChart ? 'work pattern from chart 1 in Stockingette Stitch. When patt is complete continue' : 'continue in Stockingette Stitch with'}  with ${bodyColor} until body measures ${measurments.torso} cm (${toInches(torsoMeasurements)}") from cast-on edge. Set aside and work sleeves.
`;

const sleevesTemplateString = `
  Cast on ${sleeveCastOn} stitches using ${cuffNeedle} double-pointed needles, using ${cuffColor}. Join in a circle and work *k1, p1* rib for 5 cm (2").
  Change to ${mainNeedle} double-pointed needles and knit one row, increasing ${cuffIncrease} stitches => ${sleeveCastOn + cuffIncrease}. Continue to knit the sleeves pattern in Stockingette Stitch.
  In the ${sleeveIncreaseRound}th row increase 1 sts after the first stitch in the row and 1 stitch before the last stitch in the same row. Repeat increases ${sleeveIncreases} times in every ${sleeveIncreaseRound}th row.
  When total stitches reaches ${sleeveStitchesFinal} stitches, continue without further increasing until the sleeve measure ${sleeveMeasurements} cm from the cast on edge. Place half of ${underarmStitches} stitches on either side of the underarm centre on a piece of scrap yarn or a stitch holder. Set aside and knit the second sleeve in the same way.
`;

const yokeTemplateString = `
  Join body and sleeves as follows: With a ${mainNeedle} circular needle using ${bodyColor}, place the last ${underarmStitches / 2} stitches and the first ${underarmStitches / 2} stitches of body on a stitch holder for the left underarm opening. Knit across the outside of the first (left-hand) sleeve.
  Knit ${chestAndBackStitches} stitches of the body to form the front of the sweater. Place next ${underarmStitches} stitches of the body on a stitch holder to form the underarm opening for the right-hand sleeve. Knit across the outside of the second sleeve. Knit the remaining ${chestAndBackStitches} stitches of the body => ${initialYokeStitches} stitches.
  Knit the yoke pattern and the decreases according to the Yoke knitting chart. Change to a shorter circular needle
  when necessary. When chart has been completed => ${yokePatternEndStitches} stitches, change to ${cuffNeedle}, using ${collarColor}. Knit 1 round decreasing ${collarDecreases} stitches evenly spaced => ${collarStitches} stitches. Work *k1, p1* rib for 7 cm / 2.8" . Bind off loosely.
`;
