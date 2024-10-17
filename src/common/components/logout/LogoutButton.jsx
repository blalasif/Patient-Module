import { Icon } from '@iconify/react';
import logout from '../../../../public/assets/svg/logout.svg'
import Image from 'next/image';
const LogoutButton = () => {
    return (
        <button className="flex font-semibold  justify-between items-center  h-[55px] w-full bg-light-gray text-black px-4 rounded-xl hover:bg-[#7a7a7a] transition-colors">
            Logout
            <Image className='pt-1' src={logout} width={14} height={15}/>
        </button>
    );
};

export default LogoutButton;
