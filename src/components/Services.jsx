import { Typography } from "@material-tailwind/react";
import BannerImg from "../assets/banner.jpg";
import {Bike, Dumbbell, Heart, Users  } from "lucide-react";

const BgStyle = {
  backgroundImage:`url(${BannerImg})`,
  backgroundPositiom: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"

}

const Services = () => {
  const servicesJson = [
    {
      title: "Strength Training",
      description: "Build muscle and increase your strength with our expert weight training programs.",
      icon: Dumbbell
    },
    {
      title: "Group Classes",
      description: "Join our energetic group classes for a fun and motivating workout experience.",
      icon: Users
    },
    {
      title: "Cardio Fitness",
      description: "Improve your cardiovascular health with our state-of-the-art cardio equiment and classes.",
      icon: Heart
    },
    {
      title: "Sping Classes",
      description: "Pedal your way to fitness with our high-intensity spin classes led by certified instructors.",
      icon: Bike
    },
  ]
  return (
    <div id="service" style={BgStyle} className="dark:bg-dark dark:text-white">
      <div className="bg-white/10 dark:bg-black/60 px-6 md:px-0">
        <div className="max-w-7xl mx-auto min-h-[620px] flex items-center">
          <div className="md:w-3/4 w-full space-y-5">
            <Typography variant="h1" className="text-red-500 font-bold text-4xl text-center mb-12">Our Services</Typography>
            <div className="grid grid-cols-2 gap-7">
              {
                servicesJson.map((service) => {
                  return (
                    <div key={service.title}>
                        <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-start">
                          <div className="w-12 h-12 bg-blue-gray-50 dark:bg-[#2B2B2B] text-primary rounded-full flex items-center justify-center md:mb-4">
                            <service.icon className="w-6 h-6 text-primary"/>
                          </div>
                          <div className="flex-1">
                            <Typography variant="h3" className="text-xl font-semibold text-white">{service.title}</Typography>
                            <Typography variant="paragraph" className="text-gray-400 dark:text-gray-400 mt-2">{service.description}</Typography>
                          </div>
                        </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="md:w-1/2">

        </div>
      </div>
    </div>
  )
}

export default Services