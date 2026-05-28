import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockColleges } from '../data/mockData';
import { useStore } from '../store/useStore';
import { useEffect, useState } from 'react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { MapPin, Star, Heart, Scale, GraduationCap, Building2, Trophy, Clock, CheckCircle2, ChevronLeft, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function CollegeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { savedColleges, compareColleges, toggleSaved, toggleCompare, addRecent } = useStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'placements' | 'facilities'>('overview');

  const college = mockColleges.find((c) => c.id === id);

  useEffect(() => {
    if (college) {
      addRecent(college.id);
      window.scrollTo(0, 0);
    }
  }, [college, addRecent]);

  if (!college) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold dark:text-white">College not found</h2>
        <Button onClick={() => navigate('/colleges')}>Back to Colleges</Button>
      </div>
    );
  }

  const isSaved = savedColleges.includes(college.id);
  const isCompared = compareColleges.includes(college.id);

  return (
    <div className="min-h-screen bg-slate-50 pb-24 dark:bg-slate-950">
      {/* Hero Banner */}
      <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-900 overflow-hidden border-b-8 border-indigo-600">
        <div className="absolute inset-0">
          <img src={college.coverImage} alt={college.name} className="h-full w-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="absolute top-4 left-4 z-10">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>

        <div className="absolute bottom-0 w-full">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-3xl border-4 border-slate-800 bg-white shadow-xl">
                <img src={college.logo} alt={`${college.shortName} logo`} className="h-full w-full object-contain p-3" />
              </div>
              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge variant="info">{college.type} Institution</Badge>
                  {college.ranking <= 10 && (
                     <Badge variant="warning">Ranked #0{college.ranking}</Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter uppercase italic">
                  {college.name}
                </h1>
                <div className="flex items-center text-slate-300 text-xs font-bold uppercase tracking-widest">
                  <MapPin className="mr-1.5 h-4 w-4" />
                  {college.location.city}, {college.location.state} <span className="mx-3 opacity-50">|</span> Est. {college.established}
                  <span className="mx-3 opacity-50">|</span> <Star className="h-3 w-3 text-amber-500 fill-current mr-1"/> {college.rating} Rating
                </div>
              </div>
              <div className="flex gap-3 pb-2">
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md"
                  onClick={() => toggleSaved(college.id)}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
                  {isSaved ? 'Saved' : 'Save'}
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md"
                  onClick={() => toggleCompare(college.id)}
                >
                  <Scale className={`mr-2 h-5 w-5 ${isCompared ? 'text-blue-400' : ''}`} />
                  {isCompared ? 'Added to Compare' : 'Compare'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar md:pb-0 mb-8 border-b border-gray-200 dark:border-gray-800">
          {(['overview', 'courses', 'placements', 'facilities'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? 'border-black text-black dark:border-white dark:text-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About {college.shortName}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {college.description}
                  </p>
                </section>

                {college.gallery.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Campus Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {college.gallery.map((img, idx) => (
                        <div key={idx} className="aspect-video rounded-xl overflow-hidden shadow-sm">
                          <img src={img} alt={`Gallery ${idx}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </motion.div>
            )}

            {activeTab === 'courses' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Programs Offered</h3>
                 <div className="grid gap-4">
                   {college.courses.map(course => (
                     <Card key={course.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                       <div className="mb-4 sm:mb-0">
                         <div className="flex items-center gap-2 mb-1">
                           <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{course.name}</h4>
                           <Badge variant="info" className="text-[10px] uppercase tracking-wider">{course.type}</Badge>
                         </div>
                         <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                           <span className="flex items-center"><Clock className="h-4 w-4 mr-1"/> {course.duration}</span>
                         </div>
                       </div>
                       <div className="text-left sm:text-right">
                         <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Fees</div>
                         <div className="text-xl font-bold text-gray-900 dark:text-white">₹{course.fees.toLocaleString('en-IN')}</div>
                       </div>
                     </Card>
                   ))}
                 </div>
              </motion.div>
            )}

            {activeTab === 'placements' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Placement Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <Card className="p-6 text-center bg-blue-50/50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/30">
                    <div className="text-blue-600 dark:text-blue-400 mb-2">Highest Package</div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{college.placementStats.highestPackage} <span className="text-xl text-gray-500">LPA</span></div>
                  </Card>
                  <Card className="p-6 text-center bg-green-50/50 border-green-100 dark:bg-green-900/10 dark:border-green-900/30">
                    <div className="text-green-600 dark:text-green-400 mb-2">Average Package</div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{college.placementStats.averagePackage} <span className="text-xl text-gray-500">LPA</span></div>
                  </Card>
                  <Card className="p-6 text-center bg-purple-50/50 border-purple-100 dark:bg-purple-900/10 dark:border-purple-900/30">
                    <div className="text-purple-600 dark:text-purple-400 mb-2">Placement Rate</div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{college.placementStats.placementRate}%</div>
                  </Card>
                </div>

                <div>
                   <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Recruiters</h4>
                   <div className="flex flex-wrap gap-3">
                     {college.placementStats.topRecruiters.map(recruiter => (
                       <Badge key={recruiter} className="px-4 py-2 text-sm bg-white border border-gray-200 text-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
                         {recruiter}
                       </Badge>
                     ))}
                   </div>
                </div>
              </motion.div>
            )}

             {activeTab === 'facilities' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Campus Facilities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {college.facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center p-4 rounded-xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900 shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="font-medium text-gray-700 dark:text-gray-200">{facility}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
             <Card className="p-6 sticky top-24">
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400">Ownership</span>
                    <span className="font-medium text-gray-900 dark:text-white">{college.type}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400">Established</span>
                    <span className="font-medium text-gray-900 dark:text-white">{college.established}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400">Total Courses</span>
                    <span className="font-medium text-gray-900 dark:text-white">{college.courses.length}</span>
                  </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400">Overall Rating</span>
                    <span className="font-medium text-gray-900 dark:text-white flex items-center"><Star className="h-4 w-4 text-amber-500 fill-current mr-1"/> {college.rating}</span>
                  </div>
               </div>
               
               <div className="mt-8 space-y-3">
                 <Button className="w-full" size="lg">Apply Now</Button>
                 <Button variant="outline" className="w-full" size="lg">Download Brochure</Button>
               </div>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
