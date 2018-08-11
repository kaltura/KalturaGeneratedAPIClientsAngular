
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUploadTokenBaseFilter, KalturaUploadTokenBaseFilterArgs } from './KalturaUploadTokenBaseFilter';

export interface KalturaUploadTokenFilterArgs  extends KalturaUploadTokenBaseFilterArgs {
    
}


export class KalturaUploadTokenFilter extends KalturaUploadTokenBaseFilter {

    

    constructor(data? : KalturaUploadTokenFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadTokenFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUploadTokenFilter'] = KalturaUploadTokenFilter;