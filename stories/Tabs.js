import { html } from 'lit-html';
import './Tabs.css';
import 'tabs'
/**
 * Primary UI component for user interaction
 */
export const Tabs = ({tabs}) => {
  return html`
    <orxe-tabs .tabs=${tabs}>
    </orxe-tabs>
  `;
};
