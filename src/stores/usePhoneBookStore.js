import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
    phoneBook: [], 
    addContact: (name, phone) => set((state) => ({ phoneBook:[...state.phoneBook, {id: Date.now(), name:name, phone:phone}]}))
}));


export default usePhoneBookStore; 