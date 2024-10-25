/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Breadcrumbs from './index';

it("Breadcrumbs renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Breadcrumbs />);
});