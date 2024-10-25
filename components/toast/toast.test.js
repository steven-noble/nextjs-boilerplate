/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Toast from './index';

it("Toast renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Toast />);
});