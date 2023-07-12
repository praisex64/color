import React, { PropsWithChildren, createContext, useReducer, Dispatch } from 'react'; 
import { initialState, colorReducer, UpdateHexColorAction, UpdateRGBColorAction } from './color-reducer';


type ColorcontextState = { 
  hexColor: string;
  dispatch: Dispatch<UpdateHexColorAction|UpdateRGBColorAction> 
}



export const ColorContext = createContext<ColorcontextState>({hexColor: '#5cd3f' } as ColorcontextState) ;

export const ColorProvider = ({children}: PropsWithChildren) => {
  const [{hexColor}, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ColorContext.Provider value={{hexColor, dispatch}}>
       {children}
    </ColorContext.Provider>
  );

}





