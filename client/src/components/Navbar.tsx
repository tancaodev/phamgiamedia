import { useState } from 'react'
import { Mail, MapPinned, Phone } from 'lucide-react'
import { FaTiktok, FaYoutube, FaFacebook, FaLock, FaUnlock } from 'react-icons/fa'

const Navbar = () => {
    const [isHoverLock, setIsHoverLock] = useState(false)

    return (
        <header className='w-full bg-gradient-to-r py-8 drop-shadow-2xl'>
            <div className='flex flex-col screen-max-width gap-8'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <MapPinned color='white' />
                            <p className='text-primary-white text-body-md-2'>Bến Lức - Long An</p>
                        </div>
                        <span className='w-px h-6 bg-white/50 mx-4'></span>
                        <div className='flex items-center gap-2'>
                            <Phone color='white' />
                            <p className='text-primary-white text-body-md-2'>0966777811</p>
                        </div>
                        <span className='w-px h-6 bg-white/50 mx-4'></span>
                        <div className='flex items-center gap-2'>
                            <Mail color='white' />
                            <p className='text-primary-white text-body-md-2'>phamgiamedia@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <span onMouseEnter={() => setIsHoverLock(true)} onMouseLeave={() => setIsHoverLock(false)} className='cursor-pointer'>
                            {isHoverLock ? <FaUnlock size={24} color='white' /> : <FaLock size={24} color='white' />}
                        </span>
                        <FaTiktok size={24} color='white' />
                        <FaYoutube size={24} color='white' />
                        <FaFacebook size={24} color='white' />
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <img src='/logo.svg' alt='Logo' width={155} height={25} />

                    <nav className='flex items-center justify-between'>
                        {/* Desktop Navigation */}
                        <div className='hidden lg:flex justify-center gap-12'>
                            <div className='text-white font-bold text-headline-4 transition-all cursor-pointer'>Trang Chủ</div>
                            <div className='text-white font-bold text-headline-4 transition-all cursor-pointer'>About Us</div>
                            <div className='text-white font-bold text-headline-4 transition-all cursor-pointer'>Dịch Vụ</div>
                            <div className='text-white font-bold text-headline-4 transition-all cursor-pointer'>Liên Hệ</div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
