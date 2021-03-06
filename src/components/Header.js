import { Link } from 'gatsby'
import React from 'react'
export default function Header(){
    return(
<nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="" />
        </div>
        <Link to="/posts">
            <div className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Gatsby Demo
            </div>
        </Link>
       </div> 
  </div>
  </div>
</nav>

    )
}
