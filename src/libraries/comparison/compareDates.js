import { Order } from "../order/order";
export function compareDates(left, right) {
    if (left < right) {
        return Order.Smaller;
    }
    if (left > right) {
        return Order.Greater;
    }
    return Order.Equal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZURhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFyZURhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVUsRUFBRSxLQUFXO0lBQ2hELElBQUksSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUVELElBQUksSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNkLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUVELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcmRlcn0gZnJvbSBcIi4uL29yZGVyL29yZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlRGF0ZXMobGVmdDogRGF0ZSwgcmlnaHQ6IERhdGUpOiBPcmRlciB7XG4gICAgaWYgKGxlZnQgPCByaWdodCkge1xuICAgICAgICByZXR1cm4gT3JkZXIuU21hbGxlcjtcbiAgICB9XG5cbiAgICBpZiAobGVmdCA+IHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBPcmRlci5HcmVhdGVyO1xuICAgIH1cblxuICAgIHJldHVybiBPcmRlci5FcXVhbDtcbn1cbiJdfQ==