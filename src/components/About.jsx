import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react"
import AboutImg from "../assets/About.jpg";
import { Dumbbell, Users, Target} from "lucide-react";


const About = () => {
  return (
    <section id="about" className="dark:bg-dark bg-gray-100 dark:text-white">
        <div className="p-8 text-center max-w-7xl mx-auto">
            <Typography variant="h3" color="red" className="text-4xl font-bold mb-4">About Us</Typography>
            <Typography variant="paragraph" className="text-gray-600 dark:text-gray-200 max-w-xl mx-auto">
                Our gym is dedicated to helping you achive your fitness goals 
                with professional trainers and a motivating enviroment.
            </Typography>
            <div className="w-full py-12 md:py-24 lg:py-10">
                <div className="px-4 md:px-6">
                    <Card variant="gradient" color="transparent" className="shadow-none grid gap-10 lg:grid-cols-2 items-center">
                        <div className="space-y-4 text-start">
                            <Typography variant="h3" className="dark:text-white text-gray-500 sm:text-5xl">About Acme Fitness</Typography>
                            <Typography variant="paragraph" className="maxw-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Founded in 2010, Acme Fitness has been at the forefront of helping people achieve their
                                fitness goals. Our state-of-the-art facilities, expert trainers, and supportive community
                                create the perfect enviroment for your fitness journey.
                            </Typography>
                            <div className="flex flex-col gap-2 min-[400px] md:flex-row">
                                <Button variant="filled" className="inline-flex items-center justify-center bg-black dark:bg-white dark:text-black text-white  px-3 py-2 rounded-md">Our Story</Button>
                                <Button variant="filled" className="bg-red-500 text-white px-3 py-2 rounded-md">Meet Out Trainers</Button>
                            </div>
                        </div>
                        <img src={AboutImg} alt="Gym" height={310} width={550} className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
                    </Card>
                </div>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mt-16">
                    <div>
                        <Card className=" space-y-4 p-6 bg-white dark:bg-dark rounded shadow dark:shadow-gray-300">
                            <CardHeader className="shadow-none flex flex-col items-center bg-white dark:bg-dark  mt-2">
                                <Dumbbell className="h-12 w-12 text-primary text-center"/>
                                <Typography variant="h3" className="text-xl font-bold mt-5 text-black dark:text-white">Our Mission</Typography>
                            </CardHeader>
                            <CardBody>
                                <Typography variant="paragraph" className="text-center dark:text-white text-black">
                                    To inspire and empower individuals to reach their full potential through fitness, 
                                    fostering a healthier and happier community          
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card className=" space-y-4 p-6 bg-white dark:bg-dark rounded shadow dark:shadow-gray-300">
                                <CardHeader className="shadow-none flex flex-col items-center bg-white dark:bg-dark  mt-2">
                                    <Users className="h-12 w-12 text-primary text-center"/>
                                    <Typography variant="h3" className="text-xl font-bold mt-5 text-black dark:text-white">Our Community</Typography>
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="paragraph" className="text-center dark:text-white text-black">
                                        We pride ourselves on creating a welcoming, inclusive environment where members support and 
                                        motivate each other to actieve their goals.          
                                    </Typography>
                                </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card className=" space-y-4 p-6 bg-white dark:bg-dark rounded shadow dark:shadow-gray-300">
                            <CardHeader className="shadow-none flex flex-col items-center bg-white dark:bg-dark  mt-2">
                                <Target className="h-12 w-12 text-primary text-center"/>
                                <Typography variant="h3" className="text-xl font-bold mt-5 text-black dark:text-white">Our Approach</Typography>
                            </CardHeader>
                            <CardBody>
                                <Typography variant="paragraph" className="text-center dark:text-white text-black">
                                    We combine cutting-edge equipment, personalized training programs, 
                                    and nutritional guidance to help you achieve sustainable results.          
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About