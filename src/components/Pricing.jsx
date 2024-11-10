import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react"

const Pricing = () => {
    const pricingJson = [
        {
          plan: 'Basic',
          text: "For casual gym-goers",
          price: "$29.99/mo",
          t1: "Access to gym equipment",
          t2: "Locker room access",
          t3: "Free weights area"
    
        },
        {
          plan: 'Pro',
          text: "For serious fitness enthusiasts",
          price: "$49.99/mo",
          t1: "All Basic features",
          t2: "Group fitness classes",
          t3: "Personalized workout plan"
    
        },
        {
          plan: 'Elite',
          text: "For those who want it all",
          price: "$79.99/mo",
          t1: "All Pro features",
          t2: "Personal training sessions",
          t3: "Nutrition consultation"
    
        },
      ]
  return (
    <section id="pricing" className="p-8 pb-20 pt-10 text-center dark:bg-dark bg-blue-gray-50 dark:text-white">
        <div className="max-w-7xl mx-auto">
            <Typography variant="h2" className="mb-4 text-primary">Membership Pricing</Typography>
            <Typography variant="paragraph" className="text-gray-600 dark:text-gray-300 text-center max-w-xl mx-auto mb-12">Whether you're looking for more information or just want to sebd us a message, feel free tk reach out. 
                We'd love to hear from you!
            </Typography>
            <div className="grid gap-6 md:grid-cols-3">
                {
                    pricingJson.map((item) => {
                        return(
                            <Card key={item.plan} className=" dark:bg-dark bg-white dark:text-white border-2 p-6 rounded-lg shadow-md text-start">
                                <CardBody>
                                    <Typography variant="h3" className="font-semibold">{item.plan}</Typography>
                                    <Typography variant="paragraph" className="text-sm">{item.text}</Typography>
                                    <Typography variant="h3" className="mt-4 mb-4">{item.price}</Typography>
                                    <div className="flex gap-1">
                                        <Typography variant="paragraph">{item.t1}</Typography>
                                    </div>
                                    <div className="flex gap-1">
                                        <Typography variant="paragraph">{item.t2}</Typography>
                                    </div>
                                    <div className="flex gap-1">
                                        <Typography variant="paragraph">{item.t3}</Typography>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Button variant="filled" className="bg-dark dark:bg-white dark:text-black text-white px-3 py-2 rounded-md mt-4 w-full">Choose Plan</Button>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Pricing