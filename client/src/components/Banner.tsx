const Banner = () => {
    return (
        <section className='w-full bg-gradient-to-r pt-8 overflow-hidden'>
            <div className='flex screen-max-width h-full'>
                <div className='flex-1 flex flex-col justify-center z-10'>
                    <h2 className='text-white font-bold text-3xl mb-4'>Phạm Gia Media</h2>
                    <h1 className='text-white font-bold text-headline-2 mb-8'>
                        ĐƯA SẢN PHẨM DỊCH VỤ CỦA BẠN
                        <br />
                        TIẾP CẬN ĐẾN KHÁCH HÀNG DỄ DÀNG HƠN
                    </h1>
                    <div>
                        <button className='bg-[#ffb366] text-white font-bold py-8 px-8 rounded-full text-xl shadow-lg inline-block'>Tìm Hiểu Chi Tiết</button>
                    </div>
                </div>
                <div className='flex-1 flex items-end justify-end relative'>
                    <img src='/banner.svg' alt='Banner' className='-scale-x-100 max-w-full object-contain' style={{ height: 600 }} />
                </div>
            </div>
        </section>
    )
}

export default Banner
