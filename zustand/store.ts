import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

import { createUserSlice } from "./userSlice";
import { createCSheetsSlice } from "./CharacterSheet/cSheetsSlice";
import { CombinedState } from "./types";

export const useCombinedStore = create<CombinedState>()(
	persist(
		immer((...api) => ({
			user: createUserSlice(...api),
			cSheets: createCSheetsSlice(...api),
		})),
		{
			name: "protfolio-v2-store",
			partialize: (state: any) => ({
				// Include the keys you want to persist in here.
				// user: state.user,
				// cSheets: state.cSheets,
			}),
			merge: (persistedState, currentState) => {
				// persistedState is unknown, so we need to cast it to CombinedState | undefined
				const typedPersistedState = persistedState as CombinedState | undefined;

				// We need to do a deep merge here because the default merge strategy is a
				// shallow merge. Without doing this, our actions would not be included in
				// our merged state, resulting in unexpected behavior.
				return {
					user: {
						...currentState.user,
						...(typedPersistedState?.user || {}),
					},
					cSheets: {
						...currentState.cSheets,
						...(typedPersistedState?.cSheets || {}),
					},
				};
			},
		},
	),
);
