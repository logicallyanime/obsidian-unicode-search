import { __awaiter } from "tslib";
import { renderMatches, SuggestModal } from "obsidian";
import { ELEMENT_FREQUENT, ELEMENT_RECENT, INSERT_CHAR_INSTRUCTION, INSTRUCTION_DISMISS, NAVIGATE_INSTRUCTION } from "./visualElements";
import { toHexadecimal } from "../../libraries/helpers/toHexadecimal";
import { getRandomItem } from "../../libraries/helpers/getRandomItem";
import { fillNullCharacterMatchScores } from "../../libraries/comparison/fillNullCharacterMatchScores";
import { compareCharacterMatches } from "../../libraries/comparison/compareCharacterMatches";
import { ReadCache } from "../../libraries/types/readCache";
import { mostRecentUses } from "../../libraries/helpers/mostRecentUses";
import { averageUseCount } from "../../libraries/helpers/averageUseCount";
import { toNullMatch } from "../../libraries/helpers/toNullMatch";
import { toSearchQueryMatch } from "../../libraries/helpers/toSearchQueryMatch";
import { matchedNameOrCodepoint } from "../../libraries/helpers/matchedNameOrCodepoint";
export class FuzzySearchModal extends SuggestModal {
    constructor(app, editor, characterService) {
        super(app);
        this.editor = editor;
        this.characterService = characterService;
        super.setInstructions([
            NAVIGATE_INSTRUCTION,
            INSERT_CHAR_INSTRUCTION,
            INSTRUCTION_DISMISS,
        ]);
        // Purposefully ignored result
        this.setRandomPlaceholder().then();
        this.usageStatistics = new ReadCache(() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const usedCharacters = yield characterService.getUsed();
            return {
                topThirdRecentlyUsed: (_a = mostRecentUses(usedCharacters).slice(0, 3).last()) !== null && _a !== void 0 ? _a : new Date(0),
                averageUseCount: averageUseCount(usedCharacters),
            };
        }));
    }
    getSuggestions(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const allCharacters = yield this.characterService.getAll();
            const queryEmpty = query == null || query.length < 1;
            const prepared = queryEmpty
                ? allCharacters
                    .map(toNullMatch)
                : allCharacters
                    .map(toSearchQueryMatch(query))
                    .filter(matchedNameOrCodepoint);
            const recencyCutoff = (yield this.usageStatistics.getValue()).topThirdRecentlyUsed;
            return prepared
                .sort((l, r) => compareCharacterMatches(l, r, recencyCutoff))
                .map(fillNullCharacterMatchScores);
        });
    }
    renderSuggestion(search, container) {
        return __awaiter(this, void 0, void 0, function* () {
            const char = search.item;
            container.addClass("plugin", "unicode-search", "result-item");
            container.createDiv({
                cls: "character-preview",
            }).createSpan({
                text: char.codepoint,
            });
            const matches = container.createDiv({
                cls: "character-match",
            });
            const text = matches.createDiv({
                cls: "character-name",
            });
            renderMatches(text, char.name, search.match.name.matches);
            if (search.match.codepoint.matches.length > 0) {
                const codepoint = matches.createDiv({
                    cls: "character-codepoint",
                });
                renderMatches(codepoint, toHexadecimal(char), search.match.codepoint.matches);
            }
            const detail = container.createDiv({
                cls: "detail",
            });
            const usageStats = yield this.usageStatistics.getValue();
            /* The type hinting doesn't work, and shows as an error in the IDE (or the type is wrong) */
            const maybeUsedChar = char;
            const showLastUsed = maybeUsedChar.lastUsed != null && maybeUsedChar.lastUsed >= usageStats.topThirdRecentlyUsed;
            const showUseCount = maybeUsedChar.useCount != null && maybeUsedChar.useCount >= usageStats.averageUseCount;
            const attributes = detail.createDiv({
                cls: "attributes",
            });
            if (showLastUsed) {
                attributes.createDiv(ELEMENT_RECENT);
            }
            if (showUseCount) {
                attributes.createDiv(ELEMENT_FREQUENT);
            }
        });
    }
    onChooseSuggestion(search, evt) {
        return __awaiter(this, void 0, void 0, function* () {
            this.editor.replaceSelection(search.item.codepoint);
            try {
                yield this.characterService.recordUsage(search.item.codepoint);
            }
            catch (error) {
                console.error("Failed to record character usage", { err: error });
            }
        });
    }
    onNoSuggestion() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setRandomPlaceholder();
        });
    }
    setRandomPlaceholder() {
        const _super = Object.create(null, {
            setPlaceholder: { get: () => super.setPlaceholder }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const randomCharacterName = getRandomItem((yield this.characterService.getAllCharacters())).name;
            _super.setPlaceholder.call(this, `Unicode search: ${randomCharacterName}`);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnV6enlTZWFyY2hNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZ1enp5U2VhcmNoTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxhQUFhLEVBQUUsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBR2xFLE9BQU8sRUFDSCxnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLHVCQUF1QixFQUN2QixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3ZCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUV4RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDaEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFJdEYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQWlDO0lBR25FLFlBQ0ksR0FBUSxFQUNTLE1BQWMsRUFDZCxnQkFBa0M7UUFFbkQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSE0sV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFJbkQsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUNsQixvQkFBb0I7WUFD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aEMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFFYSxvQkFBb0I7Ozs7O1lBQzlCLE1BQU0sbUJBQW1CLEdBQUcsYUFBYSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pHLE9BQU0sY0FBYyxZQUFDLG1CQUFtQixtQkFBbUIsRUFBRSxFQUFFO1FBQ25FLENBQUM7S0FBQTtDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHAsIEVkaXRvciwgcmVuZGVyTWF0Y2hlcywgU3VnZ2VzdE1vZGFsfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7VXNlZENoYXJhY3RlclNlYXJjaH0gZnJvbSBcIi4vY2hhcmFjdGVyU2VhcmNoXCI7XG5pbXBvcnQge0NoYXJhY3RlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2NoYXJhY3RlclNlcnZpY2VcIjtcbmltcG9ydCB7XG4gICAgRUxFTUVOVF9GUkVRVUVOVCxcbiAgICBFTEVNRU5UX1JFQ0VOVCxcbiAgICBJTlNFUlRfQ0hBUl9JTlNUUlVDVElPTixcbiAgICBJTlNUUlVDVElPTl9ESVNNSVNTLFxuICAgIE5BVklHQVRFX0lOU1RSVUNUSU9OXG59IGZyb20gXCIuL3Zpc3VhbEVsZW1lbnRzXCI7XG5pbXBvcnQge3RvSGV4YWRlY2ltYWx9IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvaGVscGVycy90b0hleGFkZWNpbWFsXCI7XG5pbXBvcnQge2dldFJhbmRvbUl0ZW19IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvaGVscGVycy9nZXRSYW5kb21JdGVtXCI7XG5pbXBvcnQge2ZpbGxOdWxsQ2hhcmFjdGVyTWF0Y2hTY29yZXN9IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvY29tcGFyaXNvbi9maWxsTnVsbENoYXJhY3Rlck1hdGNoU2NvcmVzXCI7XG5pbXBvcnQge2NvbXBhcmVDaGFyYWN0ZXJNYXRjaGVzfSBmcm9tIFwiLi4vLi4vbGlicmFyaWVzL2NvbXBhcmlzb24vY29tcGFyZUNoYXJhY3Rlck1hdGNoZXNcIjtcbmltcG9ydCB7UmVhZENhY2hlfSBmcm9tIFwiLi4vLi4vbGlicmFyaWVzL3R5cGVzL3JlYWRDYWNoZVwiO1xuaW1wb3J0IHttb3N0UmVjZW50VXNlc30gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzL21vc3RSZWNlbnRVc2VzXCI7XG5pbXBvcnQge2F2ZXJhZ2VVc2VDb3VudH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzL2F2ZXJhZ2VVc2VDb3VudFwiO1xuaW1wb3J0IHtVc2FnZURpc3BsYXlTdGF0aXN0aWNzfSBmcm9tIFwiLi4vLi4vbGlicmFyaWVzL3R5cGVzL3VzYWdlRGlzcGxheVN0YXRpc3RpY3NcIjtcbmltcG9ydCB7dG9OdWxsTWF0Y2h9IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvaGVscGVycy90b051bGxNYXRjaFwiO1xuaW1wb3J0IHt0b1NlYXJjaFF1ZXJ5TWF0Y2h9IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvaGVscGVycy90b1NlYXJjaFF1ZXJ5TWF0Y2hcIjtcbmltcG9ydCB7bWF0Y2hlZE5hbWVPckNvZGVwb2ludH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzL21hdGNoZWROYW1lT3JDb2RlcG9pbnRcIjtcblxuaW1wb3J0IHtQYXJzZWRVc2FnZUluZm99IGZyb20gXCIuLi8uLi9saWJyYXJpZXMvdHlwZXMvc2F2ZWRhdGEvcGFyc2VkVXNhZ2VJbmZvXCI7XG5cbmV4cG9ydCBjbGFzcyBGdXp6eVNlYXJjaE1vZGFsIGV4dGVuZHMgU3VnZ2VzdE1vZGFsPFVzZWRDaGFyYWN0ZXJTZWFyY2g+IHtcbiAgICBwcml2YXRlIHVzYWdlU3RhdGlzdGljczogUmVhZENhY2hlPFVzYWdlRGlzcGxheVN0YXRpc3RpY3M+O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBhcHA6IEFwcCxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlZGl0b3I6IEVkaXRvcixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjaGFyYWN0ZXJTZXJ2aWNlOiBDaGFyYWN0ZXJTZXJ2aWNlLFxuICAgICkge1xuICAgICAgICBzdXBlcihhcHApO1xuXG4gICAgICAgIHN1cGVyLnNldEluc3RydWN0aW9ucyhbXG4gICAgICAgICAgICBOQVZJR0FURV9JTlNUUlVDVElPTixcbiAgICAgICAgICAgIElOU0VSVF9DSEFSX0lOU1RSVUNUSU9OLFxuICAgICAgICAgICAgSU5TVFJVQ1RJT05fRElTTUlTUyxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8gUHVycG9zZWZ1bGx5IGlnbm9yZWQgcmVzdWx0XG4gICAgICAgIHRoaXMuc2V0UmFuZG9tUGxhY2Vob2xkZXIoKS50aGVuKCk7XG5cbiAgICAgICAgdGhpcy51c2FnZVN0YXRpc3RpY3MgPSBuZXcgUmVhZENhY2hlKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZWRDaGFyYWN0ZXJzID0gYXdhaXQgY2hhcmFjdGVyU2VydmljZS5nZXRVc2VkKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvcFRoaXJkUmVjZW50bHlVc2VkOiBtb3N0UmVjZW50VXNlcyh1c2VkQ2hhcmFjdGVycykuc2xpY2UoMCwgMykubGFzdCgpID8/IG5ldyBEYXRlKDApLFxuICAgICAgICAgICAgICAgIGF2ZXJhZ2VVc2VDb3VudDogYXZlcmFnZVVzZUNvdW50KHVzZWRDaGFyYWN0ZXJzKSxcbiAgICAgICAgICAgIH0gYXMgVXNhZ2VEaXNwbGF5U3RhdGlzdGljcztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgZ2V0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VXNlZENoYXJhY3RlclNlYXJjaFtdPiB7XG4gICAgICAgIGNvbnN0IGFsbENoYXJhY3RlcnMgPSBhd2FpdCB0aGlzLmNoYXJhY3RlclNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5RW1wdHkgPSBxdWVyeSA9PSBudWxsIHx8IHF1ZXJ5Lmxlbmd0aCA8IDE7XG5cbiAgICAgICAgY29uc3QgcHJlcGFyZWQgPSBxdWVyeUVtcHR5XG4gICAgICAgICAgICA/IGFsbENoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAubWFwKHRvTnVsbE1hdGNoKVxuICAgICAgICAgICAgOiBhbGxDaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgLm1hcCh0b1NlYXJjaFF1ZXJ5TWF0Y2gocXVlcnkpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIobWF0Y2hlZE5hbWVPckNvZGVwb2ludCk7XG5cbiAgICAgICAgY29uc3QgcmVjZW5jeUN1dG9mZiA9IChhd2FpdCB0aGlzLnVzYWdlU3RhdGlzdGljcy5nZXRWYWx1ZSgpKS50b3BUaGlyZFJlY2VudGx5VXNlZDtcbiAgICAgICAgcmV0dXJuIHByZXBhcmVkXG4gICAgICAgICAgICAuc29ydCgobCwgcikgPT4gY29tcGFyZUNoYXJhY3Rlck1hdGNoZXMobCwgciwgcmVjZW5jeUN1dG9mZikpXG4gICAgICAgICAgICAubWFwKGZpbGxOdWxsQ2hhcmFjdGVyTWF0Y2hTY29yZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyByZW5kZXJTdWdnZXN0aW9uKHNlYXJjaDogVXNlZENoYXJhY3RlclNlYXJjaCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBjaGFyID0gc2VhcmNoLml0ZW07XG5cbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKFwicGx1Z2luXCIsIFwidW5pY29kZS1zZWFyY2hcIiwgXCJyZXN1bHQtaXRlbVwiKTtcblxuICAgICAgICBjb250YWluZXIuY3JlYXRlRGl2KHtcbiAgICAgICAgICAgIGNsczogXCJjaGFyYWN0ZXItcHJldmlld1wiLFxuICAgICAgICB9KS5jcmVhdGVTcGFuKHtcbiAgICAgICAgICAgIHRleHQ6IGNoYXIuY29kZXBvaW50LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICAgICAgICBjbHM6IFwiY2hhcmFjdGVyLW1hdGNoXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBtYXRjaGVzLmNyZWF0ZURpdih7XG4gICAgICAgICAgICBjbHM6IFwiY2hhcmFjdGVyLW5hbWVcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVuZGVyTWF0Y2hlcyh0ZXh0LCBjaGFyLm5hbWUsIHNlYXJjaC5tYXRjaC5uYW1lLm1hdGNoZXMpO1xuXG4gICAgICAgIGlmIChzZWFyY2gubWF0Y2guY29kZXBvaW50Lm1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY29kZXBvaW50ID0gbWF0Y2hlcy5jcmVhdGVEaXYoe1xuICAgICAgICAgICAgICAgIGNsczogXCJjaGFyYWN0ZXItY29kZXBvaW50XCIsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVuZGVyTWF0Y2hlcyhjb2RlcG9pbnQsIHRvSGV4YWRlY2ltYWwoY2hhciksIHNlYXJjaC5tYXRjaC5jb2RlcG9pbnQubWF0Y2hlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZXRhaWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHtcbiAgICAgICAgICAgIGNsczogXCJkZXRhaWxcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXNhZ2VTdGF0cyA9IGF3YWl0IHRoaXMudXNhZ2VTdGF0aXN0aWNzLmdldFZhbHVlKCk7XG5cbiAgICAgICAgLyogVGhlIHR5cGUgaGludGluZyBkb2Vzbid0IHdvcmssIGFuZCBzaG93cyBhcyBhbiBlcnJvciBpbiB0aGUgSURFIChvciB0aGUgdHlwZSBpcyB3cm9uZykgKi9cbiAgICAgICAgY29uc3QgbWF5YmVVc2VkQ2hhciA9IGNoYXIgYXMgUGFydGlhbDxQYXJzZWRVc2FnZUluZm8+XG5cdFx0Y29uc3Qgc2hvd0xhc3RVc2VkID0gbWF5YmVVc2VkQ2hhci5sYXN0VXNlZCAhPSBudWxsICYmIG1heWJlVXNlZENoYXIubGFzdFVzZWQgPj0gdXNhZ2VTdGF0cy50b3BUaGlyZFJlY2VudGx5VXNlZDtcblx0XHRjb25zdCBzaG93VXNlQ291bnQgPSBtYXliZVVzZWRDaGFyLnVzZUNvdW50ICE9IG51bGwgJiYgbWF5YmVVc2VkQ2hhci51c2VDb3VudCA+PSB1c2FnZVN0YXRzLmF2ZXJhZ2VVc2VDb3VudDtcblxuXHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBkZXRhaWwuY3JlYXRlRGl2KHtcblx0XHRcdGNsczogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0fSk7XG5cblx0XHRpZiAoc2hvd0xhc3RVc2VkKSB7XG5cdFx0XHRhdHRyaWJ1dGVzLmNyZWF0ZURpdihFTEVNRU5UX1JFQ0VOVCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3dVc2VDb3VudCkge1xuXHRcdFx0YXR0cmlidXRlcy5jcmVhdGVEaXYoRUxFTUVOVF9GUkVRVUVOVCk7XG5cdFx0fVxuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBvbkNob29zZVN1Z2dlc3Rpb24oc2VhcmNoOiBVc2VkQ2hhcmFjdGVyU2VhcmNoLCBldnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oc2VhcmNoLml0ZW0uY29kZXBvaW50KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jaGFyYWN0ZXJTZXJ2aWNlLnJlY29yZFVzYWdlKHNlYXJjaC5pdGVtLmNvZGVwb2ludCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHJlY29yZCBjaGFyYWN0ZXIgdXNhZ2VcIiwge2VycjogZXJyb3J9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBvbk5vU3VnZ2VzdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRSYW5kb21QbGFjZWhvbGRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2V0UmFuZG9tUGxhY2Vob2xkZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYXJhY3Rlck5hbWUgPSBnZXRSYW5kb21JdGVtKChhd2FpdCB0aGlzLmNoYXJhY3RlclNlcnZpY2UuZ2V0QWxsQ2hhcmFjdGVycygpKSkubmFtZTtcbiAgICAgICAgc3VwZXIuc2V0UGxhY2Vob2xkZXIoYFVuaWNvZGUgc2VhcmNoOiAke3JhbmRvbUNoYXJhY3Rlck5hbWV9YCk7XG4gICAgfVxuXG59XG4iXX0=