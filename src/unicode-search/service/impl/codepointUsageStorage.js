import { __awaiter } from "tslib";
import { parseUsageInfo } from "../../../libraries/helpers/parseUsageInfo";
import { serializeUsageInfo } from "../../../libraries/helpers/serializeUsageInfo";
export class CodepointUsageStorage {
    constructor(store) {
        this.store = store;
    }
    updateCharacter(key, apply) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getUsed();
            const foundIndex = data.findIndex(ch => ch.codepoint === key);
            const found = foundIndex >= 0;
            const index = found ? foundIndex : 0;
            const modifiedUsage = Object.assign(Object.assign({}, apply(found ? Object.assign({}, data[index]) : undefined)), { codepoint: key });
            if (found) {
                data[foundIndex] = modifiedUsage;
            }
            else {
                data.unshift(modifiedUsage);
            }
            yield this.overwriteUsageData(data);
            return data[index];
        });
    }
    getUsed() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.store.getUsage())
                .codepoints
                .map(parseUsageInfo);
        });
    }
    overwriteUsageData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newData = yield this.mergeUsage({
                codepoints: data.map(serializeUsageInfo),
            });
            return newData.codepoints.map(parseUsageInfo);
        });
    }
    mergeUsage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const storedData = yield this.store.getUsage();
            const newData = Object.assign(Object.assign({}, storedData), data);
            return yield this.store.overwriteUsage(newData);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZXBvaW50VXNhZ2VTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZXBvaW50VXNhZ2VTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFJakYsTUFBTSxPQUFPLHFCQUFxQjtJQUU5QixZQUNxQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBRXpDLENBQUM7SUFFSyxlQUFlLENBQ2pCLEdBQWlCLEVBQ2pCLEtBQWtEOztZQUdsRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM5RCxNQUFNLEtBQUssR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO1lBQzlCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFckMsTUFBTSxhQUFhLG1DQUNaLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxtQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUM5QyxTQUFTLEVBQUUsR0FBRyxHQUNqQixDQUFDO1lBRUYsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGFBQWEsQ0FBQTthQUNuQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQzlCO1lBRUQsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRUssT0FBTzs7WUFDVCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUMvQixVQUFVO2lCQUNWLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUM1QixDQUFDO0tBQUE7SUFFYSxrQkFBa0IsQ0FBQyxJQUE0Qjs7WUFDekQsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNsQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQyxDQUFDLENBQUM7WUFFSCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2pELENBQUM7S0FBQTtJQUVhLFVBQVUsQ0FBQyxJQUF3Qjs7WUFDN0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRS9DLE1BQU0sT0FBTyxtQ0FDTixVQUFVLEdBQ1YsSUFBSSxDQUNWLENBQUM7WUFFRixPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Jvb3REYXRhU3RvcmV9IGZyb20gXCIuLi9yb290RGF0YVN0b3JlXCI7XG5pbXBvcnQge1VzYWdlU3RvcmV9IGZyb20gXCIuLi91c2FnZVN0b3JlXCI7XG5pbXBvcnQge0NoYXJhY3RlcktleX0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcmllcy90eXBlcy9jb2RlcG9pbnQvY2hhcmFjdGVyXCI7XG5pbXBvcnQge1xuICAgIFVzYWdlRGF0YVxufSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL3R5cGVzL3NhdmVkYXRhL3VzYWdlRGF0YVwiO1xuaW1wb3J0IHtwYXJzZVVzYWdlSW5mb30gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcmllcy9oZWxwZXJzL3BhcnNlVXNhZ2VJbmZvXCI7XG5pbXBvcnQge3NlcmlhbGl6ZVVzYWdlSW5mb30gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcmllcy9oZWxwZXJzL3NlcmlhbGl6ZVVzYWdlSW5mb1wiO1xuaW1wb3J0IHtDb2RlcG9pbnRQYXJzZWRVc2FnZX0gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcmllcy90eXBlcy9zYXZlZGF0YS9jb2RlcG9pbnRcIjtcbmltcG9ydCB7UGFyc2VkVXNhZ2VJbmZvfSBmcm9tIFwiLi4vLi4vLi4vbGlicmFyaWVzL3R5cGVzL3NhdmVkYXRhL3BhcnNlZFVzYWdlSW5mb1wiO1xuXG5leHBvcnQgY2xhc3MgQ29kZXBvaW50VXNhZ2VTdG9yYWdlIGltcGxlbWVudHMgVXNhZ2VTdG9yZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzdG9yZTogUm9vdERhdGFTdG9yZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVDaGFyYWN0ZXIoXG4gICAgICAgIGtleTogQ2hhcmFjdGVyS2V5LFxuICAgICAgICBhcHBseTogKGNoYXI/OiBQYXJzZWRVc2FnZUluZm8pID0+IFBhcnNlZFVzYWdlSW5mb1xuICAgICk6IFByb21pc2U8Q29kZXBvaW50UGFyc2VkVXNhZ2U+XG4gICAge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5nZXRVc2VkKCk7XG5cbiAgICAgICAgY29uc3QgZm91bmRJbmRleCA9IGRhdGEuZmluZEluZGV4KGNoID0+IGNoLmNvZGVwb2ludCA9PT0ga2V5KTtcbiAgICAgICAgY29uc3QgZm91bmQgPSBmb3VuZEluZGV4ID49IDA7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZm91bmQgPyBmb3VuZEluZGV4IDogMDtcblxuICAgICAgICBjb25zdCBtb2RpZmllZFVzYWdlID0ge1xuICAgICAgICAgICAgLi4uYXBwbHkoZm91bmQgPyB7Li4uZGF0YVtpbmRleF19IDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIGNvZGVwb2ludDoga2V5LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgZGF0YVtmb3VuZEluZGV4XSA9IG1vZGlmaWVkVXNhZ2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEudW5zaGlmdChtb2RpZmllZFVzYWdlKVxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5vdmVyd3JpdGVVc2FnZURhdGEoZGF0YSlcblxuICAgICAgICByZXR1cm4gZGF0YVtpbmRleF07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXNlZCgpOiBQcm9taXNlPENvZGVwb2ludFBhcnNlZFVzYWdlW10+IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLnN0b3JlLmdldFVzYWdlKCkpXG4gICAgICAgICAgICAuY29kZXBvaW50c1xuICAgICAgICAgICAgLm1hcChwYXJzZVVzYWdlSW5mbylcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG92ZXJ3cml0ZVVzYWdlRGF0YShkYXRhOiBDb2RlcG9pbnRQYXJzZWRVc2FnZVtdKTogUHJvbWlzZTxDb2RlcG9pbnRQYXJzZWRVc2FnZVtdPiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBhd2FpdCB0aGlzLm1lcmdlVXNhZ2Uoe1xuICAgICAgICAgICAgY29kZXBvaW50czogZGF0YS5tYXAoc2VyaWFsaXplVXNhZ2VJbmZvKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0RhdGEuY29kZXBvaW50cy5tYXAocGFyc2VVc2FnZUluZm8pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBtZXJnZVVzYWdlKGRhdGE6IFBhcnRpYWw8VXNhZ2VEYXRhPik6IFByb21pc2U8VXNhZ2VEYXRhPiB7XG4gICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBhd2FpdCB0aGlzLnN0b3JlLmdldFVzYWdlKCk7XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgICAgICAgIC4uLnN0b3JlZERhdGEsXG4gICAgICAgICAgICAuLi5kYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmUub3ZlcndyaXRlVXNhZ2UobmV3RGF0YSk7XG4gICAgfVxufVxuIl19