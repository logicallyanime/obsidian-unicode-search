import { __awaiter } from "tslib";
import { Plugin } from "obsidian";
import { UcdUserFilterDownloader } from "./service/impl/ucdUserFilterDownloader";
import { RootPluginDataStorage } from "./service/impl/rootPluginDataStorage";
import { CodepointStorage } from "./service/impl/codepointStorage";
import { SettingsStorage } from "./service/impl/settingsStorage";
import { SettingTab } from "./components/settingTab";
import { UsageCharacterService } from "./service/impl/usageCharacterService";
import { CodepointUsageStorage } from "./service/impl/codepointUsageStorage";
import { FuzzySearchModal } from "./components/fuzzySearchModal";
import { NewDataInitializer } from "./service/impl/newDataInitializer";
/* Used by Obsidian */
// noinspection JSUnusedGlobalSymbols
export default class UnicodeSearchPlugin extends Plugin {
    constructor(app, manifest) {
        super(app, manifest);
    }
    onload() {
        const _super = Object.create(null, {
            addCommand: { get: () => super.addCommand }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.group("Loading Unicode Search plugin");
            console.time("Unicode Search load time");
            console.info("Creating services");
            const dataStore = new RootPluginDataStorage(this);
            const codepointStore = new CodepointStorage(dataStore);
            const usageStore = new CodepointUsageStorage(dataStore);
            const characterService = new UsageCharacterService(codepointStore, usageStore);
            const optionsStore = new SettingsStorage(dataStore);
            const downloader = new UcdUserFilterDownloader(optionsStore);
            const initializer = new NewDataInitializer(dataStore, codepointStore, downloader);
            yield initializer.initializeData();
            console.info("Adding UI elements");
            _super.addCommand.call(this, {
                id: "search-unicode-chars",
                name: "Search Unicode characters",
                editorCallback: editor => {
                    const modal = new FuzzySearchModal(app, editor, characterService);
                    modal.open();
                    return true;
                },
            });
            this.addSettingTab(new SettingTab(this.app, this, characterService, optionsStore, initializer));
            console.timeEnd("Unicode Search load time");
            console.groupEnd();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBTSxNQUFNLEVBQWlCLE1BQU0sVUFBVSxDQUFDO0FBQ3JELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFckUsc0JBQXNCO0FBQ3RCLHFDQUFxQztBQUNyQyxNQUFNLENBQUMsT0FBTyxPQUFPLG1CQUFvQixTQUFRLE1BQU07SUFFbkQsWUFDSSxHQUFRLEVBQ1IsUUFBd0I7UUFFeEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRXFCLE1BQU07Ozs7O1lBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFFekMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBRWxDLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RCxNQUFNLFVBQVUsR0FBRyxJQUFJLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDL0UsTUFBTSxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEQsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM3RCxNQUFNLFdBQVcsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFbEYsTUFBTSxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRW5DLE9BQU0sVUFBVSxZQUFDO2dCQUNiLEVBQUUsRUFBRSxzQkFBc0I7Z0JBQzFCLElBQUksRUFBRSwyQkFBMkI7Z0JBRWpDLGNBQWMsRUFBRSxNQUFNLENBQUMsRUFBRTtvQkFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDOUIsR0FBRyxFQUNILE1BQU0sRUFDTixnQkFBZ0IsQ0FDbkIsQ0FBQztvQkFDRixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2IsT0FBTyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSixFQUFFO1lBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFVBQVUsQ0FDN0IsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixXQUFXLENBQ2QsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwLCBQbHVnaW4sIFBsdWdpbk1hbmlmZXN0fSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7VWNkVXNlckZpbHRlckRvd25sb2FkZXJ9IGZyb20gXCIuL3NlcnZpY2UvaW1wbC91Y2RVc2VyRmlsdGVyRG93bmxvYWRlclwiO1xuaW1wb3J0IHtSb290UGx1Z2luRGF0YVN0b3JhZ2V9IGZyb20gXCIuL3NlcnZpY2UvaW1wbC9yb290UGx1Z2luRGF0YVN0b3JhZ2VcIjtcbmltcG9ydCB7Q29kZXBvaW50U3RvcmFnZX0gZnJvbSBcIi4vc2VydmljZS9pbXBsL2NvZGVwb2ludFN0b3JhZ2VcIjtcbmltcG9ydCB7U2V0dGluZ3NTdG9yYWdlfSBmcm9tIFwiLi9zZXJ2aWNlL2ltcGwvc2V0dGluZ3NTdG9yYWdlXCI7XG5pbXBvcnQge1NldHRpbmdUYWJ9IGZyb20gXCIuL2NvbXBvbmVudHMvc2V0dGluZ1RhYlwiO1xuaW1wb3J0IHtVc2FnZUNoYXJhY3RlclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2UvaW1wbC91c2FnZUNoYXJhY3RlclNlcnZpY2VcIjtcbmltcG9ydCB7Q29kZXBvaW50VXNhZ2VTdG9yYWdlfSBmcm9tIFwiLi9zZXJ2aWNlL2ltcGwvY29kZXBvaW50VXNhZ2VTdG9yYWdlXCI7XG5cbmltcG9ydCB7RnV6enlTZWFyY2hNb2RhbH0gZnJvbSBcIi4vY29tcG9uZW50cy9mdXp6eVNlYXJjaE1vZGFsXCI7XG5pbXBvcnQge05ld0RhdGFJbml0aWFsaXplcn0gZnJvbSBcIi4vc2VydmljZS9pbXBsL25ld0RhdGFJbml0aWFsaXplclwiO1xuXG4vKiBVc2VkIGJ5IE9ic2lkaWFuICovXG4vLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmljb2RlU2VhcmNoUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgYXBwOiBBcHAsXG4gICAgICAgIG1hbmlmZXN0OiBQbHVnaW5NYW5pZmVzdCxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoYXBwLCBtYW5pZmVzdCk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc29sZS5ncm91cChcIkxvYWRpbmcgVW5pY29kZSBTZWFyY2ggcGx1Z2luXCIpO1xuICAgICAgICBjb25zb2xlLnRpbWUoXCJVbmljb2RlIFNlYXJjaCBsb2FkIHRpbWVcIik7XG5cbiAgICAgICAgY29uc29sZS5pbmZvKFwiQ3JlYXRpbmcgc2VydmljZXNcIik7XG5cbiAgICAgICAgY29uc3QgZGF0YVN0b3JlID0gbmV3IFJvb3RQbHVnaW5EYXRhU3RvcmFnZSh0aGlzKTtcbiAgICAgICAgY29uc3QgY29kZXBvaW50U3RvcmUgPSBuZXcgQ29kZXBvaW50U3RvcmFnZShkYXRhU3RvcmUpO1xuICAgICAgICBjb25zdCB1c2FnZVN0b3JlID0gbmV3IENvZGVwb2ludFVzYWdlU3RvcmFnZShkYXRhU3RvcmUpO1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXJTZXJ2aWNlID0gbmV3IFVzYWdlQ2hhcmFjdGVyU2VydmljZShjb2RlcG9pbnRTdG9yZSwgdXNhZ2VTdG9yZSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNTdG9yZSA9IG5ldyBTZXR0aW5nc1N0b3JhZ2UoZGF0YVN0b3JlKTtcbiAgICAgICAgY29uc3QgZG93bmxvYWRlciA9IG5ldyBVY2RVc2VyRmlsdGVyRG93bmxvYWRlcihvcHRpb25zU3RvcmUpO1xuICAgICAgICBjb25zdCBpbml0aWFsaXplciA9IG5ldyBOZXdEYXRhSW5pdGlhbGl6ZXIoZGF0YVN0b3JlLCBjb2RlcG9pbnRTdG9yZSwgZG93bmxvYWRlcik7XG5cbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6ZXIuaW5pdGlhbGl6ZURhdGEoKTtcblxuICAgICAgICBjb25zb2xlLmluZm8oXCJBZGRpbmcgVUkgZWxlbWVudHNcIik7XG5cbiAgICAgICAgc3VwZXIuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJzZWFyY2gtdW5pY29kZS1jaGFyc1wiLFxuICAgICAgICAgICAgbmFtZTogXCJTZWFyY2ggVW5pY29kZSBjaGFyYWN0ZXJzXCIsXG5cbiAgICAgICAgICAgIGVkaXRvckNhbGxiYWNrOiBlZGl0b3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IEZ1enp5U2VhcmNoTW9kYWwoXG4gICAgICAgICAgICAgICAgICAgIGFwcCxcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTZXR0aW5nVGFiKFxuICAgICAgICAgICAgdGhpcy5hcHAsXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgY2hhcmFjdGVyU2VydmljZSxcbiAgICAgICAgICAgIG9wdGlvbnNTdG9yZSxcbiAgICAgICAgICAgIGluaXRpYWxpemVyLFxuICAgICAgICApKTtcblxuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJVbmljb2RlIFNlYXJjaCBsb2FkIHRpbWVcIik7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbn1cbiJdfQ==