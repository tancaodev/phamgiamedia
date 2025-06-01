const Footer = () => {
    return (
        <footer className='w-full bg-gradient-to-r pt-64 pb-4 text-white'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-32 px-4'>
                {/* Logo */}
                <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
                    <div className='w-16 h-16 bg-white rounded-full mb-2 flex items-center justify-center text-primary-red-foreground font-bold text-2xl'>
                        Logo
                    </div>
                    <span className='font-semibold tracking-wide'>PHAM GIA MEDIA</span>
                </div>
                {/* Links */}
                <div className='flex-1 grid grid-cols-2 text-sm justify-items-center md:justify-items-start'>
                    <div className='flex flex-col gap-1 font-semibold text-body-md-2'>
                        <span className='font-bold'>Trang Chủ</span>
                        <span>Dịch Vụ</span>
                        <span>About us</span>
                        <span>Liên Hệ</span>
                    </div>
                    <div className='flex flex-col gap-1 font-semibold text-body-md-2'>
                        <span>Điều khoản dịch vụ</span>
                        <span>Chính sách bảo mật</span>
                        <span>Chia Sẻ Kiến Thức</span>
                        <span>Tuyển Dụng</span>
                    </div>
                </div>
                {/* Chứng nhận */}
                <div className='flex flex-col items-center md:items-end gap-2'>
                    <a href='//www.dmca.com/Protection/Status.aspx?ID=75e27fd6-377b-4325-af69-a683b6983e11' title='DMCA.com Protection Status'>
                        <img
                            src='https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=75e27fd6-377b-4325-af69-a683b6983e11'
                            alt='DMCA.com Protection Status'
                            className='object-contain'
                        />
                    </a>
                    <script src='https://images.dmca.com/Badges/DMCABadgeHelper.min.js'> </script>
                    <img src='./badge.png' alt='Bộ công thương' className='w-[121px]' />
                </div>
            </div>
            <div className='max-w-6xl mx-auto mt-6 text-center text-xs text-white/80 px-4'>
                Giấy chứng nhận đăng ký kinh doanh số ............do sở tài chính tỉnh Long An cấp ngày.............
                <br />
                2025 Phamgiamedia. All Right Reserve
                <br />
                <span className='text-white/60'>Made by Pham Gia Media</span>
            </div>
        </footer>
    )
}

export default Footer
