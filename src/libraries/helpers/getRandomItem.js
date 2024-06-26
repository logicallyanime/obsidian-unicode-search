import { UnicodeSearchError } from "../../unicode-search/errors/unicodeSearchError";
export function getRandomItem(chars) {
    if (chars.length < 1) {
        throw new UnicodeSearchError("Cannot get a random item from an empty array");
    }
    return chars[Math.floor(Math.random() * chars.length)];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UmFuZG9tSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldFJhbmRvbUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFFbEYsTUFBTSxVQUFVLGFBQWEsQ0FBSSxLQUFVO0lBQ3ZDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbEIsTUFBTSxJQUFJLGtCQUFrQixDQUFDLDhDQUE4QyxDQUFDLENBQUE7S0FDL0U7SUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVbmljb2RlU2VhcmNoRXJyb3J9IGZyb20gXCIuLi8uLi91bmljb2RlLXNlYXJjaC9lcnJvcnMvdW5pY29kZVNlYXJjaEVycm9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JdGVtPFQ+KGNoYXJzOiBUW10pOiBUIHtcbiAgICBpZiAoY2hhcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgVW5pY29kZVNlYXJjaEVycm9yKFwiQ2Fubm90IGdldCBhIHJhbmRvbSBpdGVtIGZyb20gYW4gZW1wdHkgYXJyYXlcIilcbiAgICB9XG5cbiAgICByZXR1cm4gY2hhcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKV07XG59XG4iXX0=