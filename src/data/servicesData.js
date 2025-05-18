import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <FaShippingFast />,
        title: "Delivery",
        info: "Ships in 6-7 Business Days",
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
        info: "Netbanking",
    },
];

export default servicesData;