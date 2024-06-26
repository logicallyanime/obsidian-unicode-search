import {Character, CharacterKey, MaybeUsedCharacter, UsedCharacter} from "../../libraries/types/codepoint/character";


import {ParsedUsageInfo} from "../../libraries/types/savedata/parsedUsageInfo";

export interface CharacterService {
	getOne(key: CharacterKey): Promise<Character>;
    getAllCharacters(): Promise<Character[]>;
    getUsed(): Promise<UsedCharacter[]>;
    getAll(): Promise<MaybeUsedCharacter[]>;
	recordUsage(key: CharacterKey): Promise<ParsedUsageInfo>;
}
