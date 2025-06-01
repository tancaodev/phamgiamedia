const WhoWeAre = () => {
    return (
        <section className='screen-max-width bg-primary-white py-32'>
            <h2 className='text-4xl md:text-5xl font-bold text-primary-red-foreground text-center mb-8'>CHÚNG TÔI LÀ AI?</h2>
            <div className='screen-max-width flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='flex-1'>
                    <p className='text-body-md-1 text-gray-700 mb-4 text-center md:text-left'>
                        Phạm Gia Media là công ty truyền thông sáng tạo, chuyên cung cấp các giải pháp sản xuất nội dung số cho nền tảng digital.
                    </p>
                    <p className='text-body-md-1 text-gray-700 text-center md:text-left'>
                        Chúng tôi tập trung vào thiết kế website, logo, hệ thống nhận diện thương hiệu và tối ưu SEO Google Map, xây dựng các kênh nội dung trên
                        Youtube, Tiktok, Facebook.. giúp doanh nghiệp vừa và nhỏ xây dựng hình ảnh chuyên nghiệp và phát triển bền vững trên môi trường trực
                        tuyến.
                    </p>
                </div>
                {/* Cột hình */}
                <div className='flex-1 flex justify-center md:justify-end'>
                    <img src='/whoweare.png' alt='Who We Are' className='max-w-[400px] w-full h-auto' />
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
