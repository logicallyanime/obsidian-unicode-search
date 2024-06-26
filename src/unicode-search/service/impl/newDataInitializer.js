import { __awaiter } from "tslib";
import { initializationData } from "../../../libraries/data/initializationData";
export class NewDataInitializer {
    constructor(dataStore, characterDataStore, ucdService) {
        this.dataStore = dataStore;
        this.characterDataStore = characterDataStore;
        this.ucdService = ucdService;
    }
    initializeData() {
        return __awaiter(this, void 0, void 0, function* () {
            console.group("Initializing local data");
            yield this.initializeAll();
            console.groupEnd();
        });
    }
    initializeAll() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.dataStore.isInitialized()) {
                console.info("Plugin data already initialized");
                return;
            }
            if (!(yield this.dataStore.isCurrentVersion())) {
                console.log("Plugin and Data version mismatch, reinitializing");
                yield this.dataStore.setInitialized(false);
                yield this.dataStore.setInitializedSettings(false);
                yield this.dataStore.setInitializedUnicode(false);
                yield this.dataStore.setInitializedUsage(false);
            }
            yield this.initializeSettings();
            yield this.initializeUnicode();
            yield this.initializeUsage();
            console.info("Flagging local data as initialized");
            yield this.dataStore.setInitialized(true);
        });
    }
    initializeUsage() {
        return __awaiter(this, void 0, void 0, function* () {
            const usageInitialized = (yield this.dataStore.getUsage()).initialized;
            if (usageInitialized) {
                console.info("Usage data already initialized");
                return;
            }
            console.info("Usage initialization");
            yield this.dataStore.overwriteUsage(Object.assign(Object.assign({}, initializationData().usage), { initialized: true }));
        });
    }
    initializeUnicode() {
        return __awaiter(this, void 0, void 0, function* () {
            const charactersInitialized = (yield this.dataStore.getUnicode()).initialized;
            const filterModified = (yield this.dataStore.getSettings()).modified;
            if (charactersInitialized && !filterModified) {
                console.info("Unicode code point data already initialized");
                return;
            }
            console.info(filterModified ? "Downloading UCD, character filter changed." : "Downloading UCD");
            const data = yield this.ucdService.download();
            console.info("Saving Unicode code point data");
            yield this.characterDataStore.initializeCodepoints(data);
            yield this.dataStore.setFilterSatisfied(true);
        });
    }
    initializeSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const settingsInitialized = (yield this.dataStore.getSettings()).initialized;
            if (settingsInitialized) {
                console.info("Settings data already initialized");
                return;
            }
            console.info("Settings initialization");
            yield this.dataStore.overwriteSettings(Object.assign(Object.assign({}, initializationData().settings), { initialized: true }));
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3RGF0YUluaXRpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3RGF0YUluaXRpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUU5RSxNQUFNLE9BQU8sa0JBQWtCO0lBQzNCLFlBQ3FCLFNBQXdCLEVBQ3hCLGtCQUFrQyxFQUNsQyxVQUErQjtRQUYvQixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBZ0I7UUFDbEMsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7SUFFcEQsQ0FBQztJQUVLLGNBQWM7O1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRWEsYUFBYTs7WUFDdkIsSUFBSSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDaEQsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLENBQUEsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUEsRUFBRTtnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFBO2dCQUMvRCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25EO1lBRUQsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNoQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQy9CLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUNuRCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVhLGVBQWU7O1lBQ3pCLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFFdkUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPO2FBQ1Y7WUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFckMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsaUNBQzVCLGtCQUFrQixFQUFFLENBQUMsS0FBSyxLQUM3QixXQUFXLEVBQUUsSUFBSSxJQUNuQixDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRWEsaUJBQWlCOztZQUMzQixNQUFNLHFCQUFxQixHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzlFLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBRXJFLElBQUkscUJBQXFCLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQztnQkFDNUQsT0FBTzthQUNWO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRWhHLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUU5QyxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFFL0MsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVhLGtCQUFrQjs7WUFDNUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUU3RSxJQUFJLG1CQUFtQixFQUFFO2dCQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Z0JBQ2xELE9BQU87YUFDVjtZQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUV4QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLGlDQUMvQixrQkFBa0IsRUFBRSxDQUFDLFFBQVEsS0FDaEMsV0FBVyxFQUFFLElBQUksSUFDbkIsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb290RGF0YVN0b3JlfSBmcm9tIFwiLi4vcm9vdERhdGFTdG9yZVwiO1xuaW1wb3J0IHtDb2RlcG9pbnRTdG9yZX0gZnJvbSBcIi4uL2NvZGVQb2ludFN0b3JlXCI7XG5pbXBvcnQge0NoYXJhY3RlckRvd25sb2FkZXJ9IGZyb20gXCIuLi9jaGFyYWN0ZXJEb3dubG9hZGVyXCI7XG5pbXBvcnQge0RhdGFJbml0aWFsaXplcn0gZnJvbSBcIi4uL2RhdGFJbml0aWFsaXplclwiO1xuaW1wb3J0IHtpbml0aWFsaXphdGlvbkRhdGF9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJpZXMvZGF0YS9pbml0aWFsaXphdGlvbkRhdGFcIjtcblxuZXhwb3J0IGNsYXNzIE5ld0RhdGFJbml0aWFsaXplciBpbXBsZW1lbnRzIERhdGFJbml0aWFsaXplciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YVN0b3JlOiBSb290RGF0YVN0b3JlLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNoYXJhY3RlckRhdGFTdG9yZTogQ29kZXBvaW50U3RvcmUsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdWNkU2VydmljZTogQ2hhcmFjdGVyRG93bmxvYWRlclxuICAgICkge1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRpYWxpemVEYXRhKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zb2xlLmdyb3VwKFwiSW5pdGlhbGl6aW5nIGxvY2FsIGRhdGFcIik7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUFsbCgpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0aWFsaXplQWxsKCkge1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5kYXRhU3RvcmUuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJQbHVnaW4gZGF0YSBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhd2FpdCB0aGlzLmRhdGFTdG9yZS5pc0N1cnJlbnRWZXJzaW9uKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGx1Z2luIGFuZCBEYXRhIHZlcnNpb24gbWlzbWF0Y2gsIHJlaW5pdGlhbGl6aW5nXCIpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRhdGFTdG9yZS5zZXRJbml0aWFsaXplZChmYWxzZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRhdGFTdG9yZS5zZXRJbml0aWFsaXplZFNldHRpbmdzKGZhbHNlKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGF0YVN0b3JlLnNldEluaXRpYWxpemVkVW5pY29kZShmYWxzZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRhdGFTdG9yZS5zZXRJbml0aWFsaXplZFVzYWdlKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZVNldHRpbmdzKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZVVuaWNvZGUoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplVXNhZ2UoKTtcblxuICAgICAgICBjb25zb2xlLmluZm8oXCJGbGFnZ2luZyBsb2NhbCBkYXRhIGFzIGluaXRpYWxpemVkXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLmRhdGFTdG9yZS5zZXRJbml0aWFsaXplZCh0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGluaXRpYWxpemVVc2FnZSgpIHtcbiAgICAgICAgY29uc3QgdXNhZ2VJbml0aWFsaXplZCA9IChhd2FpdCB0aGlzLmRhdGFTdG9yZS5nZXRVc2FnZSgpKS5pbml0aWFsaXplZDtcblxuICAgICAgICBpZiAodXNhZ2VJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVXNhZ2UgZGF0YSBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKFwiVXNhZ2UgaW5pdGlhbGl6YXRpb25cIik7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kYXRhU3RvcmUub3ZlcndyaXRlVXNhZ2Uoe1xuICAgICAgICAgICAgLi4uaW5pdGlhbGl6YXRpb25EYXRhKCkudXNhZ2UsXG4gICAgICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0aWFsaXplVW5pY29kZSgpIHtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyc0luaXRpYWxpemVkID0gKGF3YWl0IHRoaXMuZGF0YVN0b3JlLmdldFVuaWNvZGUoKSkuaW5pdGlhbGl6ZWQ7XG4gICAgICAgIGNvbnN0IGZpbHRlck1vZGlmaWVkID0gKGF3YWl0IHRoaXMuZGF0YVN0b3JlLmdldFNldHRpbmdzKCkpLm1vZGlmaWVkO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXJzSW5pdGlhbGl6ZWQgJiYgIWZpbHRlck1vZGlmaWVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJVbmljb2RlIGNvZGUgcG9pbnQgZGF0YSBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKGZpbHRlck1vZGlmaWVkID8gXCJEb3dubG9hZGluZyBVQ0QsIGNoYXJhY3RlciBmaWx0ZXIgY2hhbmdlZC5cIiA6IFwiRG93bmxvYWRpbmcgVUNEXCIpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnVjZFNlcnZpY2UuZG93bmxvYWQoKTtcblxuICAgICAgICBjb25zb2xlLmluZm8oXCJTYXZpbmcgVW5pY29kZSBjb2RlIHBvaW50IGRhdGFcIik7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5jaGFyYWN0ZXJEYXRhU3RvcmUuaW5pdGlhbGl6ZUNvZGVwb2ludHMoZGF0YSk7XG4gICAgICAgIGF3YWl0IHRoaXMuZGF0YVN0b3JlLnNldEZpbHRlclNhdGlzZmllZCh0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGluaXRpYWxpemVTZXR0aW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NJbml0aWFsaXplZCA9IChhd2FpdCB0aGlzLmRhdGFTdG9yZS5nZXRTZXR0aW5ncygpKS5pbml0aWFsaXplZDtcblxuICAgICAgICBpZiAoc2V0dGluZ3NJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiU2V0dGluZ3MgZGF0YSBhbHJlYWR5IGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKFwiU2V0dGluZ3MgaW5pdGlhbGl6YXRpb25cIik7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kYXRhU3RvcmUub3ZlcndyaXRlU2V0dGluZ3Moe1xuICAgICAgICAgICAgLi4uaW5pdGlhbGl6YXRpb25EYXRhKCkuc2V0dGluZ3MsXG4gICAgICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19