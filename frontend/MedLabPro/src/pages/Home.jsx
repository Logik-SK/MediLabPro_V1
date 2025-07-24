import { useLocation, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";


export default function Home() {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
            {/* <Navbar currentPath={location.pathname} /> */}

            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white shadow-sm">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Welcome to <span className="text-blue-700">MediLabPro</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Manage patients, appointments, bills and medical reports seamlessly with our all-in-one Lab Management System.
                    </p>
                    <Link
                        to="/app"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
                    >
                        Get Started
                    </Link>
                </div>
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-ec7e903f7f6d"
                        alt="Lab Hero"
                        className="rounded-xl shadow-xl w-full max-w-md mx-auto"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-100 py-20 px-6 md:px-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Patient Management",
                            img: "https://cdn-icons-png.flaticon.com/512/2920/2920219.png",
                            desc: "Track and manage patient profiles, history, and contact details with ease.",
                        },
                        {
                            title: "Appointments",
                            img: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
                            desc: "Schedule, update, and organize lab appointments in real-time.",
                        },
                        {
                            title: "Billing & Reports",
                            img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
                            desc: "Generate invoices and medical reports with detailed breakdowns.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-20 h-20 mx-auto mb-6"
                            />
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 md:px-16 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Simplify Lab Operations?
                </h2>
                <p className="text-lg mb-8">
                    Empower your lab with digital tools to serve patients better.
                </p>
                <Link
                    to="/signup"
                    className="bg-white text-blue-700 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-100 transition duration-300"
                >
                    Sign Up Now
                </Link>
            </section>

            <Footer />
        </div>
    );
}
