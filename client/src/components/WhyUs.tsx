const reasons = [
    {
        icon: '/icons/strategy.svg', // hoặc dùng react-icons
        title: 'Chiến lược nội dung sắc bén, đúng insight khách hàng',
        desc: 'Phạm Gia Media không đơn thuần sản xuất nội dung – chúng con xây dựng giải pháp truyền thông dựa trên hành vi thực tế và đặc điểm từng nhóm đối tượng, giúp thương hiệu của bạn chạm đúng cảm xúc và thúc đẩy chuyển đổi.',
        image: '/images/insight.png'
    },
    {
        icon: '/icons/creative.svg',
        title: 'Đội ngũ sáng tạo & kỹ thuật giàu kinh nghiệm',
        desc: 'Với team chuyên nghiệp, từng triển khai cho nhiều lĩnh vực (du lịch, ẩm thực, bán lẻ, giáo dục…), Phạm Gia Media đảm bảo thiết kế website, logo, video, fanpage đều đúng bộ – đẹp, tinh tế, đúng chuẩn nhận diện.',
        image: '/images/creative.png'
    },
    {
        icon: '/icons/solution.svg',
        title: 'Giải pháp trọn gói\nHiệu quả\nTiết kiệm thời gian',
        desc: 'Từ thiết kế web đến sản xuất nội dung, SEO Google Map, chạy quảng cáo TikTok/Facebook… khách hàng chỉ cần tập trung kinh doanh, mọi việc còn lại để Phạm Gia lo – đúng deadline, đúng ngân sách, đúng kỳ vọng.',
        image: '/images/solutions.png'
    },
    {
        icon: '/icons/sme.svg',
        title: 'Phù hợp với các doanh nghiệp vừa & nhỏ',
        desc: 'Doanh nghiệp vừa & nhỏ thường là những doanh nghiệp mới khởi sự, nguồn lực tài chính & con người có hạn nên chưa thể xây cho mình một phòng marketing in-house ngay được. Phạm Gia Media sẽ là đối tác out-source tin cậy giúp bạn đạt được hiệu quả marketing mà vẫn tối ưu được chi phí.',
        image: '/images/sme.png'
    }
]
const WhyUs = () => {
    return (
        <section className='relative w-full bg-primary-white py-32 overflow-hidden'>
            {/* Halftone góc trên trái */}
            <svg className='absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none' viewBox='0 0 100 100' fill='none'>
                <pattern id='dots' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'>
                    <circle cx='1' cy='1' r='1.5' fill='black' />
                </pattern>
                <rect width='100' height='100' fill='url(#dots)' />
            </svg>

            <div className='screen-max-width'>
                <h2 className='text-3xl md:text-4xl font-bold text-[#ff3131] text-center mb-12'>TẠI SAO NÊN CHỌN PHẠM GIA MEDIA?</h2>
                <div className='relative z-10 flex flex-col gap-24'>
                    {/* Lý do 1 */}
                    <div className='w-1/2 ml-auto flex flex-col md:flex-row items-center gap-8'>
                        <div className='flex-1 flex flex-col items-center md:items-start'>
                            <div className='flex items-center gap-4 mb-2'>
                                <img src='/1.png' alt='' className='w-12 h-12' />
                                <span className='text-lg font-bold text-[#ff3131] text-center'>
                                    Chiến lược nội dung sắc bén, <br /> đúng insight khách hàng
                                </span>
                            </div>
                            <p className='text-gray-700'>{reasons[0].desc}</p>
                        </div>
                        <img src='/insights.jpg' alt='' className='w-48 md:w-64' />
                    </div>
                    {/* Lý do 2 */}
                    <div className='w-1/2 mr-auto flex flex-col md:flex-row-reverse items-center gap-8'>
                        <div className='flex-1 flex flex-col items-center md:items-end'>
                            <div className='flex items-center gap-4 mb-2'>
                                <span className='text-lg font-bold text-[#ff3131] text-center'>
                                    Đội ngũ sáng tạo & <br /> kỹ thuật giàu kinh nghiệm
                                </span>
                                <img src='/2.png' alt='' className='w-12 h-12' />
                            </div>
                            <p className='text-gray-700 text-right'>{reasons[1].desc}</p>
                        </div>
                        <img src='/minds.jpg' alt='' className='w-48 md:w-64' />
                    </div>
                    {/* Lý do 3 */}
                    <div className='w-1/2 ml-auto flex flex-col md:flex-row items-center gap-8'>
                        <div className='flex-1 flex flex-col items-center md:items-start'>
                            <div className='flex items-center gap-4 mb-2'>
                                <img src='/3.png' alt='' className='w-12 h-12' />
                                <span className='text-lg font-bold text-[#ff3131]'>
                                    Giải pháp trọn gói
                                    <br />
                                    Hiệu quả
                                    <br />
                                    Tiết kiệm thời gian
                                </span>
                            </div>
                            <p className='text-gray-700'>{reasons[2].desc}</p>
                        </div>
                        <img src='/solutions.png' alt='' className='w-48 md:w-64' />
                    </div>
                    {/* Lý do 4 */}
                    <div className='w-1/2 mr-auto flex flex-col md:flex-row-reverse items-center gap-8'>
                        <div className='flex-1 flex flex-col items-center md:items-end'>
                            <div className='flex items-center gap-4 mb-2'>
                                <span className='text-lg font-bold text-[#ff3131] text-right'>Phù hợp với các doanh nghiệp vừa & nhỏ</span>
                                <img src='/4.jpg' alt='' className='w-12 h-12' />
                            </div>
                            <p className='text-gray-700 text-right'>{reasons[3].desc}</p>
                        </div>
                        <img src='/images/sme.png' alt='' className='w-48 md:w-64' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
