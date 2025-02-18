// import React from "react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { LogOut, User2 } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const user = false;
//   return (
//     <div className="bg-white">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//         <div>
//           <h1 className="text-2xl font-bold">
//             Job
//             <span className="text-[#f83002]">Portal</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-12">
//           <ul className="flex font-medium items-center gap-5">
//             <li>Home</li>
//             <li>Jobs</li>
//             <li> Browser</li>
//           </ul>
//           {!user ? (
//             <div className="flex items-center gap2">
//               <Link to='/login'>
              
//                 <Button variant="outline">Login</Button>
//               </Link>
//               <Link to='/signup'>
              
//                 <Button className="bg-[#6A38C2]  hover:bg-[#49297d]">
//                   Signup
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                 </Avatar>
//               </PopoverTrigger>

//               <PopoverContent className="w-80">
//                 <div>
//                   <div className="flex gap-2 space-y-2">
//                     <Avatar className="cursor-pointer">
//                       <AvatarImage
//                         src="https://github.com/shadcn.png"
//                         alt="@shadcn"
//                       />
//                     </Avatar>
//                     <div>
//                       <h4 className="font-medium"> Diya MERN STACK</h4>

//                       <p className="text-sm text-muted-foreground">
//                         Lorem ipsum dolor sit amet.{" "}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col  text-gray-600 ">
//                   <div className="flex w-fit items-center gap-2 cursor-pointer">
//                     <User2 />
//                     <Button variant="link">View Profile</Button>
//                   </div>

//                   <div className="flex w-fit items-center gap-2 cursor-pointer">
//                     <LogOut />
//                     <Button variant="link">Log Out</Button>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React from "react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { LogOut, User2 } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const user = false;
//   return (
//     <div className="bg-white">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//         <div>
//           <h1 className="text-2xl font-bold">
//             Job
//             <span className="text-[#f83002]">Portal</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-12">
//           <ul className="flex font-medium items-center gap-5">
//             <li>Home</li>
//             <li>Jobs</li>
//             <li>Browser</li>
//           </ul>
//           {!user ? (
//             <div className="flex items-center gap-2">
//               <Link to="/login">
//                 <Button variant="outline">Login</Button>
//               </Link>
//               <Link to="/signup">
//                 <Button className="bg-[#6A38C2] hover:bg-[#49297d]">Signup</Button>
//               </Link>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <AvatarImage
//                     src="https://via.placeholder.com/150"
//                     alt="User Avatar"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="w-80">
//                 <div>
//                   <div className="flex gap-2 space-y-2">
//                     <Avatar className="cursor-pointer">
//                       <AvatarImage
//                         src="https://via.placeholder.com/150"
//                         alt="User Avatar"
//                       />
//                     </Avatar>
//                     <div>
//                       <h4 className="font-medium">Your Name</h4>
//                       <p className="text-sm text-muted-foreground">
//                         A brief user description goes here.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col text-gray-600">
//                   <div className="flex w-fit items-center gap-2 cursor-pointer">
//                     <User2 />
//                     <Button variant="link">View Profile</Button>
//                   </div>
//                   <div className="flex w-fit items-center gap-2 cursor-pointer">
//                     <LogOut />
//                     <Button variant="link">Log Out</Button>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  // Change this to true to simulate a logged-in user.
  const user = false;

  // State to control the visibility of the popover.
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close the popover if a click is detected outside of it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target)
      ) {
        setIsPopoverOpen(false);
      }
    };

    if (isPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  return (
    <nav className="bg-white shadow">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Job
            <span className="text-[#f83002]">Portal</span>
          </h1>
        </div>

        {/* Navigation Links & Actions */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browser">Browser</Link>
            </li>
          </ul>

          {/* Authentication Buttons or User Popover */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-[#6A38C2] text-white px-4 py-2 rounded hover:bg-[#49297d]">
                  Signup
                </button>
              </Link>
            </div>
          ) : (
            <div className="relative" ref={popoverRef}>
              <button
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                className="flex items-center focus:outline-none"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="User Avatar"
                />
              </button>

              {isPopoverOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded border border-gray-200 z-10">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="User Avatar"
                      />
                      <div>
                        <h4 className="font-medium">Your Name</h4>
                        <p className="text-sm text-gray-500">
                          A brief user description.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <button
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 text-left"
                      onClick={() => {
                        // Handle view profile action
                      }}
                    >
                      <User2 size={16} />
                      View Profile
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 text-left"
                      onClick={() => {
                        // Handle log out action
                      }}
                    >
                      <LogOut size={16} />
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
