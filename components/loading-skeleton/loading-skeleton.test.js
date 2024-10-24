/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import LoadingSkeleton from './index';

it("LoadingSkeleton renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<LoadingSkeleton />);
});