
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadBaseFilter, KalturaBulkUploadBaseFilterArgs } from './KalturaBulkUploadBaseFilter';

export interface KalturaBulkUploadFilterArgs  extends KalturaBulkUploadBaseFilterArgs {
    
}


export class KalturaBulkUploadFilter extends KalturaBulkUploadBaseFilter {

    

    constructor(data? : KalturaBulkUploadFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadFilter'] = KalturaBulkUploadFilter;