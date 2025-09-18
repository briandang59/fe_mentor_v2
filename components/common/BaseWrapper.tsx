import clsx from 'clsx';
import { ReactNode } from 'react';

interface BaseWrapperProps {
    children: ReactNode;
    className?: string;
}
function BaseWrapper({ children, className }: BaseWrapperProps) {
    return (
        <div className={clsx('max-w-[144rem] mx-auto p-[1rem] lg:p-0', className)}>{children}</div>
    );
}

export default BaseWrapper;
