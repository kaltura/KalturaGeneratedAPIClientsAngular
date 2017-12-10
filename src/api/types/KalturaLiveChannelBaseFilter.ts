
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveEntryFilter, KalturaLiveEntryFilterArgs } from './KalturaLiveEntryFilter';

export interface KalturaLiveChannelBaseFilterArgs  extends KalturaLiveEntryFilterArgs {
    
}


export class KalturaLiveChannelBaseFilter extends KalturaLiveEntryFilter {

    

    constructor(data? : KalturaLiveChannelBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveChannelBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannelBaseFilter',KalturaLiveChannelBaseFilter);
