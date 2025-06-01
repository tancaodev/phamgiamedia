import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
	service: 'gmail',
	secure: false,
	auth: {
		type: 'OAuth2',
		user: 'thekiet.github@gmail.com',
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
	},
});

app.post('/api/register', async (req, res) => {
	const { name, email, message } = req.body;
    
	if (!name || !email || !message) {
		return res.status(400).json({ message: 'Thiếu thông tin liên hệ' });
	}

	// Lưu vào file
	const csvLine = `"${name}","${email}","${message.replace(/"/g, '""')}"\n`;
	fs.appendFile('users.csv', csvLine, (err) => {
		if (err) {
			console.error('Lỗi khi ghi file:', err);
		}
	});

	// Gửi email người dùng
	const mailOptions = {
		from: 'thekiet.github@gmail.com',
		to: email,
		subject: 'Thông tin liên hệ mới từ website',
		html: `<h2>Thông tin liên hệ mới</h2>
               <p><b>Họ tên:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Nội dung:</b> ${message}</p>`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({
			message: 'Gửi thông tin thành công và đã gửi email!',
		});
	} catch (error) {
		console.error('Lỗi gửi email:', error);
		res.status(500).json({
			message: 'Gửi thông tin thất bại khi gửi email.',
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
