import { useState, useMemo, ChangeEvent } from 'react';
import { mockColleges } from '../data/mockData';
import { CollegeCard } from '../components/college/CollegeCard';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Search, SlidersHorizontal, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';

export function Colleges() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filters state
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('rating-desc');

  // Derived unique states from mock data
  const allStates = Array.from(new Set(mockColleges.map((c) => c.location.state))).sort();

  // Filter and Sort Logic
  const filteredColleges = useMemo(() => {
    let result = mockColleges;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.shortName.toLowerCase().includes(q) ||
          c.location.city.toLowerCase().includes(q) ||
          c.location.state.toLowerCase().includes(q)
      );
    }

    if (selectedType) {
      result = result.filter((c) => c.type === selectedType);
    }

    if (selectedState) {
      result = result.filter((c) => c.location.state === selectedState);
    }

    switch (sortBy) {
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'fees-asc':
        result.sort((a, b) => a.courses[0].fees - b.courses[0].fees);
        break;
      case 'fees-desc':
        result.sort((a, b) => b.courses[0].fees - a.courses[0].fees);
        break;
      case 'package-desc':
        result.sort((a, b) => b.placementStats.highestPackage - a.placementStats.highestPackage);
        break;
      case 'ranking-asc':
        result.sort((a, b) => a.ranking - b.ranking);
        break;
    }

    return result;
  }, [searchQuery, selectedType, selectedState, sortBy]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSearchParams(e.target.value ? { q: e.target.value } : {});
  };

  const clearFilters = () => {
    setSelectedType(null);
    setSelectedState(null);
    setSortBy('rating-desc');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Search */}
        <div className="mb-10">
          <div className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.2em] mb-2 dark:text-indigo-400">• Directory</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic text-slate-900 dark:text-white mb-6">
            Discover Colleges
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                icon={<Search className="h-5 w-5" />}
                placeholder="Search by college name, city, or state..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full text-lg py-6 shadow-sm"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border-2 border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-700 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 h-full"
              >
                <option value="rating-desc">Highest Rated</option>
                <option value="ranking-asc">Top Ranked</option>
                <option value="package-desc">Highest Placement</option>
                <option value="fees-asc">Lowest Fees</option>
                <option value="fees-desc">Highest Fees</option>
              </select>
              <Button
                variant="outline"
                className="shrink-0 h-full lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 1024) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}
              >
                <div className="sticky top-24 space-y-8 rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black uppercase tracking-widest text-slate-900 dark:text-white text-sm">Filters</h3>
                    <button onClick={clearFilters} className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 uppercase tracking-widest transition-colors">
                      Clear All
                    </button>
                    <button className="lg:hidden" onClick={() => setShowFilters(false)}>
                       <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Institution Type */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Institution Type</h4>
                    <div className="space-y-3">
                      {['Public', 'Private'].map((type) => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selectedType === type ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300 bg-white group-hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:group-hover:border-indigo-500'}`}>
                             {selectedType === type && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                          </div>
                          <input
                            type="radio"
                            name="type"
                            className="hidden"
                            checked={selectedType === type}
                            onChange={() => setSelectedType(type)}
                          />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* State */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">State</h4>
                    <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                      {allStates.map((state) => (
                        <label key={state} className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selectedState === state ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300 bg-white group-hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:group-hover:border-indigo-500'}`}>
                             {selectedState === state && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                          </div>
                          <input
                            type="radio"
                            name="state"
                            className="hidden"
                            checked={selectedState === state}
                            onChange={() => setSelectedState(state)}
                          />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">{state}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredColleges.length}</span> colleges
            </div>
            
            {filteredColleges.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredColleges.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 py-24 text-center dark:border-gray-800">
                <Search className="mb-4 h-12 w-12 text-gray-400" />
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">No colleges found</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-6">
                  We couldn't find any colleges matching your current filters and search query.
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
