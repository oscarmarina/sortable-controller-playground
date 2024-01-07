import { ReactiveController, ReactiveControllerHost } from 'lit';
import Sortable from 'sortablejs';

export type SortableReactiveControllerHost = ReactiveControllerHost & HTMLElement;
export type SortableOptions = Sortable.Options & { renderTarget?: HTMLElement };

export class SortableController implements ReactiveController {
  private sortable?: Sortable;

  constructor(private host: SortableReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  render(getOptions: Partial<SortableOptions>) {
    const options = getOptions;
    this.sortable = Sortable.create(options.renderTarget /* v8 ignore next */ ?? this.host, {
      ...options,
    });
  }

  hostDisconnected() {
    this.sortable?.destroy();
  }
}
