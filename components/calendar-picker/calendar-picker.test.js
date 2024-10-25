/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import CalendarPicker from './index';

it("CalendarPicker renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<CalendarPicker />);
});