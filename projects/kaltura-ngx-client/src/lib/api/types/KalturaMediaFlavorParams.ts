
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';

export interface KalturaMediaFlavorParamsArgs  extends KalturaFlavorParamsArgs {
    
}


export class KalturaMediaFlavorParams extends KalturaFlavorParams {

    

    constructor(data? : KalturaMediaFlavorParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFlavorParams' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaFlavorParams'] = KalturaMediaFlavorParams;