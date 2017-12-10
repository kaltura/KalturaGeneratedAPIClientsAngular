
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveChannelBaseFilter, KalturaLiveChannelBaseFilterArgs } from './KalturaLiveChannelBaseFilter';

export interface KalturaLiveChannelFilterArgs  extends KalturaLiveChannelBaseFilterArgs {
    
}


export class KalturaLiveChannelFilter extends KalturaLiveChannelBaseFilter {

    

    constructor(data? : KalturaLiveChannelFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveChannelFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannelFilter',KalturaLiveChannelFilter);
