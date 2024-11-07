import { FaUserCircle } from "react-icons/fa";
import { navigationLink } from "./NavigationBar";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pt-16 text-black transition-all duration-200 md:rounded-r-xl shadow-md`}>
      <div className="">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50}/>
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
            <ul className="space-y-4 text-xl">
              {
                navigationLink.map((data) => {
                  return <li key={data.id}>
                    <Link to={data.link} className="mb-5 inline-block"> {data.name}</Link>
                  </li>
                })
              }
            </ul>
          </nav>
      </div>
      <div>
        <h1> Made with ❤️ by <a href="#">Zafer Günay Önalan</a></h1>
      </div>
    </div>
  )
}

export default ResponsiveMenu