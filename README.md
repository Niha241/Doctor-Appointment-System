# Doctor Appointment System

A full-stack web application for managing doctor appointments online. The system allows users to interact with doctors, book appointments, upload images, and make online payments.

## Features

- User authentication
- Doctor management
- Appointment booking and management
- REST API integration
- Image upload
- Online payment integration
- Responsive user interface

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Image Upload:** Multer
- **Image Management:** Cloudinary
- **Payment Gateway:** Razorpay

## Project Overview

The frontend is developed using React.js, while Node.js and Express.js are used to build the backend and APIs. MongoDB is used for storing application data.

Multer is used to handle image uploads, and Cloudinary is used for image management. Razorpay is integrated to provide online payment functionality.

## Installation

### Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
cd doctor-appointment-system
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the backend directory and add your required credentials:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

**Do not upload your actual API keys or passwords to GitHub.**

## Running the Project

Start the backend:

```bash
npm start
```

Start the frontend according to your React project configuration.

## Technologies Used

**React.js | Node.js | Express.js | MongoDB | Multer | Cloudinary | Razorpay**

## Author

**Niha Hazarika**

GitHub: https://github.com/Niha241