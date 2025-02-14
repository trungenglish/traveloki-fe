import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware";

interface AppState {
    dopen: boolean
    updateOpen: (dopen: boolean) => void
}

export const useAppStore = create<AppState>()(
    devtools(
        persist(
            (set) => ({
                dopen: true,
                updateOpen: (dopen: boolean) => set(() => ({dopen: dopen})),
            }),
            {name: "my_app_store"}
        )
    )
);
