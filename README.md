## A sortable list component.
- https://lit.dev/playground/#gist=9b0da2d828676afff4aba3823f38c966
- https://twitter.com/techytacos/status/1743019772537647273

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/sortable-controller-playground)

__Scaffold generated using__:
> [npm init @blockquote/wc](https://github.com/oscarmarina/create-wc)

__Reactive Controllers - Lit__:
- [Lit-Xstate Controller](https://github.com/oscarmarina/XstateController)

<hr>


### `src/AllSortableComponents.ts`:

#### class: `AllSortableComponents`, `all-sortable-components`

##### Fields

| Name     | Privacy | Type    | Default                                                                                                                                                                | Description | Inherited From |
| -------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `group1` |         | `array` | `[    { name: 'Elliott', email: 'elliott@google.com' },    { name: 'Kevin', email: 'kevin@google.com' },    { name: 'Justin', email: 'justin@google.com' },  ]`        |             |                |
| `group2` |         | `array` | `[    { name: 'Augustine', email: 'augustine@google.com' },    { name: 'Andrew', email: 'andrew@google.com' },    { name: 'Justin', email: 'justinf@google.com' },  ]` |             |                |

##### Methods

| Name       | Privacy | Description | Parameters        | Return | Inherited From |
| ---------- | ------- | ----------- | ----------------- | ------ | -------------- |
| `#addUser` |         |             | `ev: SubmitEvent` |        |                |

<details><summary>Private API</summary>

##### Methods

| Name         | Privacy | Description | Parameters   | Return | Inherited From |
| ------------ | ------- | ----------- | ------------ | ------ | -------------- |
| `renderItem` | private |             | `item: Item` |        |                |

</details>

<hr/>

#### Exports

| Kind | Name                    | Declaration           | Module                       | Package |
| ---- | ----------------------- | --------------------- | ---------------------------- | ------- |
| `js` | `AllSortableComponents` | AllSortableComponents | src/AllSortableComponents.ts |         |

### `src/SortableComponent.ts`:

#### class: `SortableComponent`, `sortable-component`

##### Fields

| Name           | Privacy | Type          | Default                                                                                                                                                                                                                                                                     | Description                                         | Inherited From |
| -------------- | ------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------- |
| `items`        |         | `Item[]`      | `[    { name: 'Jasper', animal: 'dog', uid: 12345 },    { name: 'Wumbo', animal: 'elephant', uid: 234456 },    { name: 'Waffles', animal: 'dog', uid: 135677 },    { name: 'Nike', animal: 'cat', uid: 234456 },    { name: 'Jumbo', animal: 'elephant', uid: 234456 },  ]` | The items in the sortable list.                     |                |
| `heading`      |         | `string`      | `'Hey there'`                                                                                                                                                                                                                                                               | The heading to say "Hello" to.                      |                |
| `counter`      |         | `number`      | `5`                                                                                                                                                                                                                                                                         | The number of times the button has been clicked.    |                |
| `renderTarget` |         | `HTMLElement` |                                                                                                                                                                                                                                                                             | The target element for rendering the sortable list. |                |
| `_sortableTpl` |         |               |                                                                                                                                                                                                                                                                             |                                                     |                |

##### Methods

| Name          | Privacy | Description                             | Parameters | Return | Inherited From |
| ------------- | ------- | --------------------------------------- | ---------- | ------ | -------------- |
| `#onClick`    |         | Add one plus the current counter value. |            |        |                |
| `#toggleSort` |         | Re-sort the list.                       |            |        |                |

##### Events

| Name            | Type          | Description                      | Inherited From |
| --------------- | ------------- | -------------------------------- | -------------- |
| `counterchange` | `CustomEvent` | Indicates when the count changes |                |

##### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `heading` | heading |                |
| `counter` | counter |                |
| `items`   | items   |                |

##### Slots

| Name | Description             |
| ---- | ----------------------- |
|      | This element has a slot |

<details><summary>Private API</summary>

##### Fields

| Name                  | Privacy | Type                              | Default                        | Description                       | Inherited From |
| --------------------- | ------- | --------------------------------- | ------------------------------ | --------------------------------- | -------------- |
| `#sort`               | private | `number`                          | `1`                            |                                   |                |
| `#sortableController` | private | `SortableController \| undefined` | `new SortableController(this)` | Controller for the sortable list. |                |

</details>

<hr/>

#### Exports

| Kind | Name                | Declaration       | Module                   | Package |
| ---- | ------------------- | ----------------- | ------------------------ | ------- |
| `js` | `SortableComponent` | SortableComponent | src/SortableComponent.ts |         |

### `src/SortableComponentList.ts`:

#### class: `SortableComponentList`, `sortable-component-list`

##### Fields

| Name                    | Privacy | Type                                                                                                                                                                            | Default               | Description                                         | Inherited From |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------- | -------------- |
| `items`                 |         | `T[]`                                                                                                                                                                           | `[]`                  |                                                     |                |
| `renderItem`            |         | `ItemTemplate<T>`                                                                                                                                                               |                       |                                                     |                |
| `keyFn`                 |         | `KeyFn<T>`                                                                                                                                                                      |                       |                                                     |                |
| `group`                 |         | `string \| Sortable.GroupOptions \| undefined`                                                                                                                                  |                       |                                                     |                |
| `sort`                  |         | `boolean`                                                                                                                                                                       | `true`                |                                                     |                |
| `delay`                 |         | `number`                                                                                                                                                                        | `0`                   |                                                     |                |
| `delayOnTouchOnly`      |         | `boolean`                                                                                                                                                                       | `false`               |                                                     |                |
| `touchStartThreshold`   |         | `number`                                                                                                                                                                        | `0`                   |                                                     |                |
| `disabled`              |         | `boolean`                                                                                                                                                                       | `false`               |                                                     |                |
| `store`                 |         | `\| {
        get: (sortable: Sortable) => string[];
        set: (sortable: Sortable) => void;
      }     \| undefined`                                                       |                       |                                                     |                |
| `animation`             |         | `number`                                                                                                                                                                        | `0`                   |                                                     |                |
| `easing`                |         | `string \| undefined`                                                                                                                                                           |                       |                                                     |                |
| `handle`                |         | `string \| undefined`                                                                                                                                                           |                       |                                                     |                |
| `filter`                |         | `\| string     \| ((
        this: Sortable,
        event: Event \| TouchEvent,
        target: HTMLElement,
        sortable: Sortable,
      ) => boolean)     \| undefined` | `'.ignore-elements'`  |                                                     |                |
| `preventOnFilter`       |         | `boolean`                                                                                                                                                                       | `true`                |                                                     |                |
| `draggableSelector`     |         | `string`                                                                                                                                                                        | `'>*'`                |                                                     |                |
| `dataIdAttr`            |         | `string`                                                                                                                                                                        | `'data-id'`           |                                                     |                |
| `ghostClass`            |         | `string`                                                                                                                                                                        | `'sortable-ghost'`    |                                                     |                |
| `chosenClass`           |         | `string`                                                                                                                                                                        | `'sortable-chosen'`   |                                                     |                |
| `dragClass`             |         | `string`                                                                                                                                                                        | `'sortable-drag'`     |                                                     |                |
| `ignore`                |         | `string`                                                                                                                                                                        | `'a, img'`            |                                                     |                |
| `swapThreshold`         |         | `number`                                                                                                                                                                        | `1`                   |                                                     |                |
| `invertSwap`            |         | `boolean`                                                                                                                                                                       | `false`               |                                                     |                |
| `invertedSwapThreshold` |         | `number \| undefined`                                                                                                                                                           |                       |                                                     |                |
| `direction`             |         | `'vertical' \| 'horizontal'`                                                                                                                                                    | `'vertical'`          |                                                     |                |
| `forceFallback`         |         | `boolean`                                                                                                                                                                       | `false`               |                                                     |                |
| `fallbackClass`         |         | `string`                                                                                                                                                                        | `'sortable-fallback'` |                                                     |                |
| `fallbackOnBody`        |         | `boolean`                                                                                                                                                                       | `false`               |                                                     |                |
| `fallbackTolerance`     |         | `number`                                                                                                                                                                        | `0`                   |                                                     |                |
| `fallbackOffset`        |         | `object`                                                                                                                                                                        | `{ x: 0, y: 0 }`      |                                                     |                |
| `dropBubble`            |         | `boolean`                                                                                                                                                                       | `false`               |                                                     |                |
| `dragoverBubble`        |         | `boolean`                                                                                                                                                                       | `false`               |                                                     |                |
| `removeCloneOnHide`     |         | `boolean`                                                                                                                                                                       | `true`                |                                                     |                |
| `emptyInsertThreshold`  |         | `number`                                                                                                                                                                        | `5`                   |                                                     |                |
| `renderTarget`          |         | `Array<HTMLElement>`                                                                                                                                                            |                       | The target element for rendering the sortable list. |                |
| `_lightDomTpl`          |         |                                                                                                                                                                                 |                       |                                                     |                |
| `_sortableTpl`          |         |                                                                                                                                                                                 |                       |                                                     |                |

##### Methods

| Name             | Privacy | Description | Parameters | Return | Inherited From |
| ---------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `_litHtmlRender` |         |             |            |        |                |

##### Attributes

| Name                    | Field                 | Inherited From |
| ----------------------- | --------------------- | -------------- |
| `items`                 | items                 |                |
| `renderItem`            | renderItem            |                |
| `keyFn`                 | keyFn                 |                |
| `group`                 | group                 |                |
| `sort`                  | sort                  |                |
| `delay`                 | delay                 |                |
| `delayOnTouchOnly`      | delayOnTouchOnly      |                |
| `touchStartThreshold`   | touchStartThreshold   |                |
| `disabled`              | disabled              |                |
| `store`                 | store                 |                |
| `animation`             | animation             |                |
| `easing`                | easing                |                |
| `handle`                | handle                |                |
| `filter`                | filter                |                |
| `preventOnFilter`       | preventOnFilter       |                |
| `draggableSelector`     | draggableSelector     |                |
| `data-id`               | dataIdAttr            |                |
| `ghostClass`            | ghostClass            |                |
| `chosenClass`           | chosenClass           |                |
| `dragClass`             | dragClass             |                |
| `ignore`                | ignore                |                |
| `swapThreshold`         | swapThreshold         |                |
| `invertSwap`            | invertSwap            |                |
| `invertedSwapThreshold` | invertedSwapThreshold |                |
| `direction`             | direction             |                |
| `forceFallback`         | forceFallback         |                |
| `fallbackClass`         | fallbackClass         |                |
| `fallbackOnBody`        | fallbackOnBody        |                |
| `fallbackTolerance`     | fallbackTolerance     |                |
| `fallbackOffset`        | fallbackOffset        |                |
| `dropBubble`            | dropBubble            |                |
| `dragoverBubble`        | dragoverBubble        |                |
| `removeCloneOnHide`     | removeCloneOnHide     |                |
| `emptyInsertThreshold`  | emptyInsertThreshold  |                |

<details><summary>Private API</summary>

##### Fields

| Name                  | Privacy | Type                              | Default                        | Description                       | Inherited From |
| --------------------- | ------- | --------------------------------- | ------------------------------ | --------------------------------- | -------------- |
| `#sortableController` | private | `SortableController \| undefined` | `new SortableController(this)` | Controller for the sortable list. |                |

</details>

<hr/>

#### Exports

| Kind | Name                    | Declaration           | Module                       | Package |
| ---- | ----------------------- | --------------------- | ---------------------------- | ------- |
| `js` | `SortableComponentList` | SortableComponentList | src/SortableComponentList.ts |         |

### `src/SortableController.ts`:

#### class: `SortableController`

##### Methods

| Name               | Privacy | Description | Parameters | Return | Inherited From |
| ------------------ | ------- | ----------- | ---------- | ------ | -------------- |
| `hostDisconnected` |         |             |            |        |                |

<details><summary>Private API</summary>

##### Fields

| Name       | Privacy | Type                    | Default | Description | Inherited From |
| ---------- | ------- | ----------------------- | ------- | ----------- | -------------- |
| `sortable` | private | `Sortable \| undefined` |         |             |                |

</details>

<hr/>

#### Exports

| Kind | Name                 | Declaration        | Module                    | Package |
| ---- | -------------------- | ------------------ | ------------------------- | ------- |
| `js` | `SortableController` | SortableController | src/SortableController.ts |         |

### `src/styles/all-sortable-components-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                           | Package |
| ---- | -------- | ----------- | ------------------------------------------------ | ------- |
| `js` | `styles` | styles      | src/styles/all-sortable-components-styles.css.ts |         |

### `src/styles/sortable-component-list-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                           | Package |
| ---- | -------- | ----------- | ------------------------------------------------ | ------- |
| `js` | `styles` | styles      | src/styles/sortable-component-list-styles.css.ts |         |

### `src/styles/sortable-component-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                      | Package |
| ---- | -------- | ----------- | ------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/sortable-component-styles.css.ts |         |

### `define/all-sortable-components.ts`:

#### Exports

| Kind                        | Name                      | Declaration           | Module                        | Package |
| --------------------------- | ------------------------- | --------------------- | ----------------------------- | ------- |
| `custom-element-definition` | `all-sortable-components` | AllSortableComponents | /src/AllSortableComponents.js |         |

### `define/sortable-component-list.ts`:

#### Exports

| Kind                        | Name                      | Declaration           | Module                        | Package |
| --------------------------- | ------------------------- | --------------------- | ----------------------------- | ------- |
| `custom-element-definition` | `sortable-component-list` | SortableComponentList | /src/SortableComponentList.js |         |

### `define/sortable-component.ts`:

#### Exports

| Kind                        | Name                 | Declaration       | Module                    | Package |
| --------------------------- | -------------------- | ----------------- | ------------------------- | ------- |
| `custom-element-definition` | `sortable-component` | SortableComponent | /src/SortableComponent.js |         |
