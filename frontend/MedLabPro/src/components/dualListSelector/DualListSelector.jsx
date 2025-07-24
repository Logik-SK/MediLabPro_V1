import React from 'react';
import SearchableListBox from './SearchableListBox';
import ArrowControls from './ArrowControls';
import useDualListSelector from '../../hooks/useDualListSelector';
import SectionCard from '../layout/SectionCard';

const DualListSelector = ({
    title = "Dual List", name = "DualListSelector", subtitle = "Selector", items = [],
    itemKey = "name", itemValue = "price", onChange, renderItem,
    leftTitle = "Available", rightTitle = "Selected", leftName = "available", rightName = "selected", formData
}) => {

    const {
        availableItems, selectedItems, selectedAvailable, selectedSelected,
        searchLeft, setSearchLeft, searchRight, setSearchRight,
        setSelectedAvailable, setSelectedSelected,
        handleTransferRight, handleTransferLeft, toggleHighlight, total,
    } = useDualListSelector(items, itemValue, formData, rightName);
    const totalKey = `total${itemValue.charAt(0).toUpperCase()}${itemValue.slice(1)}`;

    return (
        <div className="border rounded shadow bg-white w-full">
            <SectionCard title={title} subtitle={subtitle} extraContent={`Total: ₹${total?.[totalKey] ?? 0}`}>
                <div className="p-4 grid grid-cols-[1fr_auto_1fr] gap-x-2">
                    <SearchableListBox
                        title={leftTitle} items={availableItems}
                        selectedItems={selectedAvailable} setSelectedItems={setSelectedAvailable}
                        search={searchLeft} setSearch={setSearchLeft} itemKey={itemKey}
                        renderItem={renderItem} toggleHighlight={toggleHighlight}
                        highlightClass="bg-blue-100" hoverClass="hover:bg-blue-50"
                    />
                    <ArrowControls
                        handleTransferRight={handleTransferRight} handleTransferLeft={handleTransferLeft}
                        disableRight={selectedAvailable.length === 0} disableLeft={selectedSelected.length === 0}
                    />
                    <SearchableListBox
                        title={rightTitle} items={selectedItems}
                        selectedItems={selectedSelected} setSelectedItems={setSelectedSelected}
                        search={searchRight} setSearch={setSearchRight} itemKey={itemKey}
                        renderItem={renderItem} toggleHighlight={toggleHighlight}
                        highlightClass="bg-gray-200" hoverClass="hover:bg-gray-100"
                        name={rightName} onChange={onChange}
                    />
                </div>
            </SectionCard>
        </div>
    );
};

export default DualListSelector;
