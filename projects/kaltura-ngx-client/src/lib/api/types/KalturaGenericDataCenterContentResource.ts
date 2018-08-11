
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataCenterContentResource, KalturaDataCenterContentResourceArgs } from './KalturaDataCenterContentResource';

export interface KalturaGenericDataCenterContentResourceArgs  extends KalturaDataCenterContentResourceArgs {
    
}


export class KalturaGenericDataCenterContentResource extends KalturaDataCenterContentResource {

    

    constructor(data? : KalturaGenericDataCenterContentResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDataCenterContentResource' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericDataCenterContentResource'] = KalturaGenericDataCenterContentResource;