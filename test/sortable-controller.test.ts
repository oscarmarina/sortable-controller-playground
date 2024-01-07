import { html, fixture, assert, expect, fixtureCleanup } from '@open-wc/testing';
import { SortableComponent } from '../src/SortableComponent.js';
// import sinon from 'sinon';
import '../define/sortable-component.js';

suite('SortableController', () => {
  let el: SortableComponent;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(html`<sortable-component>light-dom</sortable-component>`);
      await el.updateComplete;
    });

    test('has a default heading "Hey there" and counter 5', () => {
      assert.equal(el.heading, 'Hey there');
      assert.equal(el.counter, 5);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await expect(el).shadowDom.to.equalSnapshot();
      });

      test('LIGHT DOM - Structure test', async () => {
        await expect(el).lightDom.to.equalSnapshot();
      });
      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });

  suite('Events ', () => {
    setup(async () => {
      el = await fixture(html`<sortable-component></sortable-component>`);
      await el.updateComplete;
    });

    test('increases the counter on button click', () => {
      const button = el.shadowRoot!.querySelector('button')!;
      button.click();
      assert.equal(el.counter, 6);
    });
  });

  suite('Override ', () => {
    setup(async () => {
      el = await fixture(
        html`<sortable-component heading="attribute heading"></sortable-component>`,
      );
      await el.updateComplete;
    });

    test('can override the heading via attribute', () => {
      assert.equal(el.heading, 'attribute heading');
    });
  });
});
