import { __awaiter } from "tslib";
import { PluginSettingTab, Setting } from "obsidian";
import { UNICODE_PLANES_ALL } from "../../libraries/data/unicodePlanes";
import { asHexadecimal } from "../../libraries/helpers/asHexadecimal";
import { UNICODE_CHARACTER_CATEGORIES } from "../../libraries/data/unicodeCharacterCategories";
export class SettingTab extends PluginSettingTab {
    constructor(app, plugin, characterService, settingsStore, initializer) {
        super(app, plugin);
        this.characterService = characterService;
        this.settingsStore = settingsStore;
        this.initializer = initializer;
        this.rendered = false;
        this.containerEl.addClass("plugin", "unicode-search", "setting-tab");
    }
    display() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.rendered) {
                return;
            }
            const container = this.containerEl.createDiv({ cls: "filter-settings" });
            new Setting(container)
                .setHeading()
                .setName("Unicode Character Filters")
                .setDesc("Here you can set which characters would you like to be included " +
                "or excluded from the plugins search results. " +
                "Toggle the headings to display the options.");
            yield this.displayFilterSettings(container);
            this.rendered = true;
        });
    }
    hide() {
        return this.initializer.initializeData();
    }
    displayFilterSettings(container) {
        return __awaiter(this, void 0, void 0, function* () {
            new Setting(container)
                .setHeading()
                .setName("General Categories")
                .setDesc("Include or exclude any Unicode general character categories.")
                .addToggle(toggle => toggle
                .setValue(false)
                .onChange(visible => categoryFilterDiv.toggleClass("hidden", !visible)));
            const categoryFilterDiv = container.createDiv({ cls: ["group-container", "hidden"] });
            for (const category of UNICODE_CHARACTER_CATEGORIES) {
                yield this.addCharacterCategoryFilter(categoryFilterDiv, category);
            }
            new Setting(container)
                .setHeading()
                .setName("Planes and Blocks")
                .setDesc("Include or exclude of any Unicode blocks.")
                .addToggle(toggle => toggle
                .setValue(false)
                .onChange(visible => planesFilterDiv.toggleClass("hidden", !visible)));
            const planesFilterDiv = container.createDiv({ cls: ["group-container", "hidden"] });
            for (const plane of UNICODE_PLANES_ALL) {
                yield this.addCharacterPlaneFilters(planesFilterDiv, plane);
            }
        });
    }
    addCharacterCategoryFilter(container, categoryGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryGroupContainer = container.createDiv({ cls: "item-container" });
            new Setting(categoryGroupContainer)
                .setHeading()
                .setName(categoryGroup.name);
            const categoryContainer = categoryGroupContainer.createDiv({ cls: "items-list" });
            for (const category of categoryGroup.categories) {
                yield SettingTab.addCharacterCategoryFilterToggle(categoryContainer, this.settingsStore, category);
            }
        });
    }
    addCharacterPlaneFilters(container, plane) {
        return __awaiter(this, void 0, void 0, function* () {
            const planeContainer = container.createDiv({ cls: "item-container" });
            new Setting(planeContainer)
                .setHeading()
                .setName(createFragment(fragment => {
                fragment.createSpan().appendText(plane.description);
                SettingTab.codepointFragment(fragment, plane.interval);
            }));
            const blocksContainer = planeContainer.createDiv({ cls: "blocks-list" });
            for (const block of plane.blocks) {
                yield SettingTab.addCharacterBlockFilterToggle(blocksContainer, this.settingsStore, block);
            }
        });
    }
    static addCharacterBlockFilterToggle(container, options, block) {
        return __awaiter(this, void 0, void 0, function* () {
            /* Low: try to redo more effectively, we always get a plane worth of blocks */
            const blockIncluded = yield options.getCharacterBlock(block.interval);
            new Setting(container)
                .setName(block.description)
                .setDesc(createFragment(fragment => SettingTab.codepointFragment(fragment, block.interval)))
                .addToggle(input => input
                .setValue(blockIncluded)
                .onChange((value) => options.setCharacterBlock(block.interval, value)));
        });
    }
    static addCharacterCategoryFilterToggle(container, options, category) {
        return __awaiter(this, void 0, void 0, function* () {
            /* Low: try to redo more effectively, we always get a plane worth of blocks */
            const blockIncluded = yield options.getCharacterCategory(category.abbreviation);
            new Setting(container)
                .setName(category.name)
                .setDesc(category.description)
                .addToggle(input => input
                .setValue(blockIncluded)
                .onChange((value) => options.setCharacterCategory(category.abbreviation, value)));
        });
    }
    static codepointFragment(parent, interval) {
        parent
            .createSpan({ cls: ["character-codepoint", "monospace"], })
            .setText(`${asHexadecimal(interval.start)}－${asHexadecimal(interval.end)}`);
        return parent;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ1RhYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdUYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDaEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFHdEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBS3BFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBSzdGLE1BQU0sT0FBTyxVQUFXLFNBQVEsZ0JBQWdCO0lBSTVDLFlBQ0ksR0FBUSxFQUNSLE1BQWMsRUFDRyxnQkFBa0MsRUFDbEMsYUFBNEIsRUFDNUIsV0FBNEI7UUFFN0MsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUpGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBUHpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFVckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ3hFLENBQUM7SUFFYyxPQUFPOztZQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsT0FBTzthQUNWO1lBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQyxDQUFDO1lBRXZFLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQztpQkFDakIsVUFBVSxFQUFFO2lCQUNaLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQztpQkFDcEMsT0FBTyxDQUNKLGtFQUFrRTtnQkFDbEUsK0NBQStDO2dCQUMvQyw2Q0FBNkMsQ0FDaEQs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LGdDQUFnQyxDQUNqRCxTQUFzQixFQUN0QixPQUFzQixFQUN0QixRQUFnQzs7WUFFaEMsOEVBQThFO1lBQzlFLE1BQU0sYUFBYSxHQUFHLE1BQU0sT0FBTyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVoRixJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUM7aUJBQ2pCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2lCQUN0QixPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDN0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSztpQkFDcEIsUUFBUSxDQUFDLGFBQWEsQ0FBQztpQkFDdkIsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUNuRixDQUFDO1FBQ1YsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQXdCLEVBQUUsUUFBMkI7UUFDbEYsTUFBTTthQUNELFVBQVUsQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxHQUFFLENBQUM7YUFDeEQsT0FBTyxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVoRixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcCwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7VU5JQ09ERV9QTEFORVNfQUxMfSBmcm9tIFwiLi4vLi4vbGlicmFyaWVzL2RhdGEvdW5pY29kZVBsYW5lc1wiO1xuaW1wb3J0IHtVbmljb2RlQmxvY2t9IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvdHlwZXMvdW5pY29kZS91bmljb2RlQmxvY2tcIjtcblxuaW1wb3J0IHthc0hleGFkZWNpbWFsfSBmcm9tIFwiLi4vLi4vbGlicmFyaWVzL2hlbHBlcnMvYXNIZXhhZGVjaW1hbFwiO1xuaW1wb3J0IHtDaGFyYWN0ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZS9jaGFyYWN0ZXJTZXJ2aWNlXCI7XG5pbXBvcnQge1NldHRpbmdzU3RvcmV9IGZyb20gXCIuLi9zZXJ2aWNlL3NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Q29kZXBvaW50SW50ZXJ2YWx9IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvdHlwZXMvY29kZXBvaW50L2NvZGVwb2ludEludGVydmFsXCI7XG5pbXBvcnQge1VuaWNvZGVQbGFuZX0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy90eXBlcy91bmljb2RlL3VuaWNvZGVQbGFuZVwiO1xuaW1wb3J0IHtVTklDT0RFX0NIQVJBQ1RFUl9DQVRFR09SSUVTfSBmcm9tIFwiLi4vLi4vbGlicmFyaWVzL2RhdGEvdW5pY29kZUNoYXJhY3RlckNhdGVnb3JpZXNcIjtcbmltcG9ydCB7VW5pY29kZUdlbmVyYWxDYXRlZ29yeUdyb3VwfSBmcm9tIFwiLi4vLi4vbGlicmFyaWVzL3R5cGVzL3VuaWNvZGUvdW5pY29kZUdlbmVyYWxDYXRlZ29yeUdyb3VwXCI7XG5pbXBvcnQge1VuaWNvZGVHZW5lcmFsQ2F0ZWdvcnl9IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvdHlwZXMvdW5pY29kZS91bmljb2RlR2VuZXJhbENhdGVnb3J5XCI7XG5pbXBvcnQge0RhdGFJbml0aWFsaXplcn0gZnJvbSBcIi4uL3NlcnZpY2UvZGF0YUluaXRpYWxpemVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cbiAgICBwcml2YXRlIHJlbmRlcmVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgYXBwOiBBcHAsXG4gICAgICAgIHBsdWdpbjogUGx1Z2luLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNoYXJhY3RlclNlcnZpY2U6IENoYXJhY3RlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgc2V0dGluZ3NTdG9yZTogU2V0dGluZ3NTdG9yZSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBpbml0aWFsaXplcjogRGF0YUluaXRpYWxpemVyLFxuICAgICkge1xuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRWwuYWRkQ2xhc3MoXCJwbHVnaW5cIiwgXCJ1bmljb2RlLXNlYXJjaFwiLCBcInNldHRpbmctdGFiXCIpXG4gICAgfVxuXG4gICAgb3ZlcnJpZGUgYXN5bmMgZGlzcGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWwuY3JlYXRlRGl2KHtjbHM6IFwiZmlsdGVyLXNldHRpbmdzXCJ9KTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXIpXG4gICAgICAgICAgICAuc2V0SGVhZGluZygpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlVuaWNvZGUgQ2hhcmFjdGVyIEZpbHRlcnNcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICAgIFwiSGVyZSB5b3UgY2FuIHNldCB3aGljaCBjaGFyYWN0ZXJzIHdvdWxkIHlvdSBsaWtlIHRvIGJlIGluY2x1ZGVkIFwiICtcbiAgICAgICAgICAgICAgICBcIm9yIGV4Y2x1ZGVkIGZyb20gdGhlIHBsdWdpbnMgc2VhcmNoIHJlc3VsdHMuIFwiICtcbiAgICAgICAgICAgICAgICBcIlRvZ2dsZSB0aGUgaGVhZGluZ3MgdG8gZGlzcGxheSB0aGUgb3B0aW9ucy5cIlxuICAgICAgICAgICAgKVxuICAgICAgICA7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kaXNwbGF5RmlsdGVyU2V0dGluZ3MoY29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBoaWRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplci5pbml0aWFsaXplRGF0YSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZGlzcGxheUZpbHRlclNldHRpbmdzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxuICAgICAgICAgICAgLnNldEhlYWRpbmcoKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJHZW5lcmFsIENhdGVnb3JpZXNcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFwiSW5jbHVkZSBvciBleGNsdWRlIGFueSBVbmljb2RlIGdlbmVyYWwgY2hhcmFjdGVyIGNhdGVnb3JpZXMuXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGVcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUoZmFsc2UpXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKHZpc2libGUgPT4gY2F0ZWdvcnlGaWx0ZXJEaXYudG9nZ2xlQ2xhc3MoXCJoaWRkZW5cIiwgIXZpc2libGUpKVxuICAgICAgICAgICAgKVxuICAgICAgICA7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlGaWx0ZXJEaXYgPSBjb250YWluZXIuY3JlYXRlRGl2KHtjbHM6IFtcImdyb3VwLWNvbnRhaW5lclwiLCBcImhpZGRlblwiXX0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgVU5JQ09ERV9DSEFSQUNURVJfQ0FURUdPUklFUykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRDaGFyYWN0ZXJDYXRlZ29yeUZpbHRlcihjYXRlZ29yeUZpbHRlckRpdiwgY2F0ZWdvcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxuICAgICAgICAgICAgLnNldEhlYWRpbmcoKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJQbGFuZXMgYW5kIEJsb2Nrc1wiKVxuICAgICAgICAgICAgLnNldERlc2MoXCJJbmNsdWRlIG9yIGV4Y2x1ZGUgb2YgYW55IFVuaWNvZGUgYmxvY2tzLlwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKGZhbHNlKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSh2aXNpYmxlID0+IHBsYW5lc0ZpbHRlckRpdi50b2dnbGVDbGFzcyhcImhpZGRlblwiLCAhdmlzaWJsZSkpXG4gICAgICAgICAgICApXG4gICAgICAgIDtcblxuICAgICAgICBjb25zdCBwbGFuZXNGaWx0ZXJEaXYgPSBjb250YWluZXIuY3JlYXRlRGl2KHtjbHM6IFtcImdyb3VwLWNvbnRhaW5lclwiLCBcImhpZGRlblwiXX0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgcGxhbmUgb2YgVU5JQ09ERV9QTEFORVNfQUxMKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZENoYXJhY3RlclBsYW5lRmlsdGVycyhwbGFuZXNGaWx0ZXJEaXYsIHBsYW5lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgYWRkQ2hhcmFjdGVyQ2F0ZWdvcnlGaWx0ZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2F0ZWdvcnlHcm91cDogVW5pY29kZUdlbmVyYWxDYXRlZ29yeUdyb3VwKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5R3JvdXBDb250YWluZXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHtjbHM6IFwiaXRlbS1jb250YWluZXJcIn0pO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNhdGVnb3J5R3JvdXBDb250YWluZXIpXG4gICAgICAgICAgICAuc2V0SGVhZGluZygpXG4gICAgICAgICAgICAuc2V0TmFtZShjYXRlZ29yeUdyb3VwLm5hbWUpXG4gICAgICAgIDtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IGNhdGVnb3J5R3JvdXBDb250YWluZXIuY3JlYXRlRGl2KHtjbHM6IFwiaXRlbXMtbGlzdFwifSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yeUdyb3VwLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IFNldHRpbmdUYWIuYWRkQ2hhcmFjdGVyQ2F0ZWdvcnlGaWx0ZXJUb2dnbGUoY2F0ZWdvcnlDb250YWluZXIsIHRoaXMuc2V0dGluZ3NTdG9yZSwgY2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBhZGRDaGFyYWN0ZXJQbGFuZUZpbHRlcnMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcGxhbmU6IFVuaWNvZGVQbGFuZSkge1xuICAgICAgICBjb25zdCBwbGFuZUNvbnRhaW5lciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoe2NsczogXCJpdGVtLWNvbnRhaW5lclwifSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcocGxhbmVDb250YWluZXIpXG4gICAgICAgICAgICAuc2V0SGVhZGluZygpXG4gICAgICAgICAgICAuc2V0TmFtZShjcmVhdGVGcmFnbWVudChmcmFnbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuY3JlYXRlU3BhbigpLmFwcGVuZFRleHQocGxhbmUuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIFNldHRpbmdUYWIuY29kZXBvaW50RnJhZ21lbnQoZnJhZ21lbnQsIHBsYW5lLmludGVydmFsKVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIDtcblxuICAgICAgICBjb25zdCBibG9ja3NDb250YWluZXIgPSBwbGFuZUNvbnRhaW5lci5jcmVhdGVEaXYoe2NsczogXCJibG9ja3MtbGlzdFwifSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBwbGFuZS5ibG9ja3MpIHtcbiAgICAgICAgICAgIGF3YWl0IFNldHRpbmdUYWIuYWRkQ2hhcmFjdGVyQmxvY2tGaWx0ZXJUb2dnbGUoYmxvY2tzQ29udGFpbmVyLCB0aGlzLnNldHRpbmdzU3RvcmUsIGJsb2NrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGFkZENoYXJhY3RlckJsb2NrRmlsdGVyVG9nZ2xlKFxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgICAgICBvcHRpb25zOiBTZXR0aW5nc1N0b3JlLFxuICAgICAgICBibG9jazogVW5pY29kZUJsb2NrXG4gICAgKSB7XG4gICAgICAgIC8qIExvdzogdHJ5IHRvIHJlZG8gbW9yZSBlZmZlY3RpdmVseSwgd2UgYWx3YXlzIGdldCBhIHBsYW5lIHdvcnRoIG9mIGJsb2NrcyAqL1xuICAgICAgICBjb25zdCBibG9ja0luY2x1ZGVkID0gYXdhaXQgb3B0aW9ucy5nZXRDaGFyYWN0ZXJCbG9jayhibG9jay5pbnRlcnZhbCk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyKVxuICAgICAgICAgICAgLnNldE5hbWUoYmxvY2suZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAuc2V0RGVzYyhjcmVhdGVGcmFnbWVudChmcmFnbWVudCA9PiBTZXR0aW5nVGFiLmNvZGVwb2ludEZyYWdtZW50KGZyYWdtZW50LCBibG9jay5pbnRlcnZhbCkpKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZShpbnB1dCA9PiBpbnB1dFxuICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShibG9ja0luY2x1ZGVkKVxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IG9wdGlvbnMuc2V0Q2hhcmFjdGVyQmxvY2soYmxvY2suaW50ZXJ2YWwsIHZhbHVlKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgYWRkQ2hhcmFjdGVyQ2F0ZWdvcnlGaWx0ZXJUb2dnbGUoXG4gICAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICAgIG9wdGlvbnM6IFNldHRpbmdzU3RvcmUsXG4gICAgICAgIGNhdGVnb3J5OiBVbmljb2RlR2VuZXJhbENhdGVnb3J5XG4gICAgKSB7XG4gICAgICAgIC8qIExvdzogdHJ5IHRvIHJlZG8gbW9yZSBlZmZlY3RpdmVseSwgd2UgYWx3YXlzIGdldCBhIHBsYW5lIHdvcnRoIG9mIGJsb2NrcyAqL1xuICAgICAgICBjb25zdCBibG9ja0luY2x1ZGVkID0gYXdhaXQgb3B0aW9ucy5nZXRDaGFyYWN0ZXJDYXRlZ29yeShjYXRlZ29yeS5hYmJyZXZpYXRpb24pO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lcilcbiAgICAgICAgICAgIC5zZXROYW1lKGNhdGVnb3J5Lm5hbWUpXG4gICAgICAgICAgICAuc2V0RGVzYyhjYXRlZ29yeS5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoaW5wdXQgPT4gaW5wdXRcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUoYmxvY2tJbmNsdWRlZClcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiBvcHRpb25zLnNldENoYXJhY3RlckNhdGVnb3J5KGNhdGVnb3J5LmFiYnJldmlhdGlvbiwgdmFsdWUpKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb2RlcG9pbnRGcmFnbWVudChwYXJlbnQ6IERvY3VtZW50RnJhZ21lbnQsIGludGVydmFsOiBDb2RlcG9pbnRJbnRlcnZhbCk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgICAgICBwYXJlbnRcbiAgICAgICAgICAgIC5jcmVhdGVTcGFuKHtjbHM6IFtcImNoYXJhY3Rlci1jb2RlcG9pbnRcIiwgXCJtb25vc3BhY2VcIl0sfSlcbiAgICAgICAgICAgIC5zZXRUZXh0KGAke2FzSGV4YWRlY2ltYWwoaW50ZXJ2YWwuc3RhcnQpfe+8jSR7YXNIZXhhZGVjaW1hbChpbnRlcnZhbC5lbmQpfWApO1xuXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG59XG4iXX0=