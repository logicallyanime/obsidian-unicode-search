import { __awaiter } from "tslib";
import { request } from "obsidian";
import { parse } from "papaparse";
import { UnicodeSearchError } from "../../errors/unicodeSearchError";
import { mergeIntervals } from "../../../libraries/helpers/mergeIntervals";
import { codepointIn } from "../../../libraries/helpers/codePointIn";
export class UcdUserFilterDownloader {
    constructor(settingsStore) {
        this.settingsStore = settingsStore;
        this.config = {
            delimiter: ";",
            header: false,
            transformHeader: undefined,
            dynamicTyping: false,
            fastMode: true,
        };
    }
    download() {
        return __awaiter(this, void 0, void 0, function* () {
            const unicodeVersion = "14.0.0";
            const unicodeData = yield request(`https://www.unicode.org/Public/${unicodeVersion}/ucd/UnicodeData.txt`);
            const parsed = yield this.transformToCharacters(unicodeData);
            const filtered = yield this.filterCharacters(parsed);
            return filtered.map(intoUnicodeCodepoint);
        });
    }
    filterCharacters(parsed) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = yield this.settingsStore.getFilter();
            const includedBlocks = mergeIntervals(filter.planes
                .flatMap(p => p.blocks)
                .filter(b => b.included));
            const includedCategories = filter.categoryGroups
                .flatMap(p => p.categories)
                .filter(c => c.included)
                .map(c => c.abbreviation);
            return parsed.filter(char => !containsNullValues(char)
                && includedInBlocks(char, includedBlocks)
                && categoryIncluded(char, includedCategories));
        });
    }
    transformToCharacters(csvString) {
        return new Promise((resolve, reject) => {
            const completeFn = (results) => {
                if (results.errors.length !== 0) {
                    reject(new UnicodeSearchError("Error while parsing data from Unicode Character Database"));
                }
                const parsedCharacters = results.data
                    .map((row) => ({
                    codepoint: parseInt(row[0], 16),
                    name: row[1],
                    category: row[2],
                }));
                resolve(parsedCharacters);
            };
            const configuration = Object.assign(Object.assign({}, this.config), { worker: true, complete: results => completeFn(results) });
            parse(csvString, configuration);
        });
    }
}
function containsNullValues(char) {
    return char == null
        || char.name == null
        || char.codepoint == null
        || char.category == null;
}
function includedInBlocks(character, includedBlocks) {
    return includedBlocks.some((block) => codepointIn(character.codepoint, block));
}
function categoryIncluded(character, includedCategories) {
    return includedCategories.some((category) => character.category === category);
}
function intoUnicodeCodepoint(char) {
    return {
        codepoint: String.fromCodePoint(char.codepoint),
        name: char.name.toLowerCase(),
        category: char.category
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNkVXNlckZpbHRlckRvd25sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1Y2RVc2VyRmlsdGVyRG93bmxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUMsS0FBSyxFQUE4QyxNQUFNLFdBQVcsQ0FBQztBQUM3RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUluRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBSW5FLE1BQU0sT0FBTyx1QkFBdUI7SUFVaEMsWUFDcUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFUaEMsV0FBTSxHQUFnQjtZQUNuQyxTQUFTLEVBQUUsR0FBRztZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsZUFBZSxFQUFFLFNBQVM7WUFDMUIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUtGLENBQUM7SUFFWSxRQUFROztZQUNqQixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUM7WUFDaEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxPQUFPLENBQUMsa0NBQWtDLGNBQWMsc0JBQXNCLENBQUMsQ0FBQztZQUUxRyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFFYSxnQkFBZ0IsQ0FBQyxNQUF5Qjs7WUFDcEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJ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QVMsb0JBQW9CLENBQUMsSUFBcUI7SUFDL0MsT0FBTztRQUNILFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtLQUMxQixDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQge3BhcnNlLCBQYXJzZUNvbmZpZywgUGFyc2VSZXN1bHQsIFBhcnNlV29ya2VyQ29uZmlnfSBmcm9tIFwicGFwYXBhcnNlXCI7XG5pbXBvcnQge1VuaWNvZGVTZWFyY2hFcnJvcn0gZnJvbSBcIi4uLy4uL2Vycm9ycy91bmljb2RlU2VhcmNoRXJyb3JcIjtcbmltcG9ydCB7VW5pY29kZUNvZGVwb2ludHMsIFVuaWNvZGVDb2RlcG9pbnR9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJpZXMvdHlwZXMvY29kZXBvaW50L2NvZGVwb2ludFwiO1xuaW1wb3J0IHtDaGFyYWN0ZXJEb3dubG9hZGVyfSBmcm9tIFwiLi4vY2hhcmFjdGVyRG93bmxvYWRlclwiO1xuaW1wb3J0IHtTZXR0aW5nc1N0b3JlfSBmcm9tIFwiLi4vc2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHttZXJnZUludGVydmFsc30gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcmllcy9oZWxwZXJzL21lcmdlSW50ZXJ2YWxzXCI7XG5pbXBvcnQge2NvZGVwb2ludElufSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL2hlbHBlcnMvY29kZVBvaW50SW5cIjtcbmltcG9ydCB7Q2hhcmFjdGVyQ2F0ZWdvcnlUeXBlfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL2RhdGEvY2hhcmFjdGVyQ2F0ZWdvcnlcIjtcbmltcG9ydCB7Q29kZXBvaW50SW50ZXJ2YWx9IGZyb20gXCIuLi8uLi8uLi9saWJyYXJpZXMvdHlwZXMvY29kZXBvaW50L2NvZGVwb2ludEludGVydmFsXCI7XG5cbmV4cG9ydCBjbGFzcyBVY2RVc2VyRmlsdGVyRG93bmxvYWRlciBpbXBsZW1lbnRzIENoYXJhY3RlckRvd25sb2FkZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IFBhcnNlQ29uZmlnID0ge1xuICAgICAgICBkZWxpbWl0ZXI6IFwiO1wiLFxuICAgICAgICBoZWFkZXI6IGZhbHNlLFxuICAgICAgICB0cmFuc2Zvcm1IZWFkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgZHluYW1pY1R5cGluZzogZmFsc2UsXG4gICAgICAgIGZhc3RNb2RlOiB0cnVlLFxuICAgIH07XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgc2V0dGluZ3NTdG9yZTogU2V0dGluZ3NTdG9yZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZG93bmxvYWQoKTogUHJvbWlzZTxVbmljb2RlQ29kZXBvaW50cz4ge1xuICAgICAgICBjb25zdCB1bmljb2RlVmVyc2lvbiA9IFwiMTQuMC4wXCI7XG4gICAgICAgIGNvbnN0IHVuaWNvZGVEYXRhID0gYXdhaXQgcmVxdWVzdChgaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvUHVibGljLyR7dW5pY29kZVZlcnNpb259L3VjZC9Vbmljb2RlRGF0YS50eHRgKTtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBhd2FpdCB0aGlzLnRyYW5zZm9ybVRvQ2hhcmFjdGVycyh1bmljb2RlRGF0YSk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gYXdhaXQgdGhpcy5maWx0ZXJDaGFyYWN0ZXJzKHBhcnNlZCk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZC5tYXAoaW50b1VuaWNvZGVDb2RlcG9pbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZmlsdGVyQ2hhcmFjdGVycyhwYXJzZWQ6IFBhcnNlZENoYXJhY3RlcltdKTogUHJvbWlzZTxQYXJzZWRDaGFyYWN0ZXJbXT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBhd2FpdCB0aGlzLnNldHRpbmdzU3RvcmUuZ2V0RmlsdGVyKCk7XG5cbiAgICAgICAgY29uc3QgaW5jbHVkZWRCbG9ja3MgPSBtZXJnZUludGVydmFscyhmaWx0ZXIucGxhbmVzXG4gICAgICAgICAgICAuZmxhdE1hcChwID0+IHAuYmxvY2tzKVxuICAgICAgICAgICAgLmZpbHRlcihiID0+IGIuaW5jbHVkZWQpKTtcblxuICAgICAgICBjb25zdCBpbmNsdWRlZENhdGVnb3JpZXMgPSBmaWx0ZXIuY2F0ZWdvcnlHcm91cHNcbiAgICAgICAgICAgIC5mbGF0TWFwKHAgPT4gcC5jYXRlZ29yaWVzKVxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMuaW5jbHVkZWQpXG4gICAgICAgICAgICAubWFwKGMgPT4gYy5hYmJyZXZpYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQuZmlsdGVyKGNoYXIgPT5cbiAgICAgICAgICAgICFjb250YWluc051bGxWYWx1ZXMoY2hhcilcbiAgICAgICAgICAgICYmIGluY2x1ZGVkSW5CbG9ja3MoY2hhciwgaW5jbHVkZWRCbG9ja3MpXG4gICAgICAgICAgICAmJiBjYXRlZ29yeUluY2x1ZGVkKGNoYXIsIGluY2x1ZGVkQ2F0ZWdvcmllcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZm9ybVRvQ2hhcmFjdGVycyhjc3ZTdHJpbmc6IHN0cmluZyk6IFByb21pc2U8UGFyc2VkQ2hhcmFjdGVyW10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlRm4gPSAocmVzdWx0czogUGFyc2VSZXN1bHQ8UGFyc2VkRGF0YT4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5lcnJvcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgVW5pY29kZVNlYXJjaEVycm9yKFwiRXJyb3Igd2hpbGUgcGFyc2luZyBkYXRhIGZyb20gVW5pY29kZSBDaGFyYWN0ZXIgRGF0YWJhc2VcIikpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZENoYXJhY3RlcnMgPSByZXN1bHRzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocm93KTogUGFyc2VkQ2hhcmFjdGVyID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlcG9pbnQ6IHBhcnNlSW50KHJvd1swXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcm93WzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHJvd1syXSxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwYXJzZWRDaGFyYWN0ZXJzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb246IFBhcnNlV29ya2VyQ29uZmlnPFBhcnNlZERhdGE+ID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgICAgICAgICAgIHdvcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogcmVzdWx0cyA9PiBjb21wbGV0ZUZuKHJlc3VsdHMpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcGFyc2U8UGFyc2VkRGF0YT4oY3N2U3RyaW5nLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbnR5cGUgUGFyc2VkRGF0YSA9IEFycmF5PHN0cmluZz47XG5cbnR5cGUgUGFyc2VkQ2hhcmFjdGVyID0ge1xuICAgIGNvZGVwb2ludDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gY29udGFpbnNOdWxsVmFsdWVzKGNoYXI6IFBhcnRpYWw8UGFyc2VkQ2hhcmFjdGVyPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjaGFyID09IG51bGxcbiAgICAgICAgfHwgY2hhci5uYW1lID09IG51bGxcbiAgICAgICAgfHwgY2hhci5jb2RlcG9pbnQgPT0gbnVsbFxuICAgICAgICB8fCBjaGFyLmNhdGVnb3J5ID09IG51bGxcbn1cblxuZnVuY3Rpb24gaW5jbHVkZWRJbkJsb2NrcyhjaGFyYWN0ZXI6IFBpY2s8UGFyc2VkQ2hhcmFjdGVyLCBcImNvZGVwb2ludFwiPiwgaW5jbHVkZWRCbG9ja3M6IEFycmF5PENvZGVwb2ludEludGVydmFsPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbmNsdWRlZEJsb2Nrcy5zb21lKFxuICAgICAgICAoYmxvY2spID0+IGNvZGVwb2ludEluKGNoYXJhY3Rlci5jb2RlcG9pbnQsIGJsb2NrKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNhdGVnb3J5SW5jbHVkZWQoY2hhcmFjdGVyOiBQaWNrPFBhcnNlZENoYXJhY3RlciwgXCJjYXRlZ29yeVwiPiwgaW5jbHVkZWRDYXRlZ29yaWVzOiBBcnJheTxDaGFyYWN0ZXJDYXRlZ29yeVR5cGU+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGluY2x1ZGVkQ2F0ZWdvcmllcy5zb21lKFxuICAgICAgICAoY2F0ZWdvcnkpID0+IGNoYXJhY3Rlci5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlcbiAgICApO1xufVxuXG5mdW5jdGlvbiBpbnRvVW5pY29kZUNvZGVwb2ludChjaGFyOiBQYXJzZWRDaGFyYWN0ZXIpOiBVbmljb2RlQ29kZXBvaW50IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2RlcG9pbnQ6IFN0cmluZy5mcm9tQ29kZVBvaW50KGNoYXIuY29kZXBvaW50KSxcbiAgICAgICAgbmFtZTogY2hhci5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGNhdGVnb3J5OiBjaGFyLmNhdGVnb3J5XG4gICAgfTtcbn1cbiJdfQ==