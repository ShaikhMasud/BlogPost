import Link from "next/link";

const Navbar = () => {
   
    return (
       <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <header className="fixed w-full top-0 left-0 z-20 text-white">
    <div className="container mx-auto py-4 px-6 flex items-center justify-between">
      <Link className="flex items-center text-gray-600 text-xl" href="/">
        <h3>Shaikh Masud</h3>
      </Link>

      <nav>
        <ul className="flex space-x-6">
          <li className="text-gray-600">
            <Link className="hover:text-primary-dark" href="/">
              Blog Post
            </Link>
          </li>
          <li className="text-gray-600">
            <Link className="hover:text-primary-dark" href="/about">
              About 
            </Link>
          </li>
          
          <li className="text-gray-600">
            <Link className="hover:text-primary-dark" href="/contact">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  </div>
    );
};
export default Navbar;
