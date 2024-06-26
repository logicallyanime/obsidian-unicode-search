export var Order;
(function (Order) {
    /**
     * **First** argument is **smaller than** the **second** argument.
     */
    Order[Order["Before"] = -1] = "Before";
    Order[Order["Smaller"] = -1] = "Smaller";
    /**
     * **First** argument is **equal to** the **second** argument.
     */
    Order[Order["Equal"] = 0] = "Equal";
    /**
     * **First** argument is **greater than** the **second** argument.
     */
    Order[Order["After"] = 1] = "After";
    Order[Order["Greater"] = 1] = "Greater";
})(Order || (Order = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxLQWtCWDtBQWxCRCxXQUFZLEtBQUs7SUFFaEI7O09BRUc7SUFDSCxzQ0FBVyxDQUFBO0lBQ1gsd0NBQWdCLENBQUE7SUFFaEI7O09BRUc7SUFDSCxtQ0FBUyxDQUFBO0lBRVQ7O09BRUc7SUFDSCxtQ0FBUyxDQUFBO0lBQ1QsdUNBQWUsQ0FBQTtBQUNoQixDQUFDLEVBbEJXLEtBQUssS0FBTCxLQUFLLFFBa0JoQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIE9yZGVyIHtcblxuXHQvKipcblx0ICogKipGaXJzdCoqIGFyZ3VtZW50IGlzICoqc21hbGxlciB0aGFuKiogdGhlICoqc2Vjb25kKiogYXJndW1lbnQuXG5cdCAqL1xuXHRCZWZvcmUgPSAtMSxcblx0U21hbGxlciA9IEJlZm9yZSxcblxuXHQvKipcblx0ICogKipGaXJzdCoqIGFyZ3VtZW50IGlzICoqZXF1YWwgdG8qKiB0aGUgKipzZWNvbmQqKiBhcmd1bWVudC5cblx0ICovXG5cdEVxdWFsID0gMCxcblxuXHQvKipcblx0ICogKipGaXJzdCoqIGFyZ3VtZW50IGlzICoqZ3JlYXRlciB0aGFuKiogdGhlICoqc2Vjb25kKiogYXJndW1lbnQuXG5cdCAqL1xuXHRBZnRlciA9IDEsXG5cdEdyZWF0ZXIgPSBBZnRlcixcbn1cbiJdfQ==