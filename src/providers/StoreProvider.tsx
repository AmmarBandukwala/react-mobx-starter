import React, { createContext, ReactNode, useContext } from "react";

import RootStore from "../stores/RootStore";

const rootStore = new RootStore();

export const StoreContext = createContext<RootStore>(rootStore);

export const StoreProvider: React.FC<ReactNode> = ({ children }) => {
    return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
}

export const useRootStore = () => {
    return useContext(StoreContext);
}
