import React from 'react';
import './Loader.css';

export type LoaderProps = {
    /** Размер */
    size?: 's' | 'm' | 'l';
    /** Дополнительный класс */
    className?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = 'l', className = '' }) => {
    return (
        <div  className={` container-${size} ${className}`}>
            <div className={`loader loader-${size} ${className}`}>
      </div>
        </div>
    );
};

export default Loader;
