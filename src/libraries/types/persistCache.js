import { __awaiter } from "tslib";
import { UnicodeSearchError } from "../../unicode-search/errors/unicodeSearchError";
export class PersistCache {
    constructor(getCallback, persistCallback, initialValue) {
        this.getCallback = getCallback;
        this.persistCallback = persistCallback;
        this.value = initialValue;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.value == null) {
                this.value = yield this.getCallback();
            }
            return this.value;
        });
    }
    set(value) {
        this.value = value;
    }
    persist() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.value == null) {
                throw new UnicodeSearchError("Refuse to persist a null value");
            }
            yield this.persistCallback(this.value);
            return this.value;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdENhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc2lzdENhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUVsRixNQUFNLE9BQU8sWUFBWTtJQUdyQixZQUNxQixXQUE2QixFQUM3QixlQUE0QyxFQUM3RCxZQUFnQjtRQUZDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixvQkFBZSxHQUFmLGVBQWUsQ0FBNkI7UUFHN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7SUFDOUIsQ0FBQztJQUVLLEdBQUc7O1lBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN6QztZQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFFRCxHQUFHLENBQUMsS0FBUTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFSyxPQUFPOztZQUNULElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2FBQ2xFO1lBRUQsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztLQUFBO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VuaWNvZGVTZWFyY2hFcnJvcn0gZnJvbSBcIi4uLy4uL3VuaWNvZGUtc2VhcmNoL2Vycm9ycy91bmljb2RlU2VhcmNoRXJyb3JcIjtcblxuZXhwb3J0IGNsYXNzIFBlcnNpc3RDYWNoZTxUPiB7XG4gICAgcHJpdmF0ZSB2YWx1ZT86IFQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBnZXRDYWxsYmFjazogKCkgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0Q2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gUHJvbWlzZTx2b2lkPixcbiAgICAgICAgaW5pdGlhbFZhbHVlPzogVFxuICAgICkge1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldCgpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGF3YWl0IHRoaXMuZ2V0Q2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZTogVCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB9XG5cbiAgICBhc3luYyBwZXJzaXN0KCk6IFByb21pc2U8VD4ge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5pY29kZVNlYXJjaEVycm9yKFwiUmVmdXNlIHRvIHBlcnNpc3QgYSBudWxsIHZhbHVlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5wZXJzaXN0Q2FsbGJhY2sodGhpcy52YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==