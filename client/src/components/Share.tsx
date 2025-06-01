import Contact from './Contact'

const Share = () => {
    return (
        <section className='screen-max-width pt-32 pb-64 relative'>
            <div className='flex flex-col items-center justify-betwee gap-8'>
                <h2 className=' text-primary-red-foreground text-3xl md:text-4xl font-bold text-center mb-12'>CHIA SẺ KIẾN THỨC</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16'>
                    <img src='minds.jpg' />
                    <img src='minds.jpg' />
                    <img src='minds.jpg' />
                    <img src='minds.jpg' />
                    <img src='minds.jpg' />
                    <img src='minds.jpg' />
                </div>
            </div>

            <Contact />
        </section>
    )
}

export default Share
