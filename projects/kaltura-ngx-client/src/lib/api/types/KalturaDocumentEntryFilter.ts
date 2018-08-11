
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDocumentEntryBaseFilter, KalturaDocumentEntryBaseFilterArgs } from './KalturaDocumentEntryBaseFilter';

export interface KalturaDocumentEntryFilterArgs  extends KalturaDocumentEntryBaseFilterArgs {
    
}


export class KalturaDocumentEntryFilter extends KalturaDocumentEntryBaseFilter {

    

    constructor(data? : KalturaDocumentEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentEntryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDocumentEntryFilter'] = KalturaDocumentEntryFilter;