
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaViewHistoryUserEntryArgs  extends KalturaUserEntryArgs {
    playbackContext? : string;
	lastTimeReached? : number;
	lastUpdateTime? : Date;
	playlistLastEntryId? : string;
}


export class KalturaViewHistoryUserEntry extends KalturaUserEntry {

    playbackContext : string;
	lastTimeReached : number;
	lastUpdateTime : Date;
	playlistLastEntryId : string;

    constructor(data? : KalturaViewHistoryUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaViewHistoryUserEntry' },
				playbackContext : { type : 's' },
				lastTimeReached : { type : 'n' },
				lastUpdateTime : { type : 'd' },
				playlistLastEntryId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaViewHistoryUserEntry'] = KalturaViewHistoryUserEntry;