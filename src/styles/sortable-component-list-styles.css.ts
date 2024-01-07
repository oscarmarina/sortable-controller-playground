import { css } from 'lit';

export const styles = css`:host {
  box-sizing: border-box;
  display: block;
  padding: 1rem;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}`;
