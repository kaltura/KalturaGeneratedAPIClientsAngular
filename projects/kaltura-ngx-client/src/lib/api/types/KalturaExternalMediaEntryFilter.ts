
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaExternalMediaEntryBaseFilter, KalturaExternalMediaEntryBaseFilterArgs } from './KalturaExternalMediaEntryBaseFilter';

export interface KalturaExternalMediaEntryFilterArgs  extends KalturaExternalMediaEntryBaseFilterArgs {
    
}


export class KalturaExternalMediaEntryFilter extends KalturaExternalMediaEntryBaseFilter {

    

    constructor(data? : KalturaExternalMediaEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalMediaEntryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExternalMediaEntryFilter'] = KalturaExternalMediaEntryFilter;