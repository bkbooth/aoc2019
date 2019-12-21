function getAngle([startx, starty], [endx, endy]) {
  return Math.atan2(starty - endy, startx - endx);
}

function getDistance([startx, starty], [endx, endy]) {
  const diffX = startx - endx;
  const diffY = starty - endy;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}

module.exports = { getAngle, getDistance };
