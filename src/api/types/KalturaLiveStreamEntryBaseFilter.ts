
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveEntryFilter, KalturaLiveEntryFilterArgs } from './KalturaLiveEntryFilter';

export interface KalturaLiveStreamEntryBaseFilterArgs  extends KalturaLiveEntryFilterArgs {
    
}


export class KalturaLiveStreamEntryBaseFilter extends KalturaLiveEntryFilter {

    

    constructor(data? : KalturaLiveStreamEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamEntryBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamEntryBaseFilter',KalturaLiveStreamEntryBaseFilter);
