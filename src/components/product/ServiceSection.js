import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceSection = () => {
    const sections = [
        { category: 'Clothing', path: '/clothing', image: '/images/products/TaniShirt6.png' },
        { category: 'Beats', path: '/beat', image: '/images/products/TaniBeatzRecording.jpg' },
        { category: 'Bookings', path: '/bookings', image: '/images/products/TaniBookings.jpg' }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="sections_container"
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.3,
                    },
                },
            }}
        >
            {sections.map((section, i) => (
                <motion.div key={i} className="section_card" variants={cardVariants}>
                    <img src={section.image} alt={section.category} className="section_image" loading="lazy" />
                    <h2 className="section_title">{section.category}</h2>
                    <Link to={section.path} aria-label={`View ${section.category}`}>
                        <button className="view_button">View {section.category}</button>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};
export default ServiceSection;