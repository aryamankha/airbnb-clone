import React,{FC , PropsWithChildren} from 'react';

interface AppSearchOptionsProps extends PropsWithChildren<any>{
    className:string
}
const AppSearchOptionWrapper : FC<AppSearchOptionsProps> =({className,children})=>{
    return (
        <div className={`${className} absolute px-8 py-4 mt-3 bg-white rounded-3xl shadow-around-bold`} >
            {children}
        </div>
    );
}
export default AppSearchOptionWrapper;