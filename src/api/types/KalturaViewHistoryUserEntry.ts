
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaViewHistoryUserEntryArgs  extends KalturaUserEntryArgs {
    playbackContext? : string;
	lastTimeReached? : number;
	lastUpdateTime? : Date;
}


export class KalturaViewHistoryUserEntry extends KalturaUserEntry {

    playbackContext : string;
	lastTimeReached : number;
	lastUpdateTime : Date;

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
				lastUpdateTime : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaViewHistoryUserEntry',KalturaViewHistoryUserEntry);
