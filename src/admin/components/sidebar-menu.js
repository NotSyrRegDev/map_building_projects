import ProjectIcon from '../assets/icons/project-management.png';
import CategoriesIcon from '../assets/icons/cubes.png';
import PlacesIcon from '../assets/icons/pin.png';
import CompliemntsIcon from '../assets/icons/complain.png';
import UsersIcon from '../assets/icons/users.png';
import ServicesIcon from '../assets/icons/cooperation.png';


const sidebar_menu = [
    {
        id: 1,
        icon: ProjectIcon,
        path: '/dashboard',
        title: 'Project Details',
    },
    {
        id: 2,
        icon: CategoriesIcon,
        path: '/dashboard/categories',
        title: 'Categories',
    },
    {
        id: 3,
        icon: PlacesIcon,
        path: '/dashboard/places',
        title: 'Places',
    },
    {
        id: 4,
        icon: CompliemntsIcon,
        path: '/dashboard/orders',
        title: 'Orders',
    },
    {
        id: 5,
        icon: ServicesIcon,
        path: '/dashboard/services',
        title: 'Services',
    },
    {
        id: 6,
        icon: UsersIcon,
        path: '/dashboard/users',
        title: 'Users',
    },
    
   
]

export default sidebar_menu;