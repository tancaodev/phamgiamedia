import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const Highlights = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const items = Array.from({ length: 5 })

    return (
        <section className='screen-max-width py-32'>
            <Carousel
                opts={{
                    align: 'start'
                }}
                className='w-full'
            >
                <CarouselContent>
                    {items.map((_, index) => {
                        const centerIndex = (activeIndex + 1) % items.length // ảnh ở giữa
                        const isCenter = index === centerIndex

                        return (
                            <CarouselItem key={index} className='md:basis-1/3 transition-transform duration-500'>
                                <div className={`p-1 transition-transform duration-500 ${isCenter ? 'scale-110 z-10' : 'scale-100 opacity-80'}`}>
                                    <Card>
                                        <CardContent className='flex aspect-square items-center justify-center p-6'>
                                            <span className='text-3xl font-semibold'>{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default Highlights
