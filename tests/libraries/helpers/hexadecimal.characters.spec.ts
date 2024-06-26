import {toHexadecimal} from "../../../src/libraries/helpers/toHexadecimal";

test(
    "character `b` is `0062`",
    () => {
        expect(toHexadecimal({
            codepoint: "b",
            name: "latin small letter b",
            category: "Ll"
        })).toBe("0062")
    }
)
