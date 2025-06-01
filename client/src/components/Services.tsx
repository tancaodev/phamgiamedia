import { FaLaptopCode, FaPenFancy, FaVideo, FaBullhorn, FaMapMarkedAlt, FaStar, FaSearch, FaRegIdBadge } from 'react-icons/fa'
import ServiceCard from './ServiceCard'

const services = [
    {
        icon: <FaLaptopCode />,
        title: 'Thiết Kế Website',
        description:
            'Thiết kế và xây dựng website bán hàng, giới thiệu sản phẩm dịch vụ hoặc xây trên các nền tảng wordpress hoặc code tùy theo nhu cầu của doanh nghiệp'
    },
    {
        icon: <FaPenFancy />,
        title: 'Content Marketing',
        description:
            'Viết bài post cho Facebook, website chuẩn SEO giúp nâng hạng từ khóa để khách hàng dễ tìm kiếm thấy sản phẩm/dịch vụ của doanh nghiệp đang cung cấp'
    },
    {
        icon: <FaVideo />,
        title: 'Video Content',
        description:
            'Chúng tôi có đội ngũ nhân sự lên ý tưởng kịch bản, quay dựng cho ra các video giúp doanh nghiệp tiếp cận khách hàng qua các nền tảng Facebook, Youtube, Tiktok'
    },
    {
        icon: <FaBullhorn />,
        title: 'Ads Marketing',
        description:
            'Ngoài việc có nội dung để đăng trên các nền tảng xã hội, doanh nghiệp cũng cần có sự phủ về mặt doanh số hoặc tăng nhận diện thương hiệu thông qua Ads'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Google Map',
        description:
            'Thông qua việc tối ưu SEO Google Map là một trong những phương cách giúp cửa hàng hoặc dịch vụ của bạn tiếp cận đến nhiều khách tiềm năng hơn'
    },
    {
        icon: <FaStar />,
        title: 'Rating Google Map',
        description:
            'Khách hàng sẽ dễ dàng nhận diện được sự uy tín của thương hiệu qua độ thúc đẩy hành vi tương tác hoặc mua sắm của khách hàng thông qua các đánh giá 5 sao'
    },
    {
        icon: <FaSearch />,
        title: 'SEO Key Word & Map',
        description:
            'Thông qua content và các công cụ đo lường hiệu suất digital marketing, chúng tôi sẽ giúp bạn tối ưu từ khóa hoặc giúp bạn luôn hiển thị ở top đầu tìm kiếm'
    },
    {
        icon: <FaRegIdBadge />,
        title: 'Branding Design',
        description:
            'Để việc kinh doanh phát triển cách bền vững bạn luôn cần một bộ nhận dạng thương hiệu giúp khách hàng dễ nhận biết và nhớ đến sản phẩm hoặc dịch vụ của bạn'
    }
]

const Services = () => {
    return (
        <section className='relative w-full bg-gradient-to-r py-32 overflow-hidden'>
            {/* Halftone góc trên trái */}
            <svg className='absolute top-0 left-0 w-40 h-40 opacity-20 pointer-events-none' viewBox='0 0 100 100' fill='none'>
                <pattern id='dots' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'>
                    <circle cx='1' cy='1' r='1.5' fill='#fff' />
                </pattern>
                <rect width='100' height='100' fill='url(#dots)' />
            </svg>

            {/* Halftone góc dưới phải */}
            <svg className='absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none' viewBox='0 0 100 100' fill='none'>
                <pattern id='dots2' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'>
                    <circle cx='1' cy='1' r='1.5' fill='#fff' />
                </pattern>
                <rect width='100' height='100' fill='url(#dots2)' />
            </svg>

            <div className='screen-max-width'>
                <h2 className='text-white text-4xl md:text-5xl  font-bold text-center mb-12'>DỊCH VỤ CỦA CHÚNG TÔI</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {services.map((item, idx) => (
                        <ServiceCard key={idx} icon={item.icon} title={item.title} description={item.description} className='bg-white/10' />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
