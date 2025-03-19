import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <FaShippingFast />,
        title: "Uber Send Delivery",
        info: "Ships in 20 Hours",
    },
    {
        id: 2,
        icon: <FaShieldAlt />,
        title: "Brand Warranty",
        info: "100% Original products",
    },
    {
        id: 3,
        icon: <FaTags />,
        title: "Exciting Deals",
        info: "On all prepaid orders",
    },
    {
        id: 4,
        icon: <FaCreditCard />,
        title: "Secure Payments",
        info: "Pay on Delivery, Netbanking",
    },
];

export default servicesData;