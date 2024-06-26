import { __awaiter } from "tslib";
import { initializationData } from "../data/initializationData";
import { isTypeSaveData } from "./isTypeSaveData";
export function importData(dataLoader) {
    return __awaiter(this, void 0, void 0, function* () {
        const localData = yield dataLoader.loadData();
        const dataLoaded = isTypeSaveData(localData);
        if (dataLoaded) {
            console.log("Data skeleton already present");
            return localData;
        }
        console.log("Creating data skeleton");
        return Object.assign({}, initializationData());
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltcG9ydERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTlELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxNQUFNLFVBQWdCLFVBQVUsQ0FDNUIsVUFBb0M7O1FBRXBDLE1BQU0sU0FBUyxHQUFHLE1BQU0sVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTlDLE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUc3QyxJQUFJLFVBQVUsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUM3QyxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0Qyx5QkFBVyxrQkFBa0IsRUFBRSxFQUFFO0lBQ3JDLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2lufSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7U2F2ZURhdGF9IGZyb20gXCIuLi90eXBlcy9zYXZlZGF0YS9zYXZlRGF0YVwiO1xuaW1wb3J0IHtpbml0aWFsaXphdGlvbkRhdGF9IGZyb20gXCIuLi9kYXRhL2luaXRpYWxpemF0aW9uRGF0YVwiO1xuXG5pbXBvcnQge2lzVHlwZVNhdmVEYXRhfSBmcm9tIFwiLi9pc1R5cGVTYXZlRGF0YVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1wb3J0RGF0YShcbiAgICBkYXRhTG9hZGVyOiBQaWNrPFBsdWdpbiwgXCJsb2FkRGF0YVwiPixcbik6IFByb21pc2U8U2F2ZURhdGE+IHtcbiAgICBjb25zdCBsb2NhbERhdGEgPSBhd2FpdCBkYXRhTG9hZGVyLmxvYWREYXRhKCk7XG5cbiAgICBjb25zdCBkYXRhTG9hZGVkID0gaXNUeXBlU2F2ZURhdGEobG9jYWxEYXRhKTtcblxuXG4gICAgaWYgKGRhdGFMb2FkZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIHNrZWxldG9uIGFscmVhZHkgcHJlc2VudFwiKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsRGF0YTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIGRhdGEgc2tlbGV0b25cIik7XG4gICAgcmV0dXJuIHsuLi5pbml0aWFsaXphdGlvbkRhdGEoKX07XG59XG4iXX0=