import { __awaiter } from "tslib";
export class ReadCache {
    constructor(getCallback, initialValue) {
        this.getCallback = getCallback;
        this.value = initialValue;
    }
    getValue() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.value == null) {
                this.value = yield this.getCallback();
            }
            return this.value;
        });
    }
    setValue(value) {
        this.value = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZENhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVhZENhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLE9BQU8sU0FBUztJQUdsQixZQUNxQixXQUE2QixFQUM5QyxZQUFnQjtRQURDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUc5QyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM5QixDQUFDO0lBRUssUUFBUTs7WUFDVixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3pDO1lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUVELFFBQVEsQ0FBQyxLQUFRO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlYWRDYWNoZTxUPiB7XG4gICAgcHJpdmF0ZSB2YWx1ZT86IFQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBnZXRDYWxsYmFjazogKCkgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgaW5pdGlhbFZhbHVlPzogVFxuICAgICkge1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZhbHVlKCk6IFByb21pc2U8VD4ge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gYXdhaXQgdGhpcy5nZXRDYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWU6IFQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxufVxuIl19