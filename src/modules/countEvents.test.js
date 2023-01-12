/*
 * @jest-environment jsdom
 */

import countEvents from './countEvents.js';

describe('Count Events', () => {
  const eventsListId = 'events-list';

  beforeEach(() => {
    const div = document.createElement('div');
    div.id = eventsListId;
    document.body.appendChild(div);
  });

  afterEach(() => {
    const container = document.getElementById(eventsListId);
    container.replaceChildren();
  });

  test('Count number of events on the page', () => {
    const container = document.getElementById(eventsListId);
    const cards = [];
    for (let i = 0; i < 10; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      container.appendChild(card);
      cards.push(card);
    }
    expect(countEvents()).toBe(cards.length);
  });

  test('Defaults to 0 when there are no events', () => {
    const container = document.getElementById('event-list');
    const someElement = document.createElement('div');
    container.appendChild(someElement);
    expect(countEvents()).toBe(0);
  });
});
