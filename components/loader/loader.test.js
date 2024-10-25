/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Loader from './index';

it("Loader renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Loader />);
});