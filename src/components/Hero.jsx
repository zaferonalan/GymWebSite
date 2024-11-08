import { Button, Typography } from "@material-tailwind/react";
import BannerImg from "../assets/hero.jpg";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
}

const Hero = () => {
  return (
    <div id="#" style={BgStyle} className="dark:bg-dark dark:text-white">
      <div className="bg-white/10 dark:bg-black/60">
        <div className="max-w-7xl mx-auto h-[90vh] md:min-h-[620px] flex items-center">
          <div className="md:w-1/2 w-full pl-5 md:pl-0 space-y-5">
            <Typography variant="paragraph" className="text-red-500 text-lg md:text-2xl">
              Start your Fitness Journey
            </Typography>
            <Typography variant="h1" className="text-5xl md:text-7xl font-bold text-white">
              Your Fitness Journey Begins!
            </Typography>
            <Typography variant="paragraph" className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam ipsa quibusdam officiis numquam ipsam.</Typography>
            <Button variant="filled" color="red" className="rounded-md px-4 py-3">Get Started</Button>
          </div>
          <div className="md:w-1/2">
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero