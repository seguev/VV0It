import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import zustandStorage from '../utils/zustandStorage';


interface UserStore {
    isGuest: boolean,
    user: any,
    setIsGuest: (isGuest: boolean) => void;
    setIsUser: (user: any) => any;
}

//create<...>() is calling the function, which returns a function and we call it with another ()
const useUserStore = create<UserStore>()(
    //set isnt being used, and the ({}) force return an object literal. 
    // we could replace it with { cons obj = {}; return obj }
    persist(
        (set) => ({
            isGuest: false,
            user: undefined,
            setIsGuest: (isGuest: boolean) => set({ isGuest }),
            setIsUser: (user: any) => set({ user })
        }),
        {
            name: 'user',
            storage: createJSONStorage(() => zustandStorage)
        }
    )
)

export default useUserStore;