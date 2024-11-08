import { Button, Card, Typography } from "@material-tailwind/react"

const About = () => {
  return (
    <section id="about" className="dark:bg-dark bg-white dark:text-white">
        <div className="border-2 p-8 text-center max-w-7xl mx-auto">
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
                        
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About