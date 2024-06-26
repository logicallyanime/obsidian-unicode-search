import { __awaiter } from "tslib";
export class CodepointStorage {
    constructor(store) {
        this.store = store;
    }
    getCodepoints() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.store.getUnicode()).codepoints;
        });
    }
    initializeCodepoints(codepoints) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.overwriteUnicode({
                initialized: true,
                codepoints: codepoints,
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZXBvaW50U3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGVwb2ludFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLE1BQU0sT0FBTyxnQkFBZ0I7SUFFekIsWUFBNkIsS0FBb0I7UUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUNqRCxDQUFDO0lBRUssYUFBYTs7WUFDZixPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLFVBQTZCOztZQUNwRCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzlCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixVQUFVLEVBQUUsVUFBVTthQUN6QixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um9vdERhdGFTdG9yZX0gZnJvbSBcIi4uL3Jvb3REYXRhU3RvcmVcIjtcbmltcG9ydCB7Q29kZXBvaW50U3RvcmV9IGZyb20gXCIuLi9jb2RlUG9pbnRTdG9yZVwiO1xuaW1wb3J0IHtVbmljb2RlQ29kZXBvaW50c30gZnJvbSBcIi4uLy4uLy4uL2xpYnJhcmllcy90eXBlcy9jb2RlcG9pbnQvY29kZXBvaW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDb2RlcG9pbnRTdG9yYWdlIGltcGxlbWVudHMgQ29kZXBvaW50U3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdG9yZTogUm9vdERhdGFTdG9yZSkge1xuICAgIH1cblxuICAgIGFzeW5jIGdldENvZGVwb2ludHMoKTogUHJvbWlzZTxVbmljb2RlQ29kZXBvaW50cz4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuc3RvcmUuZ2V0VW5pY29kZSgpKS5jb2RlcG9pbnRzO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRpYWxpemVDb2RlcG9pbnRzKGNvZGVwb2ludHM6IFVuaWNvZGVDb2RlcG9pbnRzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmUub3ZlcndyaXRlVW5pY29kZSh7XG4gICAgICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgICAgIGNvZGVwb2ludHM6IGNvZGVwb2ludHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19