
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveEntry, KalturaLiveEntryArgs } from './KalturaLiveEntry';

export interface KalturaLiveChannelArgs  extends KalturaLiveEntryArgs {
    playlistId? : string;
	repeat? : KalturaNullableBoolean;
}


export class KalturaLiveChannel extends KalturaLiveEntry {

    playlistId : string;
	repeat : KalturaNullableBoolean;

    constructor(data? : KalturaLiveChannelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveChannel' },
				playlistId : { type : 's' },
				repeat : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannel',KalturaLiveChannel);
