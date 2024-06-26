import { __awaiter } from "tslib";
import { UnicodeSearchError } from "../../errors/unicodeSearchError";
export class UsageCharacterService {
    constructor(codepointStore, usageStore) {
        this.codepointStore = codepointStore;
        this.usageStore = usageStore;
    }
    getOne(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield this.getAllCharacters();
            const char = characters.find(char => char.codepoint === key);
            if (char == null) {
                throw new UnicodeSearchError(`No character '${key}' exists.`);
            }
            return char;
        });
    }
    getAllCharacters() {
        return this.codepointStore.getCodepoints();
    }
    getUsed() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCharacters = yield this.getAllCharacters();
            const usedCharacters = yield this.usageStore.getUsed();
            const usedKeys = usedCharacters.map(ch => ch.codepoint);
            return allCharacters
                .filter(ch => usedKeys.contains(ch.codepoint))
                .map(character => (Object.assign(Object.assign({}, usedCharacters.find(usage => usage.codepoint === character.codepoint)), character)));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCharacters = yield this.getAllCharacters();
            const usedCharacters = yield this.usageStore.getUsed();
            return allCharacters.map(character => (Object.assign(Object.assign({}, usedCharacters.find(usage => usage.codepoint === character.codepoint)), character)));
        });
    }
    recordUsage(key) {
        const timestamp = new Date();
        return this.usageStore.updateCharacter(key, (current) => {
            var _a, _b;
            return (Object.assign(Object.assign({}, current), { firstUsed: (_a = current === null || current === void 0 ? void 0 : current.firstUsed) !== null && _a !== void 0 ? _a : timestamp, lastUsed: timestamp, useCount: ((_b = current === null || current === void 0 ? void 0 : current.useCount) !== null && _b !== void 0 ? _b : 0) + 1 }));
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNhZ2VDaGFyYWN0ZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNhZ2VDaGFyYWN0ZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQWFuRSxNQUFNLE9BQU8scUJBQXFCO0lBRWpDLFlBQ3dCLGNBQThCLEVBQzlCLFVBQXNCO1FBRHRCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRTlDLENBQUM7SUFFZSxNQUFNLENBQUMsR0FBaUI7O1lBQ2pDLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDakQsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFbkUsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNqQixNQUFNLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLENBQUM7YUFDOUQ7WUFFSyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFRyxnQkFBZ0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFZSxPQUFPOztZQUNoQixNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3BELE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2RCxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXhELE9BQU8sYUFBYTtpQkFDZixNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDN0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsaUNBQ1gsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFNBQVMsQ0FBRSxHQUN0RSxTQUFTLEVBQ2QsQ0FBQyxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRVksTUFBTTs7WUFDZixNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3BELE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV2RCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxpQ0FDL0IsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUNyRSxTQUFTLEVBQ2QsQ0FBQyxDQUFDO1FBQ1IsQ0FBQztLQUFBO0lBRUcsV0FBVyxDQUFDLEdBQWlCO1FBQzdCLE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFbkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7WUFBQyxPQUFBLGlDQUM1QyxPQUFPLEtBQ1YsU0FBUyxFQUFFLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFNBQVMsbUNBQUksU0FBUyxFQUMxQyxRQUFRLEVBQUUsU0FBUyxFQUNuQixRQUFRLEVBQUUsQ0FBQyxNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxRQUFRLG1DQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFDeEMsQ0FBQTtTQUFBLENBQUMsQ0FBQTtJQUNWLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VW5pY29kZVNlYXJjaEVycm9yfSBmcm9tIFwiLi4vLi4vZXJyb3JzL3VuaWNvZGVTZWFyY2hFcnJvclwiO1xuaW1wb3J0IHtcbiAgICBDaGFyYWN0ZXIsXG4gICAgQ2hhcmFjdGVyS2V5LCBNYXliZVVzZWRDaGFyYWN0ZXIsXG4gICAgVXNlZENoYXJhY3RlclxufSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL3R5cGVzL2NvZGVwb2ludC9jaGFyYWN0ZXJcIjtcbmltcG9ydCB7Q29kZXBvaW50U3RvcmV9IGZyb20gXCIuLi9jb2RlUG9pbnRTdG9yZVwiO1xuaW1wb3J0IHtDaGFyYWN0ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vY2hhcmFjdGVyU2VydmljZVwiO1xuaW1wb3J0IHtVc2FnZVN0b3JlfSBmcm9tIFwiLi4vdXNhZ2VTdG9yZVwiO1xuXG5cbmltcG9ydCB7UGFyc2VkVXNhZ2VJbmZvfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL3R5cGVzL3NhdmVkYXRhL3BhcnNlZFVzYWdlSW5mb1wiO1xuXG5leHBvcnQgY2xhc3MgVXNhZ2VDaGFyYWN0ZXJTZXJ2aWNlIGltcGxlbWVudHMgQ2hhcmFjdGVyU2VydmljZSB7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvZGVwb2ludFN0b3JlOiBDb2RlcG9pbnRTdG9yZSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB1c2FnZVN0b3JlOiBVc2FnZVN0b3JlLFxuXHQpIHtcblx0fVxuXG4gICAgcHVibGljIGFzeW5jIGdldE9uZShrZXk6IENoYXJhY3RlcktleSk6IFByb21pc2U8Q2hhcmFjdGVyPiB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCB0aGlzLmdldEFsbENoYXJhY3RlcnMoKTtcbiAgICAgICAgY29uc3QgY2hhciA9IGNoYXJhY3RlcnMuZmluZChjaGFyID0+IGNoYXIuY29kZXBvaW50ID09PSBrZXkpO1xuXG5cdFx0aWYgKGNoYXIgPT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IFVuaWNvZGVTZWFyY2hFcnJvcihgTm8gY2hhcmFjdGVyICcke2tleX0nIGV4aXN0cy5gKTtcblx0XHR9XG5cbiAgICAgICAgcmV0dXJuIGNoYXI7XG4gICAgfVxuXG5cdHB1YmxpYyBnZXRBbGxDaGFyYWN0ZXJzKCk6IFByb21pc2U8Q2hhcmFjdGVyW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZXBvaW50U3RvcmUuZ2V0Q29kZXBvaW50cygpO1xuXHR9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0VXNlZCgpOiBQcm9taXNlPFVzZWRDaGFyYWN0ZXJbXT4ge1xuICAgICAgICBjb25zdCBhbGxDaGFyYWN0ZXJzID0gYXdhaXQgdGhpcy5nZXRBbGxDaGFyYWN0ZXJzKCk7XG4gICAgICAgIGNvbnN0IHVzZWRDaGFyYWN0ZXJzID0gYXdhaXQgdGhpcy51c2FnZVN0b3JlLmdldFVzZWQoKTtcbiAgICAgICAgY29uc3QgdXNlZEtleXMgPSB1c2VkQ2hhcmFjdGVycy5tYXAoY2ggPT4gY2guY29kZXBvaW50KTtcblxuICAgICAgICByZXR1cm4gYWxsQ2hhcmFjdGVyc1xuICAgICAgICAgICAgLmZpbHRlcihjaCA9PiB1c2VkS2V5cy5jb250YWlucyhjaC5jb2RlcG9pbnQpKVxuICAgICAgICAgICAgLm1hcChjaGFyYWN0ZXIgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi51c2VkQ2hhcmFjdGVycy5maW5kKHVzYWdlID0+IHVzYWdlLmNvZGVwb2ludCA9PT0gY2hhcmFjdGVyLmNvZGVwb2ludCkhLFxuICAgICAgICAgICAgICAgIC4uLmNoYXJhY3RlcixcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8TWF5YmVVc2VkQ2hhcmFjdGVyW10+IHtcbiAgICAgICAgY29uc3QgYWxsQ2hhcmFjdGVycyA9IGF3YWl0IHRoaXMuZ2V0QWxsQ2hhcmFjdGVycygpO1xuICAgICAgICBjb25zdCB1c2VkQ2hhcmFjdGVycyA9IGF3YWl0IHRoaXMudXNhZ2VTdG9yZS5nZXRVc2VkKCk7XG5cbiAgICAgICAgcmV0dXJuIGFsbENoYXJhY3RlcnMubWFwKGNoYXJhY3RlciA9PiAoe1xuICAgICAgICAgICAgLi4udXNlZENoYXJhY3RlcnMuZmluZCh1c2FnZSA9PiB1c2FnZS5jb2RlcG9pbnQgPT09IGNoYXJhY3Rlci5jb2RlcG9pbnQpLFxuICAgICAgICAgICAgLi4uY2hhcmFjdGVyLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG5cdHB1YmxpYyByZWNvcmRVc2FnZShrZXk6IENoYXJhY3RlcktleSk6IFByb21pc2U8UGFyc2VkVXNhZ2VJbmZvPiB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy51c2FnZVN0b3JlLnVwZGF0ZUNoYXJhY3RlcihrZXksIChjdXJyZW50KSA9PiAoe1xuICAgICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICAgIGZpcnN0VXNlZDogY3VycmVudD8uZmlyc3RVc2VkID8/IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIGxhc3RVc2VkOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICB1c2VDb3VudDogKGN1cnJlbnQ/LnVzZUNvdW50ID8/IDApICsgMSxcbiAgICAgICAgfSkpXG5cdH1cbn1cblxuIl19