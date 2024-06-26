export const UNICODE_CHARACTER_CATEGORIES = [
    {
        abbreviation: "L",
        name: "Letter",
        categories: [
            {
                abbreviation: "Lu",
                name: "Uppercase Letter",
                description: "an uppercase letter",
            },
            {
                abbreviation: "Ll",
                name: "Lowercase Letter",
                description: "a lowercase letter",
            },
            {
                abbreviation: "Lt",
                name: "Titlecase Letter",
                description: "a digraph encoded as a single character, with first part uppercase",
            },
            {
                abbreviation: "Lm",
                name: "Modifier Letter",
                description: "a modifier letter",
            },
            {
                abbreviation: "Lo",
                name: "Other Letter",
                description: "other letters, including syllables and ideographs",
            },
        ]
    },
    {
        abbreviation: "M",
        name: "Mark",
        categories: [
            {
                abbreviation: "Mn",
                name: "Nonspacing Mark",
                description: "a nonspacing combining mark (zero advance width)",
            },
            {
                abbreviation: "Mc",
                name: "Spacing Mark",
                description: "a spacing combining mark (positive advance width)",
            },
            {
                abbreviation: "Me",
                name: "Enclosing Mark",
                description: "an enclosing combining mark",
            },
        ],
    },
    {
        abbreviation: "N",
        name: "Number",
        categories: [
            {
                abbreviation: "Nd",
                name: "Decimal Number",
                description: "a decimal digit",
            },
            {
                abbreviation: "Nl",
                name: "Letter Number",
                description: "a letterlike numeric character",
            },
            {
                abbreviation: "No",
                name: "Other Number",
                description: "a numeric character of other type",
            },
        ]
    },
    {
        abbreviation: "P",
        name: "Punctuation",
        categories: [
            {
                abbreviation: "Pc",
                name: "Connector Punctuation",
                description: "a connecting punctuation mark, like a tie",
            },
            {
                abbreviation: "Pd",
                name: "Dash Punctuation",
                description: "a dash or hyphen punctuation mark",
            },
            {
                abbreviation: "Ps",
                name: "Open Punctuation",
                description: "an opening punctuation mark (of a pair)",
            },
            {
                abbreviation: "Pe",
                name: "Close Punctuation",
                description: "a closing punctuation mark (of a pair)",
            },
            {
                abbreviation: "Pi",
                name: "Initial Punctuation",
                description: "an initial quotation mark",
            },
            {
                abbreviation: "Pf",
                name: "Final Punctuation",
                description: "a final quotation mark",
            },
            {
                abbreviation: "Po",
                name: "Other Punctuation",
                description: "a punctuation mark of other type",
            },
        ]
    },
    {
        abbreviation: "S",
        name: "Symbol",
        categories: [
            {
                abbreviation: "Sm",
                name: "Math Symbol",
                description: "a symbol of mathematical use",
            },
            {
                abbreviation: "Sc",
                name: "Currency Symbol",
                description: "a currency sign",
            },
            {
                abbreviation: "Sk",
                name: "Modifier Symbol",
                description: "a non-letterlike modifier symbol",
            },
            {
                abbreviation: "So",
                name: "Other Symbol",
                description: "a symbol of other type",
            },
        ]
    },
    {
        abbreviation: "Z",
        name: "Separator",
        categories: [
            {
                abbreviation: "Zs",
                name: "Space Separator",
                description: "a space character (of various non-zero widths)",
            },
            {
                abbreviation: "Zl",
                name: "Line Separator",
                description: "U+2028 LINE SEPARATOR only",
            },
            {
                abbreviation: "Zp",
                name: "Paragraph Separator",
                description: "U+2029 PARAGRAPH SEPARATOR only",
            },
        ]
    },
    {
        abbreviation: "C",
        name: "Other",
        categories: [
            {
                abbreviation: "Cc",
                name: "Control",
                description: "a C0 or C1 control code",
            },
            {
                abbreviation: "Cf",
                name: "Format",
                description: "a format control character",
            },
            {
                abbreviation: "Cs",
                name: "Surrogate",
                description: "a surrogate code point",
            },
            {
                abbreviation: "Co",
                name: "Private Use",
                description: "a private-use character",
            },
            {
                abbreviation: "Cn",
                name: "Unassigned",
                description: "a reserved unassigned code point or a noncharacter",
            },
        ]
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pY29kZUNoYXJhY3RlckNhdGVnb3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmljb2RlQ2hhcmFjdGVyQ2F0ZWdvcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBa0M7SUFDdkU7UUFDSSxZQUFZLEVBQUUsR0FBRztRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRTtZQUNSO2dCQUNJLFlBQVksRUFBRSxJQUFJO2dCQUNsQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixXQUFXLEVBQUUscUJBQXFCO2FBQ3JDO1lBRUQ7Z0JBQ0ksWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFdBQVcsRUFBRSxvQkFBb0I7YUFDcEM7WUFFRDtnQkFDSSxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsV0FBVyxFQUFFLG9FQUFvRTthQUNwRjtZQUVEO2dCQUNJLFlBQVksRUFBRSxJQUFJO2dCQUNsQixJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixXQUFXLEVBQUUsbUJBQW1CO2FBQ25DO1lBRUQ7Z0JBQ0ksWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLElBQUksRUFBRSxjQUFjO2dCQUNwQixXQUFXLEVBQUUsbURBQW1EO2FBQ25FO1NBQ0o7S0FDSjtJQUNEO1FBQ0ksWUFBWSxFQUFFLEdBQUc7UUFDakIsSUFBSSxFQUFFLE1BQU07UUFDWixVQUFVLEVBQUU7WUFDUjtnQkFDSSxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsV0FBVyxFQUFFLGtEQUFrRDthQUNsRTtZQUVEO2dCQUNJLFlBQVksRUFBRSxJQUFJO2dCQUNsQixJQUFJLEVBQUUsY0FBYztnQkFDcEIsV0FBVyxFQUFFLG1EQUFtRDthQUNuRTtZQUVEO2dCQUNJLFlBQVksRUFBRSxJQUFJO2dCQUNsQixJQUFJLEVBQUUs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V0FBVyxFQUFFLHlCQUF5QjthQUN6QztZQUVEO2dCQUNJLFlBQVksRUFBRSxJQUFJO2dCQUNsQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsNEJBQTRCO2FBQzVDO1lBRUQ7Z0JBQ0ksWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLElBQUksRUFBRSxXQUFXO2dCQUNqQixXQUFXLEVBQUUsd0JBQXdCO2FBQ3hDO1lBRUQ7Z0JBQ0ksWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLElBQUksRUFBRSxhQUFhO2dCQUNuQixXQUFXLEVBQUUseUJBQXlCO2FBQ3pDO1lBRUQ7Z0JBQ0ksWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLElBQUksRUFBRSxZQUFZO2dCQUNsQixXQUFXLEVBQUUsb0RBQW9EO2FBQ3BFO1NBQ0o7S0FDSjtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VuaWNvZGVHZW5lcmFsQ2F0ZWdvcnlHcm91cH0gZnJvbSBcIi4uL3R5cGVzL3VuaWNvZGUvdW5pY29kZUdlbmVyYWxDYXRlZ29yeUdyb3VwXCI7XG5cbmV4cG9ydCBjb25zdCBVTklDT0RFX0NIQVJBQ1RFUl9DQVRFR09SSUVTOiBVbmljb2RlR2VuZXJhbENhdGVnb3J5R3JvdXBbXSA9IFtcbiAgICB7XG4gICAgICAgIGFiYnJldmlhdGlvbjogXCJMXCIsXG4gICAgICAgIG5hbWU6IFwiTGV0dGVyXCIsXG4gICAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiTHVcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlVwcGVyY2FzZSBMZXR0ZXJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhbiB1cHBlcmNhc2UgbGV0dGVyXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIkxsXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJMb3dlcmNhc2UgTGV0dGVyXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBsb3dlcmNhc2UgbGV0dGVyXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIkx0XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUaXRsZWNhc2UgTGV0dGVyXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBkaWdyYXBoIGVuY29kZWQgYXMgYSBzaW5nbGUgY2hhcmFjdGVyLCB3aXRoIGZpcnN0IHBhcnQgdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIkxtXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNb2RpZmllciBMZXR0ZXJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhIG1vZGlmaWVyIGxldHRlclwiLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJMb1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiT3RoZXIgTGV0dGVyXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwib3RoZXIgbGV0dGVycywgaW5jbHVkaW5nIHN5bGxhYmxlcyBhbmQgaWRlb2dyYXBoc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBhYmJyZXZpYXRpb246IFwiTVwiLFxuICAgICAgICBuYW1lOiBcIk1hcmtcIixcbiAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJNblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTm9uc3BhY2luZyBNYXJrXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBub25zcGFjaW5nIGNvbWJpbmluZyBtYXJrICh6ZXJvIGFkdmFuY2Ugd2lkdGgpXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIk1jXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTcGFjaW5nIE1hcmtcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhIHNwYWNpbmcgY29tYmluaW5nIG1hcmsgKHBvc2l0aXZlIGFkdmFuY2Ugd2lkdGgpXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIk1lXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJFbmNsb3NpbmcgTWFya1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImFuIGVuY2xvc2luZyBjb21iaW5pbmcgbWFya1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgICBhYmJyZXZpYXRpb246IFwiTlwiLFxuICAgICAgICBuYW1lOiBcIk51bWJlclwiLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIk5kXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJEZWNpbWFsIE51bWJlclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImEgZGVjaW1hbCBkaWdpdFwiLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJObFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTGV0dGVyIE51bWJlclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImEgbGV0dGVybGlrZSBudW1lcmljIGNoYXJhY3RlclwiLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJOb1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiT3RoZXIgTnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBudW1lcmljIGNoYXJhY3RlciBvZiBvdGhlciB0eXBlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFiYnJldmlhdGlvbjogXCJQXCIsXG4gICAgICAgIG5hbWU6IFwiUHVuY3R1YXRpb25cIixcbiAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJQY1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29ubmVjdG9yIFB1bmN0dWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBjb25uZWN0aW5nIHB1bmN0dWF0aW9uIG1hcmssIGxpa2UgYSB0aWVcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiUGRcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkRhc2ggUHVuY3R1YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhIGRhc2ggb3IgaHlwaGVuIHB1bmN0dWF0aW9uIG1hcmtcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiUHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk9wZW4gUHVuY3R1YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhbiBvcGVuaW5nIHB1bmN0dWF0aW9uIG1hcmsgKG9mIGEgcGFpcilcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiUGVcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNsb3NlIFB1bmN0dWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBjbG9zaW5nIHB1bmN0dWF0aW9uIG1hcmsgKG9mIGEgcGFpcilcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiUGlcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkluaXRpYWwgUHVuY3R1YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhbiBpbml0aWFsIHF1b3RhdGlvbiBtYXJrXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIlBmXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJGaW5hbCBQdW5jdHVhdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImEgZmluYWwgcXVvdGF0aW9uIG1hcmtcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiUG9cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk90aGVyIFB1bmN0dWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBwdW5jdHVhdGlvbiBtYXJrIG9mIG90aGVyIHR5cGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWJicmV2aWF0aW9uOiBcIlNcIixcbiAgICAgICAgbmFtZTogXCJTeW1ib2xcIixcbiAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJTbVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTWF0aCBTeW1ib2xcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhIHN5bWJvbCBvZiBtYXRoZW1hdGljYWwgdXNlXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIlNjXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDdXJyZW5jeSBTeW1ib2xcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhIGN1cnJlbmN5IHNpZ25cIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiU2tcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk1vZGlmaWVyIFN5bWJvbFwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImEgbm9uLWxldHRlcmxpa2UgbW9kaWZpZXIgc3ltYm9sXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJTb1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiT3RoZXIgU3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBzeW1ib2wgb2Ygb3RoZXIgdHlwZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIGFiYnJldmlhdGlvbjogXCJaXCIsXG4gICAgICAgIG5hbWU6IFwiU2VwYXJhdG9yXCIsXG4gICAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiWnNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNwYWNlIFNlcGFyYXRvclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImEgc3BhY2UgY2hhcmFjdGVyIChvZiB2YXJpb3VzIG5vbi16ZXJvIHdpZHRocylcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiWmxcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpbmUgU2VwYXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVSsyMDI4IExJTkUgU0VQQVJBVE9SIG9ubHlcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IFwiWnBcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlBhcmFncmFwaCBTZXBhcmF0b3JcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVKzIwMjkgUEFSQUdSQVBIIFNFUEFSQVRPUiBvbmx5XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFiYnJldmlhdGlvbjogXCJDXCIsXG4gICAgICAgIG5hbWU6IFwiT3RoZXJcIixcbiAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJDY1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImEgQzAgb3IgQzEgY29udHJvbCBjb2RlXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBcIkNmXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJGb3JtYXRcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhIGZvcm1hdCBjb250cm9sIGNoYXJhY3RlclwiLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJDc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3Vycm9nYXRlXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiYSBzdXJyb2dhdGUgY29kZSBwb2ludFwiLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJDb1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUHJpdmF0ZSBVc2VcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJhIHByaXZhdGUtdXNlIGNoYXJhY3RlclwiLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogXCJDblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVW5hc3NpZ25lZFwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImEgcmVzZXJ2ZWQgdW5hc3NpZ25lZCBjb2RlIHBvaW50IG9yIGEgbm9uY2hhcmFjdGVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcbl07XG4iXX0=