import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { SortableController, SortableReactiveControllerHost } from './SortableController.js';
import { styles } from './styles/sortable-component-styles.css.js';

/**
 * Interface for the items in the sortable list.
 */
interface Item {
  name: string;
  animal: 'dog' | 'cat' | 'elephant';
  uid: number;
}

/**
 * @attribute heading
 * @attribute counter
 * @attribute items
 * @fires counterchange - Indicates when the count changes
 * @slot - This element has a slot
 */
export class SortableComponent extends LitElement implements SortableReactiveControllerHost {
  #sort = 1;

  /**
   * Controller for the sortable list.
   */
  #sortableController?: SortableController;

  static override styles = [styles];

  /**
   * The items in the sortable list.
   */
  @property({ type: Array })
  items: Item[] = [
    { name: 'Jasper', animal: 'dog', uid: 12345 },
    { name: 'Wumbo', animal: 'elephant', uid: 234456 },
    { name: 'Waffles', animal: 'dog', uid: 135677 },
    { name: 'Nike', animal: 'cat', uid: 234456 },
    { name: 'Jumbo', animal: 'elephant', uid: 234456 },
  ];

  /**
   * The heading to say "Hello" to.
   */
  @property({ type: String })
  heading = 'Hey there';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  counter = 5;

  /**
   * The target element for rendering the sortable list.
   */
  @query('#simpleList')
  renderTarget!: HTMLElement;

  constructor() {
    super();
    this.#sortableController = new SortableController(this);
  }

  /**
   * Initializes the sortable list.
   */
  override async connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    await this.updateComplete;
    this.#sortableController?.render({
      renderTarget: this.renderTarget,
      ghostClass: 'sortable-ghost',
      swap: false,
      onEnd: ev => {
        const endList = Array.from(ev.to.children).map(el =>
          (el as HTMLElement).textContent?.replace(/\s+/g, ''),
        );
        // eslint-disable-next-line no-console
        console.log(endList);
      },
    });
  }

  override render() {
    return html`
      <div role="heading" aria-level="2">${this.heading}</div>
      <button @click=${this.#onClick}>Counter: ${this.counter}</button>
      <div><slot></slot></div>
      <hr />
      ${this._sortableTpl}
      <button @click=${this.#toggleSort}>Toggle sort</button>
    `;
  }

  get _sortableTpl() {
    return html`
      <ul id="simpleList" class="list-group">
        ${repeat(
          this.items,
          item => item.uid,
          (item, index) =>
            html`<li>
              <span class="name">${index}: ${item.name}</span>
              <span class="animal">${item.animal}</span>
            </li>`,
        )}
      </ul>
    `;
  }

  /**
   * Add one plus the current counter value.
   */
  #onClick() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('counterchange', { detail: this.counter }));
  }

  /**
   * Re-sort the list.
   */
  #toggleSort() {
    this.#sort *= -1;
    this.items = [
      ...this.items.sort(
        (a, b) => this.#sort * (a.name.localeCompare(b.name) || a.animal.localeCompare(b.animal)),
      ),
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sortable-component': SortableComponent;
  }
}
