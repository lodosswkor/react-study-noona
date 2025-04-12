import { create } from "zustand"; 

const counterStore = create((set) => ({
    count : 0,
    reset: () => set({count:0}),
    increase: () => set((state) => ({count: state.count+1})),
    increaseBy: (num) => set((state) => ({
        count: state.count + num,
    })),
}));

export default counterStore; 

