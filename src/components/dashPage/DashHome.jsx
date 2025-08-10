import React, { useContext, useEffect, useState } from 'react';
import StatsCard from '../statsCard/StatsCard';
import { FaUsers, FaUserCheck } from "react-icons/fa";
import axios from 'axios';

// Recharts imports
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
    PieChart, Pie, Cell
} from 'recharts';
import { AuthContext } from '../../provider/AuthProvider';

const COLORS = ["#00b8db", "#10b981", "#6366f1", "#f97316"];

const DashHome = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({
        total: 0, mine: 0
    });

    useEffect(() => {
        const loadCounts = async () => {
            try {
                const [allRes, mineRes] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL}/articles/count`),
                    axios.get(`${import.meta.env.VITE_API_URL}/myarticles/count`, {
                        params: { email: user.email }
                    }),
                ]);

                setStats({
                    total: allRes.data.count,
                    mine: mineRes.data.count,
                });
            } catch (error) {
                console.error("Failed to load dashboard stats:", error);
            }
        };

        if (user?.email) {
            loadCounts();
        }
    }, [user?.email]);

    // Chart Data
    const barData = [
        { name: 'Total Groups', value: stats.total },
        { name: 'My Groups', value: stats.mine },
    ];

    const pieData = [
        { name: 'Total Groups', value: stats.total },
        { name: 'My Groups', value: stats.mine },
    ];

    return (
        <section className="space-y-8">
            {/* user greeting */}
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <img src={user.photoURL} alt="" className="w-16 h-16 rounded-full" />
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Welcome, {user.displayName || "User"}!
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
            </div>

            {/* stats cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatsCard
                    title="Total Groups"
                    count={stats.total}
                    icon={<FaUsers className="text-3xl text-cyan-600" />}
                />
                <StatsCard
                    title="My Groups"
                    count={stats.mine}
                    icon={<FaUserCheck className="text-3xl text-emerald-500" />}
                />
            </div>

            {/* charts */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-4">Groups Overview</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#00b8db" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-4">Groups Distribution</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                dataKey="value"
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default DashHome;
