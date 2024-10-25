/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Error from './index';

it("Error renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Error />);
});