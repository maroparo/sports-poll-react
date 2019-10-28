import React from "react";
import PropTypes from "prop-types";
import FootballWallpaper from "../../media/footballwallpaper.jpg";
import HockeyWallpaper from "../../media/icehokeywallpaper.jpg";
import TennisWallpaper from "../../media/tenniswallpaper.jpg";
import HandballWallpaper from "../../media/handballwallpaper.jpg";
import SnookerWallpaper from "../../media/snookerwallpaper.jpg";

function WallpaperSection(props) {
  let image;
  switch (props.sport) {
    case "FOOTBALL":
      image = FootballWallpaper;
      break;
    case "SNOOKER":
      image = SnookerWallpaper;
      break;
    case "HANDBALL":
      image = HandballWallpaper;
      break;
    case "ICE_HOCKEY":
      image = HockeyWallpaper;
      break;
    default:
      image = TennisWallpaper;
  }
  return (
    <div
      className="container-background"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

WallpaperSection.propTypes = {
  sport: PropTypes.string.isRequired
};

export default WallpaperSection;
