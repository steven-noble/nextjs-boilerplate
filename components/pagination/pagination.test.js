/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Pagination from './index';

it("Pagination renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Pagination />);
});