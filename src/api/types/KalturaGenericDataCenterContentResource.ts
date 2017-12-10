
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaGenericDataCenterContentResource',KalturaGenericDataCenterContentResource);
