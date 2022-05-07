import React, { useContext } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { UserContext } from '../../GlobalProvider';

const TopNav = () => {

    const [loggedInUser] = useContext(UserContext);


    return (
        <div className="top-nav">
            <ul className="ul">
                <li>
                     <span> +8801766342245</span>
               </li>

               <li>
                   {
                       loggedInUser.phone.length > 10 ?                 
                       <Link href="/profile"><a> 
                        <span><i className="fas fa-user"></i> {loggedInUser.name}+s Profile </span>
                        </a></Link> : 
                             ''
                   }

               </li>
            </ul>
        </div>
    );
};

export default TopNav;