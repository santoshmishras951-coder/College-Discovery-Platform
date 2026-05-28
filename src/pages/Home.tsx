import { motion } from 'motion/react';
import { Search, ArrowRight, GraduationCap, Users, Trophy, Building2, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { mockColleges } from '../data/mockData';
import { CollegeCard } from '../components/college/CollegeCard';
import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/colleges?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const featuredColleges = mockColleges.slice(0, 3);
  const topPlacementColleges = [...mockColleges].sort((a, b) => b.placementStats.highestPackage - a.placementStats.highestPackage).slice(0, 3);

  const stats = [
    { label: 'Colleges', value: '15+', icon: Building2 },
    { label: 'Students Guided', value: '50K+', icon: Users },
    { label: 'Top Placements', value: '100%', icon: Trophy },
    { label: 'Courses', value: '200+', icon: GraduationCap },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-20 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-block px-3 py-1 mb-8 bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded dark:bg-indigo-900/40 dark:text-indigo-400"
            >
              Admission Cycle 2024-25
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-slate-900 dark:text-white mb-6"
            >
              Find your <span className="text-indigo-600 dark:text-indigo-500 italic">Future</span> <br/>Campus Today.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-slate-500 font-bold max-w-2xl mx-auto uppercase tracking-wide dark:text-slate-400"
            >
              Compare 15,000+ top-tier universities based on real placement data, faculty ratios, and campus life ratings.
            </motion.p>

            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSearch}
              className="mt-10 max-w-2xl mx-auto flex gap-2 p-2 bg-white rounded-2xl shadow-xl shadow-indigo-100/50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 dark:shadow-none"
            >
              <div className="flex-1 flex items-center px-4 gap-3">
                <div className="w-5 h-5 border-4 border-slate-300 rounded-full dark:border-slate-700"></div>
                <input
                  type="text"
                  placeholder="Search by college, city, or course..."
                  className="w-full bg-transparent outline-none font-bold text-slate-600 placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" size="lg" className="rounded-xl">
                Find Colleges
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 rounded-2xl bg-white shadow-sm dark:bg-gray-800 flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-4xl font-black italic tracking-tighter text-slate-900 dark:text-white mb-1">{stat.value}</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest dark:text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.2em] mb-2 dark:text-indigo-400">• Curated</div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase italic underline decoration-indigo-500 underline-offset-8 decoration-4 text-slate-900 dark:text-white mb-4">Featured Institutions</h2>
            </div>
            <Link to="/colleges" className="hidden sm:flex items-center text-xs font-bold text-indigo-600 uppercase tracking-widest hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredColleges.map((college, idx) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <CollegeCard college={college} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Link to="/colleges">
               <Button variant="outline" className="w-full">View All Colleges</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Top Placements */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
               <div className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.2em] mb-2 dark:text-indigo-400">• Return on investment</div>
               <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase italic underline decoration-indigo-500 underline-offset-8 decoration-4 text-slate-900 dark:text-white mb-4">Top Placement Records</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topPlacementColleges.map((college, idx) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <CollegeCard college={college} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 border-t-8 border-indigo-600 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full"></div>
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-6">Ready to map <br/>your <span className="text-indigo-400">future?</span></h2>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 max-w-lg mx-auto">
            Join thousands of students who have found their perfect college match.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800 hidden">
              Get Started
            </Button>
            <Link to="/colleges">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800">
                Explore Colleges <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
