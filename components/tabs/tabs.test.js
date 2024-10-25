/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Tabs from './index';

it("Tabs renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Tabs />);
});