import {RootDataStore} from "../rootDataStore";
import {SettingsStore} from "../settingsStore";
import {BlockFilter, FilterData, PlaneFilter} from "../../../libraries/types/savedata/filterData";
import {UnicodeSearchError} from "../../errors/unicodeSearchError";
import {CodepointInterval} from "../../../libraries/types/codepoint/codepointInterval";
import {intervalsEqual} from "../../../libraries/helpers/compareIntervals";
import {intervalWithin} from "../../../libraries/helpers/intervalWithin";

export class settingsStorage implements SettingsStore {

    constructor(private readonly store: RootDataStore) {
    }

    async getFilter(): Promise<FilterData> {
        return (await this.store.getSettings()).filter
    }

    allBlocksIncluded(plane: CodepointInterval): Promise<boolean> {
        throw new UnicodeSearchError("Not implemented");
    }

    includeAllBlocks(plane: CodepointInterval, set: boolean): Promise<void> {
        throw new UnicodeSearchError("Not implemented");
    }

    async getCharacterBlock(block: CodepointInterval): Promise<boolean> {
        return (await this.getBlockFilters())
            .some(blockFilter => blockFilter.included && intervalsEqual(blockFilter, block));
    }

    async setCharacterBlock(block: CodepointInterval, set: boolean): Promise<void> {
        // NEXT reset the unicode data
        const settings = await this.store.getSettings();
        const planeIndex = settings.filter.planes.findIndex(pf => intervalWithin(pf, block));

        if (planeIndex < 0) {
            throw new UnicodeSearchError(`Block doesn't belong to any codepoint plane. ${block}`);
        }

        const blockIndex = settings.filter.planes[planeIndex].blocks.findIndex(bf => intervalsEqual(bf, block));

        if (blockIndex < 0) {
            throw new UnicodeSearchError(`Block doesn't exist within a plane. ${block}`);
        }

        settings.filter.planes[planeIndex].blocks[blockIndex].included = set;

        await this.store.saveSettings(settings);
    }

    private async getBlockFilters(): Promise<BlockFilter[]> {
        return (await this.getFilter()).planes
            .flatMap(plane => plane.blocks);
    }
}
