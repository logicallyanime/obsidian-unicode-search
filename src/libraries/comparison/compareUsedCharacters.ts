import {Order} from "../order/order";
import {compareNullable} from "./compareNullable";
import {compareUsageInfo} from "./compareUsageInfo";
import {MaybeUsedCharacter, UsedCharacter} from "../types/codepoint/character";
import {compareNumbers} from "./compareNumbers";
import {isUsedCharacter} from "../helpers/isUsedCharacter";

function toUsedCharacter(character: MaybeUsedCharacter): UsedCharacter | null {
    return isUsedCharacter(character) ? character : null;
}

export function compareUsedCharacters(
    left: MaybeUsedCharacter,
    right: MaybeUsedCharacter,
    recencyCutoff: Date,
): Order {
	const order = compareNullable(
        toUsedCharacter(left),
        toUsedCharacter(right),
        (l, r) => compareUsageInfo(l, r, recencyCutoff),
	);

	if (order !== Order.Equal) {
		return order;
	}

	return compareNumbers(left.codepoint.codePointAt(0)!, right.codepoint.codePointAt(0)!);
}
