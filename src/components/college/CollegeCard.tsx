import { College } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MapPin, Star, Heart, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { motion } from 'motion/react';
import { Key } from 'react';

interface CollegeCardProps {
  key?: Key;
  college: College;
}

export function CollegeCard({ college }: CollegeCardProps) {
  const { savedColleges, compareColleges, toggleSaved, toggleCompare } = useStore();
  const isSaved = savedColleges.includes(college.id);
  const isCompared = compareColleges.includes(college.id);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden transition-all hover:border-indigo-200 dark:hover:border-indigo-800">
        <div className="relative h-44 w-full overflow-hidden bg-slate-200 dark:bg-slate-800 rounded-t-[20px] m-1 w-[calc(100%-8px)]">
          <img
            src={college.coverImage}
            alt={college.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-slate-400/20 mix-blend-multiply dark:mix-blend-overlay"></div>
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
            <Badge variant="default" className="shadow-sm">
              {college.type}
            </Badge>
            {college.ranking <= 10 && (
              <Badge variant="info" className="text-indigo-600 bg-white/90 shadow-sm border border-indigo-100 dark:border-indigo-900">
                Rank #{college.ranking < 10 ? `0${college.ranking}` : college.ranking}
              </Badge>
            )}
          </div>
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleSaved(college.id);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500 dark:bg-black/90 dark:text-gray-300 dark:hover:text-red-500"
            >
              <Heart className={`h-4 w-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleCompare(college.id);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-blue-500 dark:bg-black/90 dark:text-gray-300 dark:hover:text-blue-500"
            >
              <Scale className={`h-4 w-4 ${isCompared ? 'text-blue-500' : ''}`} />
            </button>
          </div>
          
          <div className="absolute -bottom-5 right-4 rounded-xl bg-white p-1 border-2 border-slate-100 dark:border-slate-800 dark:bg-slate-900 z-10">
            <img src={college.logo} alt="logo" className="h-8 w-8 object-contain rounded-lg" />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 pt-6">
          <h3 className="font-black text-lg leading-tight mb-2 uppercase tracking-tighter group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 line-clamp-2 transition-colors">
            {college.name}
          </h3>
          
          <div className="mb-6 flex items-center">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest truncate dark:text-slate-400">
              {college.location.city}, {college.location.state}
            </span>
          </div>

          <div className="mb-6 flex gap-4 mt-auto">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Median Package</div>
              <div className="font-black text-slate-900 text-sm italic dark:text-white">{college.placementStats.highestPackage} LPA</div>
            </div>
            <div className="w-[2px] bg-slate-100 dark:bg-slate-800 rounded-full my-1"></div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Rating</div>
              <div className="font-black text-slate-900 text-sm italic dark:text-white">{college.rating} / 5</div>
            </div>
          </div>

          <div className="mt-auto pt-4">
            <Link to={`/college/${college.id}`}>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
