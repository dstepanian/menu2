import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactInformation() {
    return (
        <div className="container max-w-lg mx-auto flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 mt-10">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Get in Touch</h2>
            <div className="w-full space-y-4 text-gray-700">
                <div className="flex items-center space-x-3 text-lg">
                    <FaPhone className="text-primary" />
                    <span>+374 (099) 13-45-67</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                    <FaPhone className="text-primary" />
                    <span>+374 (033) 13-45-47</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                    <FaPhone className="text-primary" />
                    <span>+374 (095) 33-45-67</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                    <FaEnvelope className="text-primary" />
                    <span>info@myrestaurant.com</span>
                </div>
            </div>
        </div>
    );
}
