import { create } from "zustand";
import { ContestSchema } from "../types/contestTypes";

interface GlobalStore {
    currentTheme: string;
    setCurrentTheme: (theme: string) => void;
    
    section: string;
    setSection: (section: string) => void;
    platforms: string[];
    setPlatforms: (platforms: string[]) => void;
    query: string;
    setQuery: (query: string) => void;
    upcomingContests: ContestSchema[];
    setUpcomingContests: (contests: ContestSchema[]) => void;
    currentMonth: { start: Date; end: Date; };
    setCurrentMonth: (currentMonth: { start: Date; end: Date }) => void;
    contests: ContestSchema[];
    setContests: (contests: ContestSchema[]) => void;
    queryContests: ContestSchema[];
    setQueryContests: (queryContests: ContestSchema[]) => void;
}

const useGlobalStore = create<GlobalStore>()((set) => ({
    currentTheme: "dark",
    setCurrentTheme: (theme: string) => set({ currentTheme: theme }),
    
    section: "all",
    setSection: (section: string) => set({ section }),
    platforms: [],
    setPlatforms: (platforms: string[]) => set({ platforms }),
    query: "",
    setQuery: (query: string) => set({ query }),
    upcomingContests: [],
    setUpcomingContests: (contests: ContestSchema[]) => set({ upcomingContests: contests }),
    currentMonth: { start: new Date(), end: new Date() },
    setCurrentMonth: (currentMonth: { start: Date; end: Date }) => set({ currentMonth }),
    contests: [],
    setContests: (contests: ContestSchema[]) => set({ contests }),
    queryContests: [],
    setQueryContests: (queryContests: ContestSchema[]) => set({ queryContests }),
}));

export default useGlobalStore;

export const useThemeStore = () => {
    const { currentTheme, setCurrentTheme } = useGlobalStore();
    return { currentTheme, setCurrentTheme };
};

export const useContestCalendarStore = () => {
    const { section, setSection, platforms, setPlatforms, query, setQuery, upcomingContests, setUpcomingContests, currentMonth, setCurrentMonth,contests, setContests, queryContests, setQueryContests} = useGlobalStore();
    
    return { section, setSection, platforms, setPlatforms, query,setQuery, upcomingContests, setUpcomingContests, currentMonth,setCurrentMonth, contests, setContests, queryContests, setQueryContests};
};
