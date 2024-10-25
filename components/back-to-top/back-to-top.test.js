/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import BackToTop from './index';

it("BackToTop renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<BackToTop />);
});