import { css } from 'lit';

export const styles = css`:host {
  box-sizing: border-box;
  display: block;
  padding: 2rem;
  background-color: #fef7ff;
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

hr {
  border: none;
  background: linear-gradient(to right, transparent, hsla(0, 0%, 60%, 0.5), transparent);
  height: 0.0625rem;
  margin: 1rem 0;
}

[role=heading] {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hr {
  margin-top: 2rem;
  background-color: #f3edf7;
  padding: 2em 1rem 0;
}

form {
  margin-bottom: 1rem;
}

sortable-component-list {
  padding: 0;
}

.group {
  display: flex;
  gap: 8px;
  width: 100%;
}
.group > * {
  flex: 1;
}

.list-group {
  margin: 1rem 0;
  width: 100%;
  border: 1px solid hsla(0, 0%, 60%, 0.5);
  display: block;
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
