
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamEntryBaseFilter, KalturaLiveStreamEntryBaseFilterArgs } from './KalturaLiveStreamEntryBaseFilter';

export interface KalturaLiveStreamEntryFilterArgs  extends KalturaLiveStreamEntryBaseFilterArgs {
    
}


export class KalturaLiveStreamEntryFilter extends KalturaLiveStreamEntryBaseFilter {

    

    constructor(data? : KalturaLiveStreamEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamEntryFilter',KalturaLiveStreamEntryFilter);
