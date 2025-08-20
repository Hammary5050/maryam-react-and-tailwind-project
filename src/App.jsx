// ...existing code...
import React, { useState } from "react";
import "./index.css";
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { label: "Sales", value: "$12,340", icon: ChartBarIcon },
  { label: "Users", value: "1,234", icon: UsersIcon },
  { label: "Performance", value: "98%", icon: ChartBarIcon },
];

const tableData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", joined: "2023-01-10" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive", joined: "2023-02-15" },
  { id: 3, name: "Sam Lee", email: "sam@example.com", role: "Editor", status: "Active", joined: "2023-03-20" },
  { id: 4, name: "Alex Kim", email: "alex@example.com", role: "User", status: "Active", joined: "2023-04-05" },
  { id: 5, name: "Chris Ray", email: "chris@example.com", role: "Admin", status: "Active", joined: "2023-05-12" },
];

const navLinks = [
  { label: "Home", icon: HomeIcon },
  { label: "Statistics", icon: ChartBarIcon },
  { label: "Users", icon: UsersIcon },
  { label: "Settings", icon: Cog6ToothIcon },
];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-cyan-900 text-white flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-indigo-700 p-2 rounded text-white shadow"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Bars3Icon className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 md:w-64 lg:w-64 bg-gradient-to-br from-indigo-800 to-cyan-700 text-white flex flex-col p-6 rounded-r-xl shadow-xl z-30 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close button for mobile */}
        <div className="md:hidden self-end mb-4">
          <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <UserCircleIcon className="w-8 h-8 text-cyan-300" />
          <h2 className="text-2xl font-bold tracking-wide">TechDash</h2>
        </div>

        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href="#"
                className="flex items-center gap-3 hover:bg-indigo-900 px-3 py-2 rounded transition text-sm"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5 text-cyan-100" />
                <span className="ml-2">{link.label}</span>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 ml-0 md:ml-64 relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col items-end text-right sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-1 sm:gap-4">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight">Maryam</h1>
          <div className="text-xs sm:text-sm text-gray-300">Welcome back — here's the latest</div>
        </header>

        {/* Statistics Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex items-center gap-4 transform transition hover:scale-105"
              >
                <div className="bg-white/5 p-2 sm:p-3 rounded-md">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300">{stat.value}</div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Data Table */}
        <section className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-semibold">User Data</h3>
            <div className="text-sm text-gray-300">{tableData.length} entries</div>
          </div>

          <div className="overflow-x-auto">
            {/* Desktop / tablet table (show from sm and up) */}
            <div className="hidden sm:block">
              <table className="min-w-full table-auto text-sm">
                <thead>
                  <tr className="bg-indigo-700 text-white">
                    <th className="px-3 sm:px-4 py-2 text-left">ID</th>
                    <th className="px-3 sm:px-4 py-2 text-left">Name</th>
                    <th className="px-3 sm:px-4 py-2 text-left">Email</th>
                    <th className="px-3 sm:px-4 py-2 text-left">Role</th>
                    <th className="px-3 sm:px-4 py-2 text-left">Status</th>
                    <th className="px-3 sm:px-4 py-2 text-left">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((user) => (
                    <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700">
                      <td className="px-3 sm:px-4 py-2 text-gray-300">{user.id}</td>
                      <td className="px-3 sm:px-4 py-2 text-gray-300">{user.name}</td>
                      <td className="px-3 sm:px-4 py-2 text-gray-300">{user.email}</td>
                      <td className="px-3 sm:px-4 py-2 text-gray-300">{user.role}</td>
                      <td className="px-3 sm:px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            user.status === "Active" ? "bg-cyan-600 text-white" : "bg-gray-500 text-gray-200"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-2 text-gray-300">{user.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="block sm:hidden space-y-3">
              {tableData.map((user) => (
                <article
                  key={user.id}
                  className="bg-gray-900 p-3 rounded-lg border border-gray-800"
                  aria-label={`User ${user.name}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-cyan-300">#{user.id} — {user.name}</div>
                      <div className="text-xs text-gray-400">{user.role}</div>
                    </div>
                    <div className="text-xs text-gray-400">{user.joined}</div>
                  </div>

                  <div className="mt-2 text-sm text-gray-300 break-words">{user.email}</div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-gray-400">Role: <span className="text-gray-300 ml-1">{user.role}</span></div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        user.status === "Active" ? "bg-cyan-600 text-white" : "bg-gray-500 text-gray-200"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}