import React from "react";
import "./CardFooter.css";

export default function CardFooter(props) {
  const codeMapping = {
    "01d": `"I’ve been watching blue skies come and go." - A-ha`,
    "01n": `"There's a moon in the sky, it’s called the moon.” - The B-52’s`,
    "02d": `“Like the sun coming out, I just know that something good is gonna happen, we’ve been cloudbusting.” - Kate Bush`,
    "02n": `“Like the sun coming out, I just know that something good is gonna happen, we’ve been cloudbusting.” - Kate Bush`,
    "03d": `"A cloud appears above your head, a beam of light comes shining down on you.” - A Flock of Seagulls`,
    "03n": `"A cloud appears above your head, a beam of light comes shining down on you.” - A Flock of Seagulls`,
    "04d": `“Into the cloudburst overhead, I wanna get my face wet, there’s gonna be a cloudburst here.” - Thomas Dolby`,
    "04n": `“Into the cloudburst overhead, I wanna get my face wet, there’s gonna be a cloudburst here.” - Thomas Dolby`,
    "09d": `"Open the sky and let her come down, here comes the rain, here she comes again.” - The Cult`,
    "09n": `"Open the sky and let her come down, here comes the rain, here she comes again.” - The Cult`,
    "10d": `“Here comes the rain again, falling on my head like a memory.” - Eurythmics`,
    "10n": `“Here comes the rain again, falling on my head like a memory.” - Eurythmics`,
    "11d": `“Can't you hear, can't you hear the thunder? You better run, you better take cover.” - Men at Work`,
    "11n": `“Can't you hear, can't you hear the thunder? You better run, you better take cover.” - Men at Work`,
    "13d": `“And the ground is frozen through, and you’re driven, like the snow, pure in heart.” - Sisters of Mercy`,
    "13n": `“And the ground is frozen through, and you’re driven, like the snow, pure in heart.” - Sisters of Mercy`,
    "50d": `"My head's in the clouds, yeah I get misty just holding your hand.” - Dead or Alive`,
    "50n": `"My head's in the clouds, yeah I get misty just holding your hand.” - Dead or Alive`,
  };

  return <div className="card-footer">{codeMapping[props.data.icon]}</div>;
}
