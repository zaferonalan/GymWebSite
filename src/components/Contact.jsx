import { Button, Card, Input, Textarea, Typography } from "@material-tailwind/react";
import { Mail, MapPin, Phone } from "lucide-react";
const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 dark:bg-dark dark:text-white">
        <div className="max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen">
            {/* header */}
            <Typography variant="h2" className="md:text-4xl text-primary mb-4 text-center">Get in Touch</Typography>
            <Typography variant="paragraph" className="text-gray-600 dark:text-gray-300 text-center max-w-xl mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus asperiores adipisci voluptates dolores vel voluptatem itaque aspernatur quo. Facilis!
            </Typography>
            <div className="grid md:grid-flow-col gap-10">
                {/* contact Form */}
                <Card className="bg-white dark:bg-[#28282B] shadow-lg rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]">
                    <form className="flex flex-col space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Full Name
                            </label>
                            <Input id="name" type="text" className="mt-1 p-3 block w-full border
                                border-gray-300 dark:bg-dark rounded-md shadow-sm sm:text-sm"
                                placeholder="Zafer Günay Önalan"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email Address
                            </label>
                            <Input id="email" type="email" className="mt-1 p-3 block w-full border
                                border-gray-300 dark:bg-dark rounded-md shadow-sm sm:text-sm"
                                placeholder="zafergunay7@gmail.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <Textarea rows={4} id="message" type="" className="mt-1 p-3 block w-full border
                                border-gray-300 dark:bg-dark rounded-md shadow-sm sm:text-sm"
                                placeholder="Your message here..."
                            />
                        </div>
                        <Button type="submit" className="bg-dark dark:bg-white dark:text-black text-white py-2 px-4 rounded-md shadow-md hover:bg-black">Send Message</Button>
                    </form>
                </Card>
                {/* location and map */}
                <div className="bg-white dark:bg-[#28282B] shadow-lg rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-1">
                        <Typography variant="h3" className="text-primary mb-4">Our Location</Typography>
                        <div className="text-gray-600 dark:text-gray-300 flex gap-2 items-center">
                            <MapPin className="text-primary"/>
                            <Typography variant="paragraph">
                                123 Fitness Aveue <br/>
                                Muscle City, Workout State 12345
                            </Typography>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Phone className="text-primary"/>
                            <Typography variant="paragraph" className="text-gray-600 dark:text-gray-300 mt-4">Phone: (123) 456-7890</Typography>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Mail className="text-primary mt-3"/>
                            <Typography variant="paragraph" className="text-gray-600 dark:text-gray-300 mt-4">Email: zafergunay7@gmail.com</Typography>
                        </div>
                    </div>
                    <div>
                        {/* placeholder for google map */}
                        <div className="w-full h-64 bg-gray-300 rounded-lg">
                        <iframe
                            className="w-full h-full rounded-lg"
                            title="Gym Location" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49957.145762402164!2d27.084699048190895!3d38.50329295331898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd6118e58a90d%3A0x73d8c794b58655c2!2zS2FyxZ_EsXlha2EvxLB6bWly!5e0!3m2!1str!2str!4v1731265814936!5m2!1str!2str" 
                            aria-hidden= "false"
                            tabIndex={0} 
                            allowfullscreen="" 
                            loading="lazy">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Contact