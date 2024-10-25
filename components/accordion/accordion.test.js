/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Accordion from './index';

it("Accordion renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Accordion />);
});