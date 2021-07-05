import * as React from 'react';
import * as ReactDOM from 'react-dom';

export function showWeekday() {
    const today = new Date();
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const todayLabel = dayLabels[today.getDay()];
    const el = React.createElement(
        'span',
        { className: 'text-xs' },
        'Today is ',
        React.createElement('b', { className: 'underline' }, todayLabel)
    );
    ReactDOM.render(el, document.querySelector('#today-weekday'));
}