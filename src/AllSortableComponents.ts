/* eslint-disable no-console */
import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import '../define/sortable-component.js';
import '../define/sortable-component-list.js';
import { styles } from './styles/all-sortable-components-styles.css.js';

interface Item {
  name: string;
  email: string;
}
/**
 * ## A sortable list component.
 * - https://lit.dev/playground/#gist=9b0da2d828676afff4aba3823f38c966
 * - https://twitter.com/techytacos/status/1743019772537647273
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/sortable-controller-playground)
 *
 * __Scaffold generated using__:
 * > [npm init @blockquote/wc](https://github.com/oscarmarina/create-wc)
 *
 * __Reactive Controllers - Lit__:
 * - [Lit-Xstate Controller](https://github.com/oscarmarina/XstateController)
 *
 * <hr>
 */
export class AllSortableComponents extends LitElement {
  static override styles = [styles];

  @state()
  group1 = [
    { name: 'Elliott', email: 'elliott@google.com' },
    { name: 'Kevin', email: 'kevin@google.com' },
    { name: 'Justin', email: 'justin@google.com' },
  ];

  @state()
  group2 = [
    { name: 'Augustine', email: 'augustine@google.com' },
    { name: 'Andrew', email: 'andrew@google.com' },
    { name: 'Justin', email: 'justinf@google.com' },
  ];

  override render() {
    return html`
      <div>
        <sortable-component
          @counterchange="${(ev: CustomEvent) => console.log('==>', ev.detail)}"
          heading="sortable-component"
          >Light Dom</sortable-component
        >
      </div>
      <div class="hr">
        <div role="heading" aria-level="2">sortable-component-list</div>
        <form @submit=${this.#addUser}>
          <label>Name: <input required name="name" /></label>
          <label>Email: <input required name="email" /></label>
          <button>Add User</button>
        </form>
        <hr />
        <div class="group">
          <sortable-component-list
            .items=${this.group1}
            .keyFn=${(item: Item) => item.email}
            .renderItem=${this.renderItem}
            ghostClass="sortable-ghost"
            group="1"
            animation="150"
          ></sortable-component-list>
          <sortable-component-list
            .items=${this.group2}
            .keyFn=${(item: Item) => item.email}
            .renderItem=${this.renderItem}
            group="1"
            ghostClass="sortable-ghost"
            animation="150"
          ></sortable-component-list>
        </div>
      </div>
    `;
  }

  private renderItem(item: Item) {
    return html`
      <li class="item">
        <span class="name">${item.name}</span>
        <span class="email">${item.email}</span>
      </li>
    `;
  }

  #addUser(ev: SubmitEvent) {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    this.group1.push({ name, email });
    this.requestUpdate();
    form.reset();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'all-sortable-components': AllSortableComponents;
  }
}
