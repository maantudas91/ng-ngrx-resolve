import { ActionReducerMap } from '@ngrx/store';

import * as fromProfile from './profile/profile.reducer';

// Our top level state interface is just a map of keys to inner state types.
export interface IAppState {
  profile: fromProfile.IProfileState;
}

const reducers = {
  profile: fromProfile.reducer,
};

export const storeReducers: ActionReducerMap<IAppState> = reducers;
