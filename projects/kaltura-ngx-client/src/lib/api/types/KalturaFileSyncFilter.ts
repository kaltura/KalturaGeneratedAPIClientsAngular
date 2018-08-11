
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaFileSyncBaseFilter, KalturaFileSyncBaseFilterArgs } from './KalturaFileSyncBaseFilter';

export interface KalturaFileSyncFilterArgs  extends KalturaFileSyncBaseFilterArgs {
    currentDc? : KalturaNullableBoolean;
}


export class KalturaFileSyncFilter extends KalturaFileSyncBaseFilter {

    currentDc : KalturaNullableBoolean;

    constructor(data? : KalturaFileSyncFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileSyncFilter' },
				currentDc : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFileSyncFilter'] = KalturaFileSyncFilter;