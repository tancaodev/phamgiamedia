interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    description: string
    className?: string
}

const ServiceCard = ({ icon, title, description, className = '' }: ServiceCardProps) => {
    return (
        <div
            className={`bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-2xl ${className}`}
        >
            <div className='mb-4 text-5xl'>{icon}</div>
            <h3 className='text-xl font-bold mb-2 text-white'>{title}</h3>
            <p className='text-white/90 text-base'>{description}</p>
        </div>
    )
}

export default ServiceCard
