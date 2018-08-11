
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';

export interface KalturaQuizUserEntryBaseFilterArgs  extends KalturaUserEntryFilterArgs {
    
}


export class KalturaQuizUserEntryBaseFilter extends KalturaUserEntryFilter {

    

    constructor(data? : KalturaQuizUserEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizUserEntryBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuizUserEntryBaseFilter'] = KalturaQuizUserEntryBaseFilter;