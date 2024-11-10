import { Card, CardBody, CardHeader, Carousel, Typography } from "@material-tailwind/react";

const TestimonialData = [
    {
        id: 1,
        name: "Payal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Rohit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Aman",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Ankit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonials = () => {
    
  return (
    <div id="testimonials" className="py-20 overflow-hidden px-7 md:px-0 dark:bg-black bg-white dark:text-white">
        <div className="max-w-7xl mx-auto items-center text-center">
            {/* Header Section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <Typography variant="h2" className="text-primary mb-4 md:text-4xl">Testimonials</Typography>
                <Typography variant="paragraph" className="mx-auto dark:text-gray-300 mb-8 text-gray-600 max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officia quod voluptates tenetur quasi, fugiat nulla eos ea aliquam tempore?
                </Typography>
            </div>
            {/* Testimonials Card */}
            <div>
                <Carousel className="border-2">
                    {
                        TestimonialData.map((data) => {
                            return(
                                <div key={data.id} className="my-6">
                                    <Card  className="bg-transparent flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl">
                                        <CardHeader className="bg-transparent mb-4">
                                            <img src={data.img} alt="" className="rounded-full w-50 h-50" />
                                        </CardHeader>
                                        <CardBody className="flex flex-col items-center gap-4">
                                            <div className="space-y-3">
                                                <Typography variant="paragraph" className="text-gray-500 dark:text-gray-300 text-start">{data.text}</Typography>
                                                <Typography variant="h1" className="text-black/80 dark:text-primary text-start">{data.name}</Typography>
                                            </div>
                                        </CardBody>
                                        <Typography variant="paragraph" className="text-primary/20 text-9xl font-serif absolute top-0 right-0">,,</Typography>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>

    </div>
  )
}

export default Testimonials