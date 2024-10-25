/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Card from './index';

it("Card renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Card />);
});