/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Search from './index';

it("Search renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Search />);
});