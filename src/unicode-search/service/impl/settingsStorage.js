import { __awaiter } from "tslib";
import { UnicodeSearchError } from "../../errors/unicodeSearchError";
import { intervalsEqual } from "../../../libraries/helpers/intervalsEqual";
import { intervalWithin } from "../../../libraries/helpers/intervalWithin";
export class SettingsStorage {
    constructor(store) {
        this.store = store;
    }
    getFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.store.getSettings()).filter;
        });
    }
    getCharacterBlock(block) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getBlockFilters())
                .some(blockFilter => intervalsEqual(blockFilter, block) && blockFilter.included);
        });
    }
    setCharacterBlock(block, set) {
        return __awaiter(this, void 0, void 0, function* () {
            const settings = yield this.store.getSettings();
            const planeIndex = settings.filter.planes.findIndex(pf => intervalWithin(pf, block));
            if (planeIndex < 0) {
                throw new UnicodeSearchError(`Block doesn't belong to any codepoint plane. ${block}`);
            }
            const blockIndex = settings.filter.planes[planeIndex].blocks.findIndex(bf => intervalsEqual(bf, block));
            if (blockIndex < 0) {
                throw new UnicodeSearchError(`Block doesn't exist within a plane. ${block}`);
            }
            settings.filter.planes[planeIndex].blocks[blockIndex].included = set;
            settings.modified = true;
            yield this.store.overwriteSettings(settings);
        });
    }
    getCharacterCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getCategoryFilters())
                .some(filter => filter.abbreviation === category && filter.included);
        });
    }
    setCharacterCategory(category, set) {
        return __awaiter(this, void 0, void 0, function* () {
            const settings = yield this.store.getSettings();
            const groupIndex = settings.filter.categoryGroups.findIndex(gf => gf.abbreviation === category[0]);
            if (groupIndex < 0) {
                throw new UnicodeSearchError(`Codepoint category group doesn't exist. ${category}: ${category[0]}`);
            }
            const categoryIndex = settings.filter.categoryGroups[groupIndex].categories.findIndex(cf => cf.abbreviation === category);
            if (categoryIndex < 0) {
                throw new UnicodeSearchError(`Block doesn't exist within a plane. ${category}`);
            }
            settings.filter.categoryGroups[groupIndex].categories[categoryIndex].included = set;
            settings.modified = true;
            yield this.store.overwriteSettings(settings);
        });
    }
    getBlockFilters() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getFilter()).planes
                .flatMap(plane => plane.blocks);
        });
    }
    getCategoryFilters() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getFilter()).categoryGroups
                .flatMap(group => group.categories);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3NTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBR3pFLE1BQU0sT0FBTyxlQUFlO0lBRXhCLFlBQTZCLEtBQW9CO1FBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7SUFDakQsQ0FBQztJQUVLLFNBQVM7O1lBQ1gsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUNsRCxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxLQUF3Qjs7WUFDNUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RixDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxLQUF3QixFQUFFLEdBQVk7O1lBQzFELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFckYsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixNQUFNLElBQUksa0JBQWtCLENBQUMsZ0RBQWdELEtBQUssRUFBRSxDQUFDLENBQUM7YUFDekY7WUFFRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRXhHLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRTtnQkFDaEIsTUFBTSxJQUFJLGtCQUFrQixDQUFDLHVDQUF1QyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ2hGO1lBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDckUsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFekIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLFFBQStCOztZQUN0RCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLFFBQStCLEVBQUUsR0FBWTs7WUFDcEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkcsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixNQUFNLElBQUksa0JBQWtCLENBQUMsMkNBQTJDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZHO1lBRUQsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDLENBQUM7WUFFMUgsSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixNQUFNLElBQUksa0JBQWtCLENBQUMsdUNBQXVDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDbkY7WUFFRCxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwRixRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUV6QixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsQ0FBQztLQUFBO0lBRWEsZUFBZTs7WUFDekIsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTTtpQkFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVhLGtCQUFrQjs7WUFDNUIsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsY0FBYztpQkFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FBQTtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb290RGF0YVN0b3JlfSBmcm9tIFwiLi4vcm9vdERhdGFTdG9yZVwiO1xuaW1wb3J0IHtTZXR0aW5nc1N0b3JlfSBmcm9tIFwiLi4vc2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtCbG9ja0ZpbHRlciwgQ2F0ZWdvcnlGaWx0ZXIsIEZpbHRlckRhdGF9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJpZXMvdHlwZXMvc2F2ZWRhdGEvZmlsdGVyRGF0YVwiO1xuaW1wb3J0IHtVbmljb2RlU2VhcmNoRXJyb3J9IGZyb20gXCIuLi8uLi9lcnJvcnMvdW5pY29kZVNlYXJjaEVycm9yXCI7XG5pbXBvcnQge0NvZGVwb2ludEludGVydmFsfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL3R5cGVzL2NvZGVwb2ludC9jb2RlcG9pbnRJbnRlcnZhbFwiO1xuaW1wb3J0IHtpbnRlcnZhbHNFcXVhbH0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcmllcy9oZWxwZXJzL2ludGVydmFsc0VxdWFsXCI7XG5pbXBvcnQge2ludGVydmFsV2l0aGlufSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL2hlbHBlcnMvaW50ZXJ2YWxXaXRoaW5cIjtcbmltcG9ydCB7Q2hhcmFjdGVyQ2F0ZWdvcnlUeXBlfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL2RhdGEvY2hhcmFjdGVyQ2F0ZWdvcnlcIjtcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU3RvcmFnZSBpbXBsZW1lbnRzIFNldHRpbmdzU3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdG9yZTogUm9vdERhdGFTdG9yZSkge1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZpbHRlcigpOiBQcm9taXNlPEZpbHRlckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLnN0b3JlLmdldFNldHRpbmdzKCkpLmZpbHRlclxuICAgIH1cblxuICAgIGFzeW5jIGdldENoYXJhY3RlckJsb2NrKGJsb2NrOiBDb2RlcG9pbnRJbnRlcnZhbCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuZ2V0QmxvY2tGaWx0ZXJzKCkpXG4gICAgICAgICAgICAuc29tZShibG9ja0ZpbHRlciA9PiBpbnRlcnZhbHNFcXVhbChibG9ja0ZpbHRlciwgYmxvY2spICYmIGJsb2NrRmlsdGVyLmluY2x1ZGVkKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRDaGFyYWN0ZXJCbG9jayhibG9jazogQ29kZXBvaW50SW50ZXJ2YWwsIHNldDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHRoaXMuc3RvcmUuZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgY29uc3QgcGxhbmVJbmRleCA9IHNldHRpbmdzLmZpbHRlci5wbGFuZXMuZmluZEluZGV4KHBmID0+IGludGVydmFsV2l0aGluKHBmLCBibG9jaykpO1xuXG4gICAgICAgIGlmIChwbGFuZUluZGV4IDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuaWNvZGVTZWFyY2hFcnJvcihgQmxvY2sgZG9lc24ndCBiZWxvbmcgdG8gYW55IGNvZGVwb2ludCBwbGFuZS4gJHtibG9ja31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJsb2NrSW5kZXggPSBzZXR0aW5ncy5maWx0ZXIucGxhbmVzW3BsYW5lSW5kZXhdLmJsb2Nrcy5maW5kSW5kZXgoYmYgPT4gaW50ZXJ2YWxzRXF1YWwoYmYsIGJsb2NrKSk7XG5cbiAgICAgICAgaWYgKGJsb2NrSW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5pY29kZVNlYXJjaEVycm9yKGBCbG9jayBkb2Vzbid0IGV4aXN0IHdpdGhpbiBhIHBsYW5lLiAke2Jsb2NrfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGluZ3MuZmlsdGVyLnBsYW5lc1twbGFuZUluZGV4XS5ibG9ja3NbYmxvY2tJbmRleF0uaW5jbHVkZWQgPSBzZXQ7XG4gICAgICAgIHNldHRpbmdzLm1vZGlmaWVkID0gdHJ1ZTtcblxuICAgICAgICBhd2FpdCB0aGlzLnN0b3JlLm92ZXJ3cml0ZVNldHRpbmdzKHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDaGFyYWN0ZXJDYXRlZ29yeShjYXRlZ29yeTogQ2hhcmFjdGVyQ2F0ZWdvcnlUeXBlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5nZXRDYXRlZ29yeUZpbHRlcnMoKSlcbiAgICAgICAgICAgIC5zb21lKGZpbHRlciA9PiBmaWx0ZXIuYWJicmV2aWF0aW9uID09PSBjYXRlZ29yeSAmJiBmaWx0ZXIuaW5jbHVkZWQpO1xuICAgIH1cblxuICAgIGFzeW5jIHNldENoYXJhY3RlckNhdGVnb3J5KGNhdGVnb3J5OiBDaGFyYWN0ZXJDYXRlZ29yeVR5cGUsIHNldDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHRoaXMuc3RvcmUuZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgY29uc3QgZ3JvdXBJbmRleCA9IHNldHRpbmdzLmZpbHRlci5jYXRlZ29yeUdyb3Vwcy5maW5kSW5kZXgoZ2YgPT4gZ2YuYWJicmV2aWF0aW9uID09PSBjYXRlZ29yeVswXSk7XG5cbiAgICAgICAgaWYgKGdyb3VwSW5kZXggPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5pY29kZVNlYXJjaEVycm9yKGBDb2RlcG9pbnQgY2F0ZWdvcnkgZ3JvdXAgZG9lc24ndCBleGlzdC4gJHtjYXRlZ29yeX06ICR7Y2F0ZWdvcnlbMF19YCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gc2V0dGluZ3MuZmlsdGVyLmNhdGVnb3J5R3JvdXBzW2dyb3VwSW5kZXhdLmNhdGVnb3JpZXMuZmluZEluZGV4KGNmID0+IGNmLmFiYnJldmlhdGlvbiA9PT0gY2F0ZWdvcnkpO1xuXG4gICAgICAgIGlmIChjYXRlZ29yeUluZGV4IDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuaWNvZGVTZWFyY2hFcnJvcihgQmxvY2sgZG9lc24ndCBleGlzdCB3aXRoaW4gYSBwbGFuZS4gJHtjYXRlZ29yeX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRpbmdzLmZpbHRlci5jYXRlZ29yeUdyb3Vwc1tncm91cEluZGV4XS5jYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhdLmluY2x1ZGVkID0gc2V0O1xuICAgICAgICBzZXR0aW5ncy5tb2RpZmllZCA9IHRydWU7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yZS5vdmVyd3JpdGVTZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRCbG9ja0ZpbHRlcnMoKTogUHJvbWlzZTxCbG9ja0ZpbHRlcltdPiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5nZXRGaWx0ZXIoKSkucGxhbmVzXG4gICAgICAgICAgICAuZmxhdE1hcChwbGFuZSA9PiBwbGFuZS5ibG9ja3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0Q2F0ZWdvcnlGaWx0ZXJzKCk6IFByb21pc2U8Q2F0ZWdvcnlGaWx0ZXJbXT4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuZ2V0RmlsdGVyKCkpLmNhdGVnb3J5R3JvdXBzXG4gICAgICAgICAgICAuZmxhdE1hcChncm91cCA9PiBncm91cC5jYXRlZ29yaWVzKTtcbiAgICB9XG59XG4iXX0=