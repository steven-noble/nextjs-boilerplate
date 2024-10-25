/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Video from './index';

it("Video renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Video />);
});