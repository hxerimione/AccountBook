import { getConsumptionDetails } from '../api/get-comsumption-details';
import { toHidden, toShow } from './util';

const $consumptionDetailsLoader = document.querySelector(
    '.consumption-details-loader'
);
const $consumptionDetails = document.querySelector('.consumption-details');

export const initConsumptionDetails = () => {
    handleGetConsumptionDetails();
};

// 태그 생성하는 과정 util함수
const createElement = (tagName, className) => {
    const newElement = document.createElement(tagName);
    newElement.className = className;
    return newElement;
};
const handleGetConsumptionDetails = async () => {
    toShow($consumptionDetailsLoader);

    const list = await getConsumptionDetails();
    console.log(list);
    list.map(({ createAt, category, description, price, fundsAtTheTime }) => {
        const $li = createElement('li', 'consumption-details-per-day');
        const $pDate = createElement('li', 'consumption-details-date');
        $pDate.textContent = new Date(createAt).toLocaleDateString();
        $li.appendChild($pDate);

        const $itemSection = createElement(
            'section',
            'consumption-details-item'
        );

        const $itemSectionColumn = createElement(
            'section',
            'consumption-details-item-column'
        );
        const $itemCategory = createElement('section');
        $itemCategory.textContent = category;
        $itemSectionColumn.appendChild($itemCategory);

        const $consumptionDetailsDetail = createElement(
            'div',
            'consumption-details-detail'
        );
        const $consumptionDetailsDetailTitle = createElement(
            'div',
            'consumption-details-detail-row consumption-details-detail-title'
        );

        const $consumptionDetailsDetailSubtitle = createElement(
            'div',
            'consumption-details-detail-row consumption-details-detail-subtitle'
        );

        const $consumptionDetailsItemCaption = createElement(
            'section',
            'consumption-details-item-caption'
        );

        const $deleteSection = createElement('div', 'delete-section');
        const $deleteButton = createElement('button', 'delete-button');
        $deleteButton.textContent = '🗑️';
        $deleteSection.appendChild($deleteButton);
        $consumptionDetailsDetailSubtitle.textContent = price + '원';
        $consumptionDetailsDetailTitle.textContent = description;
        $consumptionDetailsDetail.appendChild($consumptionDetailsDetailTitle);
        $consumptionDetailsDetail.appendChild(
            $consumptionDetailsDetailSubtitle
        );

        $consumptionDetailsItemCaption.textContent = `남은 자산 ${fundsAtTheTime.toLocaleString()}원`;

        $itemSectionColumn.appendChild($consumptionDetailsDetail);
        $itemSectionColumn.appendChild($deleteSection);
        $itemSection.appendChild($itemSectionColumn);
        $itemSection.appendChild($consumptionDetailsItemCaption);
        $li.appendChild($itemSection);
        $consumptionDetails.appendChild($li);
    });
    toHidden($consumptionDetailsLoader);
};
