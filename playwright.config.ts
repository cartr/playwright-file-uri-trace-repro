import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: ".",
    reporter: "html",
    use: {
        trace: "on"
    }
})
