import { useStore } from '../store/useStore';
import { mockColleges } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, X, Check, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Compare() {
  const { compareColleges, toggleCompare } = useStore();
  const compareList = mockColleges.filter((c) => compareColleges.includes(c.id));

  return (
    <div className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-black italic tracking-tight uppercase text-slate-900 dark:text-white mb-2">Compare Colleges</h1>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
            Compare side-by-side up to 3 colleges to make the best choice.
            <span className="ml-3 font-bold text-slate-900 dark:text-white">({compareList.length}/3 selected)</span>
          </p>
        </div>

        {compareList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center rounded-3xl bg-white border-2 border-dashed border-slate-300 dark:bg-slate-900 dark:border-slate-800">
            <div className="h-20 w-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6 dark:bg-indigo-900/30">
              <Scale className="h-10 w-10 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-2">No colleges selected</h3>
            <p className="text-slate-500 font-medium dark:text-slate-400 max-w-sm mb-8">
              Add colleges to compare to see their fees, placements, and facilities side-by-side.
            </p>
            <Link to="/colleges">
              <Button size="lg">Explore Colleges <ArrowRight className="ml-2 h-5 w-5 stroke-[2.5]" /></Button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border-2 border-slate-200 overflow-hidden dark:bg-slate-900 dark:border-slate-800">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="w-1/4 p-6 bg-slate-50 border-b-2 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 align-bottom">
                      <h3 className="text-xl font-black uppercase italic tracking-tight text-slate-900 dark:text-white mb-4">Features</h3>
                      {compareList.length < 3 && (
                        <Link to="/colleges">
                          <Button variant="outline" size="sm" className="w-full">
                            + Add College
                          </Button>
                        </Link>
                      )}
                    </th>
                    <AnimatePresence>
                      {compareList.map((college) => (
                        <motion.th 
                          key={college.id} 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="w-1/4 p-6 border-b-2 border-slate-200 dark:border-slate-800 relative bg-white dark:bg-slate-900 align-top"
                        >
                          <button
                            onClick={() => toggleCompare(college.id)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                            title="Remove completely"
                          >
                            <X className="h-5 w-5 stroke-[2.5]" />
                          </button>
                          <div className="h-16 w-16 mb-5 rounded-xl border-2 border-slate-200 p-2 bg-white dark:border-slate-800">
                            <img src={college.logo} alt="logo" className="h-full w-full object-contain" />
                          </div>
                          <h4 className="text-xl font-black uppercase italic tracking-tight text-slate-900 dark:text-white mb-1 line-clamp-2">{college.shortName}</h4>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">{college.location.city}, {college.location.state}</p>
                          <Link to={`/college/${college.id}`}>
                            <Button variant="outline" className="w-full">View</Button>
                          </Link>
                        </motion.th>
                      ))}
                    </AnimatePresence>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-slate-200 dark:divide-slate-800">
                  {/* Basic Info */}
                  <tr>
                    <td className="p-6 font-bold uppercase tracking-widest text-xs bg-slate-50 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400">Institution Type</td>
                    {compareList.map((college) => (
                      <td key={college.id} className="p-6 font-bold text-slate-900 uppercase dark:text-white bg-white dark:bg-slate-900">{college.type}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold uppercase tracking-widest text-xs bg-slate-50 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400">Rating</td>
                    {compareList.map((college) => (
                      <td key={college.id} className="p-6 font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900"><span className="font-black text-indigo-600 dark:text-indigo-400 tracking-tight text-lg">{college.rating}</span>/5.0</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold uppercase tracking-widest text-xs bg-slate-50 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400">Established</td>
                    {compareList.map((college) => (
                      <td key={college.id} className="p-6 font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900">{college.established}</td>
                    ))}
                  </tr>

                  {/* Placements */}
                  <tr>
                    <td className="p-6 font-bold uppercase tracking-widest text-xs bg-slate-50 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400">Highest Package</td>
                    {compareList.map((college) => (
                      <td key={college.id} className="p-6 font-black italic tracking-tight text-lg text-slate-900 dark:text-white bg-white dark:bg-slate-900">{college.placementStats.highestPackage} LPA</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold uppercase tracking-widest text-xs bg-slate-50 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400">Average Package</td>
                    {compareList.map((college) => (
                      <td key={college.id} className="p-6 font-black italic tracking-tight text-lg text-slate-900 dark:text-white bg-white dark:bg-slate-900">{college.placementStats.averagePackage} LPA</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold uppercase tracking-widest text-xs bg-slate-50 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400">Top Recruiters</td>
                    {compareList.map((college) => (
                      <td key={college.id} className="p-6 font-bold text-slate-700 dark:text-slate-300 text-sm bg-white dark:bg-slate-900">
                        {college.placementStats.topRecruiters.slice(0, 3).join(', ')}...
                      </td>
                    ))}
                  </tr>

                  {/* Fees */}
                  <tr>
                    <td className="p-6 font-bold uppercase tracking-widest text-xs bg-slate-50 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400">Base Course Fees</td>
                    {compareList.map((college) => (
                      <td key={college.id} className="p-6 font-black italic tracking-tight text-lg text-slate-900 dark:text-white bg-white dark:bg-slate-900">₹{college.courses[0].fees.toLocaleString('en-IN')} <span className="text-sm font-bold not-italic tracking-normal text-slate-500 uppercase">/{college.courses[0].duration}</span></td>
                    ))}
                  </tr>

                  {/* Facilities */}
                  {['Hostel', 'Library', 'Sports Complex', 'Gym'].map((facility) => (
                    <tr key={facility}>
                      <td className="p-6 font-bold uppercase tracking-widest text-xs bg-slate-50 border-r-2 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400">{facility}</td>
                      {compareList.map((college) => {
                        const hasFac = college.facilities.includes(facility);
                        return (
                          <td key={college.id} className="p-6 bg-white dark:bg-slate-900">
                            {hasFac ? (
                              <Check className="h-6 w-6 text-indigo-600 stroke-[3]" />
                            ) : (
                              <Minus className="h-6 w-6 text-slate-300 dark:text-slate-700 stroke-[3]" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
