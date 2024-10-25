/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Tooltips from './index';

it("Tooltips renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Tooltips />);
});