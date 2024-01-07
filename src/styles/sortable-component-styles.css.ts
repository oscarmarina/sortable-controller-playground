import { css } from 'lit';

export const styles = css`:host {
  box-sizing: border-box;
  display: block;
  padding: 1rem;
  background-color: #f3edf7;
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

[role=heading] {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
[role=heading] + button {
  display: inline-block;
  margin-bottom: 0.5rem;
}

hr {
  border: none;
  background: linear-gradient(to right, transparent, hsla(0, 0%, 60%, 0.5), transparent);
  height: 0.0625rem;
  margin: 1rem 0;
}

.list-group {
  width: 100%;
  border: 1px solid hsla(0, 0%, 60%, 0.5);
  display: block;
  margin: 1rem 0;
}
.list-group li {
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 16px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  border: 1px solid hsla(0, 0%, 60%, 0.5);
  background-color: white;
}
.list-group .non-draggable {
  color: rgb(from currentcolor r g b/50%);
}
.list-group .sortable-ghost {
  opacity: 0.75;
  background-color: rgb(149, 206, 225);
}
.list-group .sortable-swap-highlight {
  background-color: lch(from darkolivegreen calc(l + 20) c h);
  color: white;
}

.name {
  font-size: 20px;
}

.animal {
  font-size: 12px;
}`;
