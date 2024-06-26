export function compareMatchScores(left, right) {
    /* Matches are scored with negative values up to 0, with 0 meaning full match for fuzzy search */
    const codepointScore = right.codepoint.score - left.codepoint.score;
    const nameScore = right.name.score - left.name.score;
    const value = codepointScore + nameScore;
    const nValue = value / Math.abs(value);
    return nValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZU1hdGNoU2NvcmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFyZU1hdGNoU2NvcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUEwQixFQUFFLEtBQTJCO0lBQ3RGLGlHQUFpRztJQUNqRyxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUNwRSxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyRCxNQUFNLEtBQUssR0FBRyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLE1BQU0sTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZDLE9BQU8sTUFBZSxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYXJhY3RlclNlYXJjaE1hdGNofSBmcm9tIFwiLi4vLi4vdW5pY29kZS1zZWFyY2gvY29tcG9uZW50cy9jaGFyYWN0ZXJTZWFyY2hcIjtcbmltcG9ydCB7T3JkZXJ9IGZyb20gXCIuLi9vcmRlci9vcmRlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZU1hdGNoU2NvcmVzKGxlZnQ6IENoYXJhY3RlclNlYXJjaE1hdGNoLCByaWdodDogQ2hhcmFjdGVyU2VhcmNoTWF0Y2gpOiBPcmRlciB7XG4gICAgLyogTWF0Y2hlcyBhcmUgc2NvcmVkIHdpdGggbmVnYXRpdmUgdmFsdWVzIHVwIHRvIDAsIHdpdGggMCBtZWFuaW5nIGZ1bGwgbWF0Y2ggZm9yIGZ1enp5IHNlYXJjaCAqL1xuICAgIGNvbnN0IGNvZGVwb2ludFNjb3JlID0gcmlnaHQuY29kZXBvaW50LnNjb3JlIC0gbGVmdC5jb2RlcG9pbnQuc2NvcmU7XG4gICAgY29uc3QgbmFtZVNjb3JlID0gcmlnaHQubmFtZS5zY29yZSAtIGxlZnQubmFtZS5zY29yZTtcbiAgICBjb25zdCB2YWx1ZSA9IGNvZGVwb2ludFNjb3JlICsgbmFtZVNjb3JlO1xuICAgIGNvbnN0IG5WYWx1ZSA9IHZhbHVlIC8gTWF0aC5hYnModmFsdWUpO1xuXG4gICAgcmV0dXJuIG5WYWx1ZSBhcyBPcmRlcjtcbn1cbiJdfQ==