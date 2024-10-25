/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Progress from './index';

it("Progress renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Progress />);
});