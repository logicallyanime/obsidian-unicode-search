import { __awaiter } from "tslib";
import { PersistCache } from "../../../libraries/types/persistCache";
import { CURRENT_VERSION } from "../../../libraries/types/savedata/saveData";
import { importData } from "../../../libraries/helpers/importData";
export class RootPluginDataStorage {
    constructor(dataLoader) {
        this.dataLoader = dataLoader;
        this.storedData = new PersistCache(() => importData(dataLoader), (data) => dataLoader.saveData(data));
    }
    isInitialized() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.storedData.get();
            return data.initialized
                && data.version === CURRENT_VERSION
                && data.settings.initialized
                && !data.settings.modified
                && data.unicode.initialized
                && data.usage.initialized;
        });
    }
    setInitialized(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mergeData({
                initialized: value,
            });
        });
    }
    isCurrentVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            const saveDataVersion = (yield this.storedData.get()).version;
            console.info(`Plugin version: ${CURRENT_VERSION}`);
            console.info(`Data version: ${saveDataVersion}`);
            return saveDataVersion === CURRENT_VERSION;
        });
    }
    getUnicode() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.storedData.get()).unicode;
        });
    }
    overwriteUnicode(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedData = yield this.mergeData({
                unicode: data,
            });
            return mergedData.unicode;
        });
    }
    setInitializedUnicode(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getUnicode();
            const mergedData = Object.assign(Object.assign({}, data), { initialized: value });
            yield this.overwriteUnicode(mergedData);
        });
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.storedData.get()).settings;
        });
    }
    overwriteSettings(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedData = yield this.mergeData({
                settings: settings,
            });
            return mergedData.settings;
        });
    }
    setInitializedSettings(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getSettings();
            const mergedData = Object.assign(Object.assign({}, data), { initialized: value });
            yield this.overwriteSettings(mergedData);
        });
    }
    setFilterSatisfied(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getSettings();
            const mergedData = Object.assign(Object.assign({}, data), { modified: !value });
            yield this.overwriteSettings(mergedData);
        });
    }
    getUsage() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.storedData.get()).usage;
        });
    }
    overwriteUsage(usage) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedData = yield this.mergeData({
                usage: usage,
            });
            return mergedData.usage;
        });
    }
    setInitializedUsage(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getUsage();
            const mergedData = Object.assign(Object.assign({}, data), { initialized: value });
            yield this.overwriteUsage(mergedData);
        });
    }
    mergeData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const storedData = yield this.storedData.get();
            const newData = Object.assign(Object.assign(Object.assign({}, storedData), data), { version: data.initialized ? CURRENT_VERSION : storedData.version });
            this.storedData.set(newData);
            return yield this.storedData.persist();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdFBsdWdpbkRhdGFTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vdFBsdWdpbkRhdGFTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGVBQWUsRUFBVyxNQUFNLDRDQUE0QyxDQUFDO0FBRXJGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQU1qRSxNQUFNLE9BQU8scUJBQXFCO0lBSTlCLFlBQ2EsVUFBNEI7UUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFFckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksQ0FDOUIsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUM1QixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FDdEMsQ0FBQztJQUNOLENBQUM7SUFFSyxhQUFhOztZQUNmLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QyxPQUFPLElBQUksQ0FBQyxXQUFXO21CQUNoQixJQUFJLENBQUMsT0FBTyxLQUFLLGVBQWU7bUJBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVzttQkFDekIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7bUJBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVzttQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQzVCO1FBQ0wsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEtBQWM7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsV0FBVyxFQUFFLEtBQUs7YUFDckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUssZ0JBQWdCOztZQUNsQixNQUFNLGVBQWUsR0FB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LENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRS9DLE1BQU0sT0FBTyxpREFDTixVQUFVLEdBQ1YsSUFBSSxLQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQ25FLENBQUM7WUFFRixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxDQUFDO0tBQUE7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGVyc2lzdENhY2hlfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL3R5cGVzL3BlcnNpc3RDYWNoZVwiO1xuaW1wb3J0IHtDVVJSRU5UX1ZFUlNJT04sIFNhdmVEYXRhfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL3R5cGVzL3NhdmVkYXRhL3NhdmVEYXRhXCI7XG5pbXBvcnQge1BsdWdpbkRhdGFMb2FkZXJ9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJpZXMvdHlwZXMvcGx1Z2luRGF0YUxvYWRlclwiO1xuaW1wb3J0IHtpbXBvcnREYXRhfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL2hlbHBlcnMvaW1wb3J0RGF0YVwiO1xuaW1wb3J0IHtSb290RGF0YVN0b3JlfSBmcm9tIFwiLi4vcm9vdERhdGFTdG9yZVwiO1xuaW1wb3J0IHtTZXR0aW5nc0RhdGF9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJpZXMvdHlwZXMvc2F2ZWRhdGEvc2V0dGluZ3NEYXRhXCI7XG5pbXBvcnQge1VzYWdlRGF0YX0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcmllcy90eXBlcy9zYXZlZGF0YS91c2FnZURhdGFcIjtcbmltcG9ydCB7VW5pY29kZURhdGF9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJpZXMvdHlwZXMvc2F2ZWRhdGEvdW5pY29kZURhdGFcIjtcblxuZXhwb3J0IGNsYXNzIFJvb3RQbHVnaW5EYXRhU3RvcmFnZSBpbXBsZW1lbnRzIFJvb3REYXRhU3RvcmUge1xuXG4gICAgcHJpdmF0ZSBzdG9yZWREYXRhOiBQZXJzaXN0Q2FjaGU8U2F2ZURhdGE+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IGRhdGFMb2FkZXI6IFBsdWdpbkRhdGFMb2FkZXIsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3RvcmVkRGF0YSA9IG5ldyBQZXJzaXN0Q2FjaGUoXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnREYXRhKGRhdGFMb2FkZXIpLFxuICAgICAgICAgICAgKGRhdGEpID0+IGRhdGFMb2FkZXIuc2F2ZURhdGEoZGF0YSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBpc0luaXRpYWxpemVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zdG9yZWREYXRhLmdldCgpO1xuICAgICAgICByZXR1cm4gZGF0YS5pbml0aWFsaXplZFxuICAgICAgICAgICAgJiYgZGF0YS52ZXJzaW9uID09PSBDVVJSRU5UX1ZFUlNJT05cbiAgICAgICAgICAgICYmIGRhdGEuc2V0dGluZ3MuaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICYmICFkYXRhLnNldHRpbmdzLm1vZGlmaWVkXG4gICAgICAgICAgICAmJiBkYXRhLnVuaWNvZGUuaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICYmIGRhdGEudXNhZ2UuaW5pdGlhbGl6ZWRcbiAgICAgICAgO1xuICAgIH1cblxuICAgIGFzeW5jIHNldEluaXRpYWxpemVkKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMubWVyZ2VEYXRhKHtcbiAgICAgICAgICAgIGluaXRpYWxpemVkOiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNDdXJyZW50VmVyc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3Qgc2F2ZURhdGFWZXJzaW9uID0gKGF3YWl0IHRoaXMuc3RvcmVkRGF0YS5nZXQoKSkudmVyc2lvbjtcbiAgICAgICAgY29uc29sZS5pbmZvKGBQbHVnaW4gdmVyc2lvbjogJHtDVVJSRU5UX1ZFUlNJT059YCk7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhgRGF0YSB2ZXJzaW9uOiAke3NhdmVEYXRhVmVyc2lvbn1gKTtcbiAgICAgICAgcmV0dXJuIHNhdmVEYXRhVmVyc2lvbiA9PT0gQ1VSUkVOVF9WRVJTSU9OO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFVuaWNvZGUoKTogUHJvbWlzZTxVbmljb2RlRGF0YT4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuc3RvcmVkRGF0YS5nZXQoKSkudW5pY29kZTtcbiAgICB9XG5cbiAgICBhc3luYyBvdmVyd3JpdGVVbmljb2RlKGRhdGE6IFVuaWNvZGVEYXRhKTogUHJvbWlzZTxVbmljb2RlRGF0YT4ge1xuICAgICAgICBjb25zdCBtZXJnZWREYXRhID0gYXdhaXQgdGhpcy5tZXJnZURhdGEoe1xuICAgICAgICAgICAgdW5pY29kZTogZGF0YSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1lcmdlZERhdGEudW5pY29kZTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRJbml0aWFsaXplZFVuaWNvZGUodmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0VW5pY29kZSgpXG4gICAgICAgIGNvbnN0IG1lcmdlZERhdGE6IFVuaWNvZGVEYXRhID0ge1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGluaXRpYWxpemVkOiB2YWx1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCB0aGlzLm92ZXJ3cml0ZVVuaWNvZGUobWVyZ2VkRGF0YSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2V0dGluZ3MoKTogUHJvbWlzZTxTZXR0aW5nc0RhdGE+IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLnN0b3JlZERhdGEuZ2V0KCkpLnNldHRpbmdzO1xuICAgIH1cblxuICAgIGFzeW5jIG92ZXJ3cml0ZVNldHRpbmdzKHNldHRpbmdzOiBTZXR0aW5nc0RhdGEpOiBQcm9taXNlPFNldHRpbmdzRGF0YT4ge1xuICAgICAgICBjb25zdCBtZXJnZWREYXRhID0gYXdhaXQgdGhpcy5tZXJnZURhdGEoe1xuICAgICAgICAgICAgc2V0dGluZ3M6IHNldHRpbmdzLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWVyZ2VkRGF0YS5zZXR0aW5ncztcbiAgICB9XG5cbiAgICBhc3luYyBzZXRJbml0aWFsaXplZFNldHRpbmdzKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldFNldHRpbmdzKCk7XG4gICAgICAgIGNvbnN0IG1lcmdlZERhdGE6IFNldHRpbmdzRGF0YSA9IHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBpbml0aWFsaXplZDogdmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5vdmVyd3JpdGVTZXR0aW5ncyhtZXJnZWREYXRhKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRGaWx0ZXJTYXRpc2ZpZWQodmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgY29uc3QgbWVyZ2VkRGF0YTogU2V0dGluZ3NEYXRhID0ge1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIG1vZGlmaWVkOiAhdmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5vdmVyd3JpdGVTZXR0aW5ncyhtZXJnZWREYXRhKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRVc2FnZSgpOiBQcm9taXNlPFVzYWdlRGF0YT4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuc3RvcmVkRGF0YS5nZXQoKSkudXNhZ2U7XG4gICAgfVxuXG4gICAgYXN5bmMgb3ZlcndyaXRlVXNhZ2UodXNhZ2U6IFVzYWdlRGF0YSk6IFByb21pc2U8VXNhZ2VEYXRhPiB7XG4gICAgICAgIGNvbnN0IG1lcmdlZERhdGEgPSBhd2FpdCB0aGlzLm1lcmdlRGF0YSh7XG4gICAgICAgICAgICB1c2FnZTogdXNhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtZXJnZWREYXRhLnVzYWdlO1xuICAgIH1cblxuICAgIGFzeW5jIHNldEluaXRpYWxpemVkVXNhZ2UodmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0VXNhZ2UoKTtcbiAgICAgICAgY29uc3QgbWVyZ2VkRGF0YTogVXNhZ2VEYXRhID0ge1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGluaXRpYWxpemVkOiB2YWx1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCB0aGlzLm92ZXJ3cml0ZVVzYWdlKG1lcmdlZERhdGEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbWVyZ2VEYXRhKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGE+KTogUHJvbWlzZTxTYXZlRGF0YT4ge1xuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gYXdhaXQgdGhpcy5zdG9yZWREYXRhLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGE6IFNhdmVEYXRhID0ge1xuICAgICAgICAgICAgLi4uc3RvcmVkRGF0YSxcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICB2ZXJzaW9uOiBkYXRhLmluaXRpYWxpemVkID8gQ1VSUkVOVF9WRVJTSU9OIDogc3RvcmVkRGF0YS52ZXJzaW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RvcmVkRGF0YS5zZXQobmV3RGF0YSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JlZERhdGEucGVyc2lzdCgpO1xuICAgIH1cbn1cbiJdfQ==