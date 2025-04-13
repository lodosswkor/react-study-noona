import { create } from "zustand";


//-- f
const usePhoneBookStore = create((set) => ({
    phoneBook: [], 
    searchedPhoneBook: [],
    addContact: (name, phone) => set((state) => ({ phoneBook:[...state.phoneBook, {id: Date.now(), name:name, phone:phone}]})),
    removeContact: (id) => set((state) => ({ phoneBook:[...state.phoneBook].filter((item) => item.id !== id) })), 
    // searchContact: (searchText) => {
    //   const state = get(); 
    //   console.log(state.phoneBook.filter((item) => item.name.indexOf(searchText) >= 0))
    //   return state.phoneBook.filter((item) => item.name.indexOf(searchText) >= 0);
    // }
}));


export default usePhoneBookStore; 