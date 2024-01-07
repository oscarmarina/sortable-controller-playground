import { html, LitElement, render as LitHtmlRender } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import type { KeyFn, ItemTemplate } from 'lit/directives/repeat.js';
import Sortable, { Swap } from 'sortablejs';
import { SortableController, SortableReactiveControllerHost } from './SortableController.js';
import { styles } from './styles/sortable-component-list-styles.css.js';

export class SortableComponentList<T> extends LitElement implements SortableReactiveControllerHost {
  /**
   * Controller for the sortable list.
   */
  #sortableController?: SortableController;

  static override styles = [styles];

  @property({ type: Array })
  items: T[] = [];

  // Required Property
  @property({ type: Object })
  renderItem: ItemTemplate<T> = item => item;

  // Required Property
  @property({ type: Object })
  keyFn: KeyFn<T> = item => item;

  @property({ type: String })
  group: string | Sortable.GroupOptions | undefined;

  @property({ type: Boolean })
  sort = true;

  @property({ type: Number })
  delay = 0;

  @property({ type: Boolean })
  delayOnTouchOnly = false;

  @property({ type: Number })
  touchStartThreshold = 0;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Object })
  store:
    | {
        get: (sortable: Sortable) => string[];
        set: (sortable: Sortable) => void;
      }
    | undefined;

  @property({ type: Number })
  animation = 0;

  @property()
  easing: string | undefined;

  @property()
  handle: string | undefined;

  @property({ type: Object })
  filter:
    | string
    | ((
        this: Sortable,
        event: Event | TouchEvent,
        target: HTMLElement,
        sortable: Sortable,
      ) => boolean)
    | undefined = '.ignore-elements';

  @property({ type: Boolean })
  preventOnFilter = true;

  @property({ type: String })
  draggableSelector = '>*';

  @property({ type: String, attribute: 'data-id' })
  dataIdAttr = 'data-id';

  @property()
  ghostClass = 'sortable-ghost';

  @property()
  chosenClass = 'sortable-chosen';

  @property()
  dragClass = 'sortable-drag';

  @property()
  ignore = 'a, img';

  @property({ type: Number })
  swapThreshold = 1;

  @property({ type: Boolean })
  invertSwap = false;

  @property({ type: Number })
  invertedSwapThreshold: number | undefined;

  @property()
  direction: 'vertical' | 'horizontal' = 'vertical';

  @property({ type: Boolean })
  forceFallback = false;

  @property()
  fallbackClass = 'sortable-fallback';

  @property({ type: Boolean })
  fallbackOnBody = false;

  @property({ type: Number })
  fallbackTolerance = 0;

  @property({ type: Object })
  fallbackOffset = { x: 0, y: 0 };

  @property({ type: Boolean })
  dropBubble = false;

  @property({ type: Boolean })
  dragoverBubble = false;

  @property({ type: Boolean })
  removeCloneOnHide = true;

  @property({ type: Number })
  emptyInsertThreshold = 5;

  /**
   * The target element for rendering the sortable list.
   */
  @queryAssignedElements({ slot: 'sortable-list' })
  renderTarget!: Array<HTMLElement>;

  constructor() {
    super();
    try {
      Sortable.mount(new Swap());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.info(error);
    }
    this.#sortableController = new SortableController(this);
  }

  /**
   * Initializes the sortable list.
   */
  override async connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    await this.updateComplete;

    this.#sortableController?.render({
      renderTarget: this.renderTarget[0],
      swap: true,
      group: this.group,
      sort: this.sort,
      delay: this.delay,
      delayOnTouchOnly: this.delayOnTouchOnly,
      touchStartThreshold: this.touchStartThreshold,
      disabled: this.disabled,
      store: this.store,
      animation: this.animation,
      easing: this.easing,
      handle: this.handle,
      filter: this.filter,
      preventOnFilter: this.preventOnFilter,
      draggable: this.draggableSelector,
      dataIdAttr: this.dataIdAttr,
      ghostClass: this.ghostClass,
      chosenClass: this.chosenClass,
      dragClass: this.dragClass,
      ignore: this.ignore,
      swapThreshold: this.swapThreshold,
      invertSwap: this.invertSwap,
      invertedSwapThreshold: this.invertedSwapThreshold,
      direction: this.direction,
      forceFallback: this.forceFallback,
      fallbackClass: this.fallbackClass,
      fallbackOnBody: this.fallbackOnBody,
      fallbackTolerance: this.fallbackTolerance,
      fallbackOffset: this.fallbackOffset,
      dropBubble: this.dropBubble,
      dragoverBubble: this.dragoverBubble,
      removeCloneOnHide: this.removeCloneOnHide,
      emptyInsertThreshold: this.emptyInsertThreshold,
    });
  }

  override render() {
    return html` <div>Group ${this.group}</div>
      <slot name="sortable-list">${this._litHtmlRender()}</slot>`;
  }

  _litHtmlRender() {
    LitHtmlRender(this._lightDomTpl, this, { host: this });
  }

  get _lightDomTpl() {
    return this._sortableTpl;
  }

  get _sortableTpl() {
    return html`
      <ul slot="sortable-list" id="simpleList" class="list-group">
        ${repeat(this.items, this.keyFn, this.renderItem)}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sortable-component-list': SortableComponentList<unknown>;
  }
}
