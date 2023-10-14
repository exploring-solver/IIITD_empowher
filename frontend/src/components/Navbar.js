import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import logo from '../assets/logo.png'
const Navbar = ({ loggedIn, onLogout }) => {
  return (
    <nav className="bg-indigo-500 p-4">
      <div className="flex justify-between items-center">
      <Link to={'/'} className=''><img src={logo} className='w-20 hover:cursor-pointer' alt="" />
        <h1 className="hover:cursor-pointer text-white text-2xl font-semibold">Sheeksha - E Learning Portal</h1></Link>
          <Link to={'/community'}><button className=' hover:text-zinc-600 border p-2 mx-2 rounded-sm hover:bg-zinc-500 text-white'>Community Support</button></Link>
          <Link to={'/content'}><button className=' hover:text-zinc-600 border p-2 mx-2 rounded-sm hover:bg-zinc-500 text-white'>Content Library</button></Link>
          <Link to={'/'}><button className=' hover:text-zinc-600 border p-2 mx-2 rounded-sm hover:bg-zinc-500 text-white'>Sakhee AI Bot</button></Link>
          <Link to={''}><button className=' hover:text-zinc-600 border p-2 mx-2 rounded-sm hover:bg-zinc-500 text-white'>AR/VR Learning</button></Link>
          {loggedIn ? (
            // If logged in, show the logout button
            <button
              className="bg-red-500 hover-bg-red-700 text-white py-2 px-4 rounded"
              onClick={onLogout}
            >
              Logout
            </button>
          ) : (
            // If not logged in, show login and signup buttons wrapped with Link
            <>
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
