/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Hotspots from './index';

it("Hotspots renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Hotspots />);
});