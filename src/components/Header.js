import Switcher from "./Switcher";

export default function Header() {
  return (
    <header className="header sticky top-0 bg-white shadow-xl flex items-center justify-center px-8 py-02 bg-gray-200 dark:bg-[#1f1f1f] dark:text-gray-300 z-10">
      <nav className="nav font-semibold text-lg">
          <ul className="flex items-center gap-12 md:gap-[39rem] font-poppins">
              <li>
                <h1 className="font-bold text-2xl">loremipsum.dev</h1>
              </li>
              <li className="p-4 border-b-2 dark:border-b-2 border-gray-500 dark:border-gray-200 border-opacity-0 dark:border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 hover:text-gray-500 dark:hover:text-gray-100 duration-200 cursor-pointer">
                <Switcher />
              </li>
          </ul>
      </nav>
    </header>
  )
}