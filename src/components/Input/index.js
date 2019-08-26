import React from 'react';

export const Input = ({onChange, name, type}) => {
    return (
        <input
            type={type}
            name={name}
            onChange={onChange}
        />
    );
};