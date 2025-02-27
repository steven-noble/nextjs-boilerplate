/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import FadeIntoView from './index';

it("FadeIntoView renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<FadeIntoView />);
});