
const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pt-16 text-black transition-all duration-200 md:rounded-r-xl shadow-md`}>
      ResponsiveMenu
    </div>
  )
}

export default ResponsiveMenu