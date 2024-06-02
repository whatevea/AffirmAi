//index store contains major things
import { toast } from 'sonner';
import { create } from 'zustand';
const initialState = {
    isMakingSpeech: false,
};
const useIndexStore = create((set) => ({
    ...initialState,
    setIsMakingSpeech: (value) => {
        if (!value) toast.dismiss()
        set({ isLoading: value })
    },
}));

export default useIndexStore;