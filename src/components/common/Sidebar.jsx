import React, { useState, useEffect } from 'react';
import { Bookmark, Menu, Calendar, Home, Pin, Camera, Box, Volume2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getSupabaseClient } from "../../../supabase/getSupabaseClient";

const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: Home, color: "#6366f1", href: "/dashboard" },
  { name: "Book lokale", icon: Bookmark, color: "#8B5CF6", href: "/booking" },
  { name: "Mine bookinger", icon: Calendar, color: "#EC4899", href: "/mybooking" },
  { name: "Lokale oversigt", icon: Pin, color: "#10B981", href: "/room-overview" },
  { name: "Medialab", icon: Camera, color: "#F59E0B", href: "/medialab" },
  { name: "Makerlab", icon: Box, color: "#3B82F6", href: "/makerlab" },
  { name: "Auditorium", icon: Volume2, color: "#6EE7B7", href: "/auditorium" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [email, setEmail] = useState(null);
  const supabase = getSupabaseClient();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session && session.user) {
        setEmail(session.user.email); 
      }
    };
    
    getSession();
  }, [supabase]);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full" style={{ backgroundColor: '#2c2e33' }}>
        <div className="p-4 flex flex-col border-r border-gray-700">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
          >
            <Menu size={24} color="#FFFFFF" />
          </motion.button>

          <nav className='mt-8 flex-grow'>
            {SIDEBAR_ITEMS.map((item) => (
              <Link key={item.href} to={item.href} className="text-white">
                <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
                  <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className='ml-4 whitespace-nowrap'
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Profile Section at the Bottom */}
          <div className="flex items-center justify-start mt-auto p-4 border-t border-gray-700">
            <span className="text-white text-sm">{email ? email : 'Log ind'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
