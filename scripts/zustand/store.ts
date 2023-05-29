import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

import { createUserSlice } from "./userSlice";
import { createCSheetsSlice } from "./cSheetsSlice";
import { CombinedState } from "./types";

export const useStore = create<CombinedState>()(
	persist(
		immer((...api) => ({
			user: createUserSlice(...api),
			cSheets: createCSheetsSlice(...api),
		})),
		{
			name: "my-store-name",
			partialize: (state: any) => ({
				// Include the keys you want to persist in here.
				bar: {
					baz: state.bar.baz,
				},
			}),
			merge: (persistedState, currentState) => {
				// persistedState is unknown, so we need to cast it to CombinedState | undefined
				const typedPersistedState = persistedState as CombinedState | undefined;

				return {
					user: {
						// We need to do a deep merge here because the default merge strategy is a
						// shallow merge. Without doing this, our actions would not be included in
						// our merged state, resulting in unexpected behavior.
						...currentState.user,
						...(typedPersistedState?.user || {}),
					},
					cSheets: currentState.cSheets,
				};
			},
		},
	),
);
