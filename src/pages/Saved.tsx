import { useStore } from '../store/useStore';
import { mockColleges } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Heart, Trash2, MapPin, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { motion, AnimatePresence } from 'motion/react';

export function Saved() {
  const { savedColleges, toggleSaved } = useStore();
  const savedList = mockColleges.filter((c) => savedColleges.includes(c.id));

  return (
    <div className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-black italic tracking-tight uppercase text-slate-900 dark:text-white">Saved Colleges</h1>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mt-2">Manage your favorite colleges and applications.</p>
        </div>

        {savedList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center rounded-3xl bg-white border-2 border-dashed border-slate-300 dark:bg-slate-900 dark:border-slate-800">
            <div className="h-20 w-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6 dark:bg-indigo-900/30">
              <Heart className="h-10 w-10 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-2">No saved colleges yet</h3>
            <p className="text-slate-500 font-medium dark:text-slate-400 max-w-sm mb-8">
              Start exploring colleges and save the ones you like to compare and track them later.
            </p>
            <Link to="/colleges">
              <Button size="lg">Explore Colleges <ArrowRight className="ml-2 h-5 w-5 stroke-[2.5]"/></Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {savedList.map((college) => (
                <motion.div
                  key={college.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  layout
                >
                  <Card className="flex flex-col h-full overflow-hidden">
                    <div className="flex items-center gap-4 p-5 border-b-2 border-slate-100 dark:border-slate-800">
                      <div className="h-14 w-14 rounded-xl border-2 border-slate-200 p-1 dark:border-slate-800 bg-white">
                        <img src={college.logo} alt="logo" className="h-full w-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white truncate" title={college.name}>
                          {college.name}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center truncate mt-1">
                          <MapPin className="h-3 w-3 mr-1 stroke-[2.5]" /> {college.location.city}, {college.location.state}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleSaved(college.id)}
                        className="text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 flex-shrink-0"
                        title="Remove from saved"
                      >
                        <Trash2 className="h-5 w-5 stroke-[2.5]" />
                      </Button>
                    </div>
                    <div className="p-5 grid grid-cols-2 gap-4 text-sm bg-slate-50/50 dark:bg-slate-900/50 flex-1">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Highest Package</div>
                        <div className="text-lg font-black tracking-tight text-slate-900 dark:text-white">{college.placementStats.highestPackage} LPA</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Fee (Approx)</div>
                        <div className="text-lg font-black tracking-tight text-slate-900 dark:text-white">₹{college.courses[0].fees.toLocaleString('en-IN')}</div>
                      </div>
                    </div>
                    <div className="p-5 border-t-2 border-slate-100 dark:border-slate-800">
                      <Link to={`/college/${college.id}`}>
                        <Button variant="outline" className="w-full">View Details</Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
