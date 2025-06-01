import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })
            if (res.ok) {
                alert('Gửi thông tin thành công!')
            } else {
                alert('Gửi thông tin thất bại!')
            }
        } catch (err) {
            alert('Có lỗi xảy ra khi gửi thông tin!')
        } finally {
            setForm({ name: '', email: '', message: '' })
            setLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-3xl mx-auto bg-white rounded shadow-lg flex flex-col md:flex-row overflow-hidden'
        >
            {/* Form liên hệ */}
            <div className='flex-1 p-8 flex flex-col gap-4'>
                <h3 className='text-primary-red-foreground text-lg font-bold mb-4 text-center'>LIÊN HỆ</h3>
                <input
                    type='text'
                    name='name'
                    placeholder='Họ tên'
                    value={form.name}
                    onChange={handleChange}
                    className='bg-gray-100 rounded px-4 py-2 mb-2 outline-none'
                    required
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={form.email}
                    onChange={handleChange}
                    className='bg-gray-100 rounded px-4 py-2 mb-2 outline-none'
                    required
                />
                <textarea
                    name='message'
                    placeholder='Nội dung'
                    value={form.message}
                    onChange={handleChange}
                    className='bg-gray-100 rounded px-4 py-2 mb-4 outline-none'
                    rows={3}
                    required
                />
                <button
                    type='submit'
                    disabled={loading}
                    className='w-fit px-8 py-2 bg-gradient-to-r from-primary-red-foreground to-orange-400 text-white rounded-full font-semibold mx-auto disabled:opacity-60'
                >
                    {loading ? 'Đang gửi...' : 'Gửi'}
                </button>
            </div>
            {/* Thông tin liên hệ */}
            <div className='flex-1 p-8 bg-orange-300 text-white flex flex-col gap-2'>
                <h3 className='text-lg font-bold mb-4 text-center'>THÔNG TIN LIÊN HỆ</h3>
                <div>Điện thoại: 0853 202 202</div>
                <div>Email: phamgiamedia@gmail.com</div>
                <div>Địa chỉ: 1132 QL1A, KP7, Bến Lức, Long An</div>
            </div>
        </form>
    )
}

export default Contact
