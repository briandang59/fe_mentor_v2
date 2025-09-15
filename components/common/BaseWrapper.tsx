import { ReactNode } from 'react';

interface BaseWrapperProps {
    children: ReactNode;
}
function BaseWrapper({ children }: BaseWrapperProps) {
    return <div className="max-w-[144rem] mx-auto p-[1rem]">{children}</div>;
}

export default BaseWrapper;
