import {CharacterSearchMaybeMatch} from "../../unicode-search/components/characterSearch";
import {Order} from "../order/order";
import {compareMatchScores} from "./compareMatchScores";
import {fillNullMatchScores} from "./fillNullMatchScores";
import {compareNullable} from "./compareNullable";

export function compareMaybeMatches(left: CharacterSearchMaybeMatch, right: CharacterSearchMaybeMatch): Order {
    const leftNull = left.codepoint == null && left.name == null;
    const rightNull = right.codepoint == null && right.name == null;

    return compareNullable(
        leftNull ? null : fillNullMatchScores(left),
        rightNull ? null : fillNullMatchScores(right),
        (l, r) => compareMatchScores(l, r)
    )
}
