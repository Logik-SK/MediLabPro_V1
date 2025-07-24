import { useState, useEffect, useMemo, useCallback } from 'react';

export default function useDualListSelector(items, itemValue = 'price', formData, name) {
    const [availableItems, setAvailableItems] = useState(items);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedAvailable, setSelectedAvailable] = useState([]);
    const [selectedSelected, setSelectedSelected] = useState([]);
    const [searchLeft, setSearchLeft] = useState('');
    const [searchRight, setSearchRight] = useState('');

    const total = useMemo(() => formData?.[`${name}Total`] || 100, [formData, name, itemValue]);

    const handleTransferRight = useCallback(() => {
        setAvailableItems(prev => prev.filter(i => !selectedAvailable.includes(i)));
        setSelectedItems(prev => [...prev, ...selectedAvailable]);
        setSelectedAvailable([]);
    }, [selectedAvailable]);

    const handleTransferLeft = useCallback(() => {
        setSelectedItems(prev => prev.filter(i => !selectedSelected.includes(i)));
        setAvailableItems(prev => [...prev, ...selectedSelected]);
        setSelectedSelected([]);
    }, [selectedSelected]);

    const toggleHighlight = useCallback((item, list, setList) => {
        const updatedList = list.includes(item)
            ? list.filter(i => i !== item)
            : [...list, item];
        setList(updatedList);
        return updatedList;
    }, []);

    return {
        availableItems, selectedItems, selectedAvailable, selectedSelected,
        searchLeft, setSearchLeft, searchRight, setSearchRight,
        setSelectedAvailable, setSelectedSelected,
        handleTransferRight, handleTransferLeft,
        toggleHighlight, total
    };
}
