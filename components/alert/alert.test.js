/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Alert from './index';

it("Alert renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Alert />);
});